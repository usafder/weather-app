/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';

interface LoaderProps {
  containerClassName?: string;
  className?: string;
  isLoading: boolean;
}

const loaderContainerCss = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const loaderCss = css({
  animation: `${rotate360} 1s linear infinite`,
  transform: 'translateZ(0)',
  border: '8px solid gray',
  borderLeft: '8px solid skyblue',
  background: 'transparent',
  width: '100px',
  height: '100px',
  borderRadius: '50%',
});

const Loader = (props: LoaderProps) => {
  const { containerClassName, className, isLoading } = props;

  if (!isLoading) {
    return null;
  }

  return (
    <div css={loaderContainerCss} className={containerClassName}>
      <div css={loaderCss} className={className} />;
    </div>
  );
};

Loader.defaultProps = {
  containerClassName: '',
  className: '',
};

export default Loader;
