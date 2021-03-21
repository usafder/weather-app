interface IconProps {
  name: string;
  size: number;
  style?: React.CSSProperties;
}

// TODO: use emotion lib

const Icon = (props: IconProps) => {
  return (
    <i
      className={props.name}
      style={{ fontSize: props.size, ...props.style }}
    />
  );
};

export default Icon;
