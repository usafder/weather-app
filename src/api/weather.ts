import { apiClient, apiKey } from './api-client';

/** Will fetch the weather data based on the city name. */
export const getWeatherDataUsingCityName = async (city: string) => {
  try {
    const queryParams = `?q=${city}&appId=${apiKey}&units=metric`;
    const response = await apiClient.get(queryParams);
    return { ...response, success: response && response.status === 200 };
  } catch (error) {
    return error;
  }
};

/** Will fetch the weather data based on the latitude and longitude. */
export const getWeatherDataUsingLatAndLong = async (
  latitude: number,
  longitude: number
) => {
  try {
    const queryParams = `?lat=${latitude}&lon=${longitude}&appId=${apiKey}&units=metric`;
    const response = await apiClient.get(queryParams);
    return { ...response, success: response && response.status === 200 };
  } catch (error) {
    return error;
  }
};
