import { call, put, takeLatest } from 'redux-saga/effects';
import { APIResponse } from '../../../api/api-client';
import { getWeatherDataFailure, getWeatherDataSuccess } from '../action-creators/weather';
import { GET_WEATHER_DATA } from '../action-types/weather';
import { getWeatherDataUsingCityName, getWeatherDataUsingLatAndLong } from '../../../api/weather';
import cacheManager from '../../cache-manager';
import geolocation from '../../geolocation';
import { Weather } from '../../interfaces/weather';
import { ReduxAction } from '../../interfaces/redux';

/** Gets the user's current location coordinates (latitude & longitude). */
export function* getLocationCoordinates() {
  const { latitude, longitude } = yield call(geolocation.getCurrentLocation);
  return { latitude, longitude };
}

/** Updates the data or displays an error based on the API response. */
export function* handleWeatherAPIResponse(response: APIResponse<Weather>) {
  if (response?.success) {
    yield put(getWeatherDataSuccess(response.data));
    // TODO: save only the required properties instead of saving all of the properties
    yield call(cacheManager.saveData, response.data.name, JSON.stringify(response.data));
    yield call(cacheManager.removeData, response.data.name);
  } else {
    yield put(getWeatherDataFailure());
  }
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
  if (action.payload) {
    const { cachedData } = yield call(cacheManager.loadData, action.payload);
    if (cachedData) {
      yield put(getWeatherDataSuccess(JSON.parse(cachedData)));
    } else {
      const city = action.payload;
      const response: APIResponse<Weather> = yield call(getWeatherDataUsingCityName, city);
      yield call(handleWeatherAPIResponse, response);
    }
  } else {
    yield call(getCurrentLocationWeatherData);
  }
}

export default function* weatherWatcherSaga() {
  yield takeLatest(GET_WEATHER_DATA, handleGettingWeatherData);
}
