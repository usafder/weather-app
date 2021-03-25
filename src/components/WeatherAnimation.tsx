/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Skycons, { SkyconsType } from 'react-skycons';

interface WeatherAnimationProps {
  color: string;
  type: any;
  size: number;
  resizeClear?: boolean;
  className?: string;
  css?: any;
}

const WeatherAnimation = (props: WeatherAnimationProps) => {
  const { color, type, size, css: cssStyle, resizeClear, className } = props;

  return (
    <Skycons
      className={className}
      color={color}
      type={type}
      size={size}
      resizeClear={resizeClear}
      css={css`
        ${cssStyle}
      `}
    />
  );
};

WeatherAnimation.defaultProps = {
  className: '',
  resizeClear: true,
  css: undefined,
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

export default WeatherAnimation;
