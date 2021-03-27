import {
  GET_WEATHER_DATA,
  GET_WEATHER_DATA_FAILURE,
  GET_WEATHER_DATA_SUCCESS,
} from '../action-types/weather';
import weatherReducer, { INITIAL_STATE } from './weather';

describe('weather - reducer', () => {
  test('initial state', () => {
    expect(weatherReducer(undefined, {} as any)).toEqual(INITIAL_STATE);
  });

  test('GET_WEATHER_DATA', () => {
    expect(
      weatherReducer(INITIAL_STATE, {
        type: GET_WEATHER_DATA,
        payload: 'tokyo',
      })
    ).toEqual(INITIAL_STATE);
  });

  test('GET_WEATHER_DATA_SUCCESS', () => {
    expect(
      weatherReducer(INITIAL_STATE, {
        type: GET_WEATHER_DATA_SUCCESS,
        payload: {},
      })
    ).toEqual({
      data: {},
      error: false,
      isLoading: false,
    });
  });

  test('GET_WEATHER_DATA_FAILURE', () => {
    expect(weatherReducer(INITIAL_STATE, { type: GET_WEATHER_DATA_FAILURE })).toEqual({
      data: null,
      error: true,
      isLoading: false,
    });
  });
});
