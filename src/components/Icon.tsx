import styled from '@emotion/styled';

interface IconProps {
  name: string;
  size: number;
  style?: React.CSSProperties;
}

const Icon = (props: IconProps) => {
  const { name, size, style } = props;
  return <i className={name} style={{ fontSize: size, ...style }} />;
};

Icon.defaultProps = {
  style: undefined,
};

const StyledIcon = styled(Icon)``;

export default StyledIcon;
