/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface IconProps {
  name: string;
  size: number;
  css?: any;
}

const Icon = (props: IconProps) => {
  const { name, css: cssStyle, size } = props;
  return (
    <i
      className={name}
      css={css`
        font-size: ${size};
        ${cssStyle}
      `}
    />
  );
};

Icon.defaultProps = {
  css: undefined,
};

export default Icon;
