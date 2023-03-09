import { call, put, takeLatest } from 'redux-saga/effects';
import { getWeatherDataUsingCityName, getWeatherDataUsingLatAndLong } from '@api/weather';
import { APIResponse } from '@api/api-client';
import { getWeatherDataFailure, getWeatherDataSuccess } from '@state/action-creators/weather';
import { GET_WEATHER_DATA } from '@state/action-types/weather';
import cacheManager from '@shared/cache-manager';
import geolocation from '@shared/geolocation';
import { Weather } from '@shared/interfaces/weather';
import { ReduxAction } from '@shared/interfaces/redux';

/** Gets the user's current location coordinates (latitude & longitude). */
export function* getLocationCoordinates() {
  const { latitude, longitude } = yield call(geolocation.getCurrentLocation);
  return { latitude, longitude };
}

/** Updates the data or displays an error based on the API response. */
export function* handleWeatherAPIResponse(response: APIResponse<Weather>) {
  if (!response.success) {
    yield put(getWeatherDataFailure());
    return;
  }

  yield put(getWeatherDataSuccess(response.data));
  yield call(cacheManager.saveData, response.data.name, JSON.stringify(response.data));
  yield call(cacheManager.removeData, response.data.name);
}

/** Contains logic to get the current location's weather data from the API. */
export function* getCurrentLocationWeatherData() {
  try {
    const { latitude, longitude } = yield call(getLocationCoordinates);
    const response: APIResponse<Weather> = yield call(
      getWeatherDataUsingLatAndLong,
      latitude,
      longitude
    );
    yield call(handleWeatherAPIResponse, response);
  } catch (e) {
    yield put(getWeatherDataFailure());
  }
}

/** Contains logic to get the weather data from the API or the cache. */
export function* handleGettingWeatherData(action: ReduxAction) {
  if (!action.payload) {
    yield call(getCurrentLocationWeatherData);
    return;
  }

  const { cachedData } = yield call(cacheManager.loadData, action.payload);
  if (cachedData) {
    yield put(getWeatherDataSuccess(JSON.parse(cachedData)));
    return;
  }

  const response: APIResponse<Weather> = yield call(getWeatherDataUsingCityName, action.payload);
  yield call(handleWeatherAPIResponse, response);
}

export default function* weatherWatcherSaga() {
  yield takeLatest(GET_WEATHER_DATA, handleGettingWeatherData);
}
