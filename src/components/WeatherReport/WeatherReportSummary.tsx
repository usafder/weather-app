/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Temperature from '../Temperature';
import Humidity from './Humidity';
import WindSpeed from './WindSpeed';

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
  borderTopColor: 'white',
  borderTop: '1px solid',
});

const WeatherReportSummary = (props: WeatherReportSummaryProps) => {
  const { temperature, humidity, windSpeed } = props;

  return (
    <div css={mainContainerCss}>
      <Temperature value={temperature} />
      <div css={windAndHumidityContainerCss}>
        <Humidity value={humidity} />
        <WindSpeed value={windSpeed} />
      </div>
    </div>
  );
};

export default WeatherReportSummary;
