import { apiClient } from './api-client';

/** Will fetch the weather data based on the city name. */
export const getWeatherDataUsingCityName = async (city: string) => {
  try {
    const queryParams = `?q=${city}&units=metric`;
    const response = await apiClient.get(queryParams);
    return {
      ...response,
      success: response && response.status >= 200 && response.status < 300,
    };
  } catch (error) {
    return error;
  }
};

/** Will fetch the weather data based on the latitude and longitude. */
export const getWeatherDataUsingLatAndLong = async (latitude: number, longitude: number) => {
  try {
    const queryParams = `?lat=${latitude}&lon=${longitude}&units=metric`;
    const response = await apiClient.get(queryParams);
    return {
      ...response,
      success: response && response.status >= 200 && response.status < 300,
    };
  } catch (error) {
    return error;
  }
};
