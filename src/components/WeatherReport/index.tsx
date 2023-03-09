/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Weather } from '../../shared/interfaces/weather';
import { convertMPSToKMH, roundOffValue } from '../../shared/utils/converters';
import { mapWindIcon } from '../../shared/utils/mappers';
import WeatherAnimation, { WeatherAnimationType } from '../WeatherAnimation';
import Temperature from '../Temperature';
import Icon from '../Icon';

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

const renderDataWithIcon = (data: number, unit: string, iconName: string) => (
  <h1
    css={css`
      padding: 4px;
      margin: 0;
      font-family: 'Fjalla One', sans-serif;
    `}
  >
    <span
      css={css`
        padding: 8px;
        padding-bottom: 0;
        padding-top: 0;
      `}
    >
      <Icon name={iconName} />
    </span>
    {roundOffValue(data)}
    <span
      css={css`
        font-size: 16px;
      `}
    >
      {unit}
    </span>
  </h1>
);

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
            {/* Humidity */}
            {renderDataWithIcon(roundOffValue(weatherData.main.humidity), '%', 'wi wi-raindrop')}

            {/* Wind Speed */}
            {renderDataWithIcon(
              roundOffValue(convertMPSToKMH(weatherData.wind.speed)),
              'Km/h',
              mapWindIcon(roundOffValue(convertMPSToKMH(weatherData.wind.speed)))
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default WeatherReport;
