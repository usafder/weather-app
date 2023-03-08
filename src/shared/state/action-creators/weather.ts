import { Weather } from '../../interfaces/weather';
import {
  GET_WEATHER_DATA,
  GET_WEATHER_DATA_FAILURE,
  GET_WEATHER_DATA_SUCCESS,
} from '../action-types/weather';

export const getWeatherData = (city: string) => ({
  type: GET_WEATHER_DATA,
  payload: city,
});

export const getWeatherDataSuccess = (payload: Weather) => ({
  type: GET_WEATHER_DATA_SUCCESS,
  payload,
});

export const getWeatherDataFailure = () => ({
  type: GET_WEATHER_DATA_FAILURE,
});
