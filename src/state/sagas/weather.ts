import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  getWeatherDataFailure,
  getWeatherDataSuccess,
} from '../action-creators/weather';
import { GET_WEATHER_DATA } from '../action-types/weather';
import {
  getWeatherDataUsingCityName,
  getWeatherDataUsingLatAndLong,
} from '../../api/weather';
import { ReduxAction, Weather } from '../../shared/interfaces';

export const getLocationCoordinates = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (location) => resolve(location),
      (error) => reject(error)
    );
  });
};

export function* handleGettingWeatherData(action: ReduxAction) {
  let response: AxiosResponse<Weather>;
  if (action.payload) {
    const city = action.payload;
    response = yield call(getWeatherDataUsingCityName, city);
  } else {
    const { coords } = yield call(getLocationCoordinates);
    const { latitude, longitude } = coords;
    response = yield call(getWeatherDataUsingLatAndLong, latitude, longitude);
  }

  if (response && response.status >= 200 && response.status < 300) {
    yield put(getWeatherDataSuccess(response.data));
  } else {
    yield put(getWeatherDataFailure());
  }
}

export default function* weatherWatcherSaga() {
  yield takeLatest(GET_WEATHER_DATA, handleGettingWeatherData);
}
