/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { convertMPSToKMH } from '../../shared/utils/converters';
import { mapWindIcon } from '../../shared/utils/mappers';
import WeatherIconText from './WeatherIconText';
import Temperature from './Temperature';

interface WeatherReportSummaryProps {
  temperature: number;
  humidity: number;
  windSpeed: number;
}

const mainContainerCss = css({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '10px',
});

const windAndHumidityContainerCss = css({
  borderTop: '1px solid white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

const WeatherReportSummary = (props: WeatherReportSummaryProps) => {
  const { temperature, humidity, windSpeed } = props;
  const windSpeedInKMH = convertMPSToKMH(windSpeed);

  return (
    <div css={mainContainerCss}>
      <Temperature value={temperature} />
      <div css={windAndHumidityContainerCss}>
        <WeatherIconText value={humidity} unit="%" icon="wi wi-raindrop" />
        <WeatherIconText value={windSpeedInKMH} unit="Km/h" icon={mapWindIcon(windSpeedInKMH)} />
      </div>
    </div>
  );
};

export default WeatherReportSummary;
