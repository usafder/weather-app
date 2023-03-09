/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

interface IconProps {
  name: string;
}

const iconCss = css({
  fontSize: 30,
});

const Icon = (props: IconProps) => {
  const { name } = props;
  return <i className={name} css={iconCss} />;
};

export default React.memo(Icon);
