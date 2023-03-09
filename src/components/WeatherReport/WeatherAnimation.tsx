/** @jsxImportSource @emotion/react */
import React from 'react';
import Skycons, { SkyconsType } from 'react-skycons';

interface WeatherAnimationProps {
  color: string;
  type: any;
  size: number;
  resizeClear?: boolean;
  className?: string;
}

const WeatherAnimation = (props: WeatherAnimationProps) => {
  const { color, type, size, resizeClear, className } = props;

  return (
    <Skycons
      className={className}
      color={color}
      type={type}
      size={size}
      resizeClear={resizeClear}
    />
  );
};

WeatherAnimation.defaultProps = {
  className: '',
  resizeClear: true,
};

export enum WeatherAnimationType {
  Clear = SkyconsType.CLEAR_DAY,
  Clouds = SkyconsType.CLOUDY,
  Tornado = SkyconsType.WIND,
  Thunderstorm = SkyconsType.RAIN,
  Rain = SkyconsType.RAIN,
  Drizzle = SkyconsType.SLEET,
  Snow = SkyconsType.SNOW,
  Smoke = SkyconsType.FOG,
  Haze = SkyconsType.FOG,
  Dust = SkyconsType.FOG,
  Fog = SkyconsType.FOG,
}

export default React.memo(WeatherAnimation);
