/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Weather } from '../../shared/interfaces/weather';
import WeatherAnimation, { WeatherAnimationType } from '../WeatherAnimation';
import Temperature from '../Temperature';
import WindSpeed from './WindSpeed';
import Humidity from './Humidity';

interface WeatherReportProps {
  weatherData: Weather;
}

const containerCss = css({
  color: 'white',
});

const cityNameCss = css({
  margin: 0,
  marginBottom: '10px',
  fontFamily: 'Share Tech Mono monospace',
  fontSize: '2em',
});

const WeatherReport = (props: WeatherReportProps) => {
  const { weatherData } = props;

  return (
    weatherData && (
      <div css={containerCss}>
        <h1 css={cityNameCss}>{weatherData.name.toUpperCase()}</h1>

        <WeatherAnimation
          color="white"
          type={WeatherAnimationType[weatherData.weather[0].main as any]}
          size={220}
        />

        <div
          css={css`
            display: flex;
            justify-content: center;
            margin-top: 10px;
          `}
        >
          <Temperature value={weatherData.main.temp} />
          <div
            css={css`
              border-top-color: white;
              border-top: 1px solid;
            `}
          >
            <Humidity value={weatherData.main.humidity} />
            <WindSpeed value={weatherData.wind.speed} />
          </div>
        </div>
      </div>
    )
  );
};

export default WeatherReport;
