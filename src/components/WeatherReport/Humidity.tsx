/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { roundOffValue } from '../../shared/utils/converters';
import Icon from '../Icon';

interface HumidityProps {
  value: number;
}

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

const Humidity = (props: HumidityProps) => {
  const { value } = props;
  return renderDataWithIcon(roundOffValue(value), '%', 'wi wi-raindrop');
};

export default Humidity;
