/** Converts meter per second value into kilometer per hour */
export function convertMPSToKMH(valueToConvert: number) {
  return valueToConvert * 3.6;
}

/** Returns the rounded off value. */
export function roundOffValue(valueToRoundOff: number) {
  return Math.round(valueToRoundOff);
}
