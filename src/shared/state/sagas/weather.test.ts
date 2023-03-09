import { call, put, takeLatest } from 'redux-saga/effects';
import { getWeatherDataUsingCityName, getWeatherDataUsingLatAndLong } from '@api/weather';
import cacheManager from '@shared/cache-manager';
import { ReduxAction } from '@shared/interfaces/redux';
import { getWeatherDataFailure, getWeatherDataSuccess } from '@state/action-creators/weather';
import { GET_WEATHER_DATA } from '@state/action-types/weather';
import weatherWatcherSaga, {
  getLocationCoordinates,
  handleWeatherAPIResponse,
  getCurrentLocationWeatherData,
  handleGettingWeatherData,
} from './weather';

describe('weather - saga', () => {
  test('getLocationCoordinates', () => {
    const iterator = getLocationCoordinates();
    iterator.next();
    expect(iterator.next({ longitude: 12345, latitude: 12345 }).value).toEqual({
      longitude: 12345,
      latitude: 12345,
    });
  });

  test('handleWeatherAPIResponse - success scenario', () => {
    const response = {
      data: { name: 'testing' },
      status: 200,
      success: true,
    };
    const iterator = handleWeatherAPIResponse(response as any);
    expect(iterator.next().value).toEqual(put(getWeatherDataSuccess(response.data as any)));
    expect(iterator.next().value).toEqual(
      call(cacheManager.saveData, response.data.name, JSON.stringify(response.data))
    );
    expect(iterator.next().value).toEqual(call(cacheManager.removeData, response.data.name));
    expect(iterator.next().done).toEqual(true);
  });

  test('handleWeatherAPIResponse - failure scenario', () => {
    const response = {
      data: { name: 'testing' },
      status: 404,
      success: false,
    };
    const iterator = handleWeatherAPIResponse(response as any);
    expect(iterator.next().value).toEqual(put(getWeatherDataFailure()));
  });

  test('getCurrentLocationWeatherData - success scenario', () => {
    const iterator = getCurrentLocationWeatherData();
    iterator.next();
    expect(
      iterator.next({
        latitude: 12345,
        longitude: 12345,
      } as any).value
    ).toEqual(call(getWeatherDataUsingLatAndLong, 12345, 12345));
    expect(iterator.next({} as any).value).toEqual(call(handleWeatherAPIResponse, {} as any));
    expect(iterator.next().done).toEqual(true);
  });

  test('getCurrentLocationWeatherData - failure scenario', () => {
    const iterator = getCurrentLocationWeatherData();
    iterator.next();
    expect(iterator.throw(new Error('testing error')).value).toEqual(put(getWeatherDataFailure()));
  });

  test('handleGettingWeatherData - success scenario (cache)', () => {
    const action: ReduxAction = {
      type: GET_WEATHER_DATA,
      payload: 'testing',
    };
    const iterator = handleGettingWeatherData(action);
    iterator.next();
    expect(iterator.next({ cachedData: '{}' } as any).value).toEqual(
      put(getWeatherDataSuccess({} as any))
    );
  });

  test('handleGettingWeatherData - success scenario (API)', () => {
    const action: ReduxAction = {
      type: GET_WEATHER_DATA,
      payload: 'testing',
    };
    const iterator = handleGettingWeatherData(action);
    iterator.next();
    expect(iterator.next({ cachedData: null } as any).value).toEqual(
      call(getWeatherDataUsingCityName, action.payload)
    );
    expect(iterator.next({} as any).value).toEqual(call(handleWeatherAPIResponse, {} as any));
  });

  test('handleGettingWeatherData - failure scenario', () => {
    const action: ReduxAction = {
      type: GET_WEATHER_DATA,
      payload: '',
    };
    const iterator = handleGettingWeatherData(action);
    expect(iterator.next().value).toEqual(call(getCurrentLocationWeatherData));
  });

  test('weatherWatcherSaga', () => {
    const iterator = weatherWatcherSaga();
    expect(iterator.next().value).toEqual(takeLatest(GET_WEATHER_DATA, handleGettingWeatherData));
  });
});
