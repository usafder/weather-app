/** Converts meter per second value into kilometer per hour */
export function convertMPSToKMH(valueToConvert: number) {
  return valueToConvert * 3.6;
}

/** Maps the className based on the temperature. */
export function mapWeatherBgColor(temperature: number) {
  let className = '';

  if (temperature >= 35) {
    className = 'hot';
  } else if (temperature >= 20 && temperature < 35) {
    className = 'warm';
  } else if (temperature >= 5 && temperature < 20) {
    className = 'moderate';
  } else if (temperature < 5) {
    className = 'cold';
  }

  return className;
}

/** Maps the className of wind icon based on the wind speed. */
export function mapWindIcon(windSpeed: number) {
  let className = 'wi wi-small-craft-advisory';

  if (windSpeed >= 30 && windSpeed <= 88) {
    className = 'wi wi-gale-warning';
  } else if (windSpeed >= 89 && windSpeed <= 102) {
    className = 'wi wi-storm-warning';
  } else if (windSpeed > 102) {
    className = 'wi wi-hurricane-warning';
  }

  return className;
}

/** Returns the rounded off value. */
export function roundOffValue(valueToRoundOff: number) {
  return Math.round(valueToRoundOff);
}
