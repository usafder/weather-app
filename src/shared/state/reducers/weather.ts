import { ReduxAction } from '../../interfaces/redux';
import { Weather } from '../../interfaces/weather';
import {
  GET_WEATHER_DATA,
  GET_WEATHER_DATA_FAILURE,
  GET_WEATHER_DATA_SUCCESS,
} from '../action-types/weather';

interface WeatherState {
  data: Weather | null;
  isLoading: boolean;
  error: boolean;
}

export const INITIAL_STATE: WeatherState = {
  data: null,
  isLoading: true,
  error: false,
};

const weatherReducer = (state: WeatherState = INITIAL_STATE, action: ReduxAction) => {
  switch (action.type) {
    case GET_WEATHER_DATA:
      return { ...INITIAL_STATE };
    case GET_WEATHER_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: false,
        isLoading: false,
      };
    case GET_WEATHER_DATA_FAILURE:
      return {
        ...state,
        data: null,
        error: true,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default weatherReducer;
