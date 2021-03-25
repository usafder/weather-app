/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';

interface LoaderProps {
  css?: any;
}

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loader = (props: LoaderProps) => {
  const { css: cssStyle } = props;

  return (
    <div
      css={css`
        animation: ${rotate360} 1s linear infinite;
        transform: translateZ(0);
        border: 8px solid gray;
        border-left: 8px solid skyblue;
        background: transparent;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        ${cssStyle}
      `}
    />
  );
};

Loader.defaultProps = {
  css: undefined,
};

export default Loader;
