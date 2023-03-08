interface WeatherCondition {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Temperature {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface Wind {
  speed: number;
  deg: number;
}

interface Coordinates {
  lon: number;
  lat: number;
}

export interface Weather {
  coord: Coordinates;
  weather: Array<WeatherCondition>;
  base: string;
  main: Temperature;
  visibility: number;
  wind: Wind;
  clouds: { all: number };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
