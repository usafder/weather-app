import {
  GET_WEATHER_DATA,
  GET_WEATHER_DATA_FAILURE,
  GET_WEATHER_DATA_SUCCESS,
} from '@state/action-types/weather';
import { getWeatherData, getWeatherDataFailure, getWeatherDataSuccess } from './weather';

describe('weather - action creators', () => {
  test('getWeatherData', () => {
    expect(getWeatherData('Tokyo')).toEqual({
      type: GET_WEATHER_DATA,
      payload: 'Tokyo',
    });
  });

  test('getWeatherDataSuccess', () => {
    const payload = {} as any;
    expect(getWeatherDataSuccess(payload)).toEqual({
      type: GET_WEATHER_DATA_SUCCESS,
      payload,
    });
  });

  test('getWeatherDataFailure', () => {
    expect(getWeatherDataFailure()).toEqual({
      type: GET_WEATHER_DATA_FAILURE,
    });
  });
});
