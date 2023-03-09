/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { roundOffValue } from '../../shared/utils/converters';
import Icon from '../Icon';

interface WeatherIconTextProps {
  value: string | number;
  unit: string;
  icon: string;
}

const containerCss = css({
  display: 'flex',
  alignItems: 'center',
});

const valueCss = css({
  fontSize: '36px',
  fontFamily: 'Fjalla One, sans-serif',
  marginLeft: '10px',
});

const unitCss = css({
  fontSize: '16px',
});

const WeatherIconText = (props: WeatherIconTextProps) => {
  const { value, unit, icon } = props;

  return (
    <div css={containerCss}>
      <Icon name={icon} />
      <div css={valueCss}>
        {roundOffValue(value as number)}
        <span css={unitCss}>{unit}</span>
      </div>
    </div>
  );
};

export default WeatherIconText;
