import styled from '@emotion/styled';

interface IconProps {
  name: string;
  size: number;
  style?: React.CSSProperties;
}

const Icon = (props: IconProps) => (
  <i className={props.name} style={{ fontSize: props.size, ...props.style }} />
);

const StyledIcon = styled(Icon)``;

export default StyledIcon;
