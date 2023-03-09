/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { convertMPSToKMH, roundOffValue } from '../../shared/utils/converters';
import { mapWindIcon } from '../../shared/utils/mappers';
import Icon from '../Icon';

interface WindSpeedProps {
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

const WindSpeed = (props: WindSpeedProps) => {
  const { value } = props;
  const roundedValueInKMH = roundOffValue(convertMPSToKMH(value));
  return renderDataWithIcon(roundedValueInKMH, 'Km/h', mapWindIcon(roundedValueInKMH));
};

export default WindSpeed;
