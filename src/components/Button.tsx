interface ButtonProps {
  text: string;
  onClick: (event: any) => void;
  style?: React.CSSProperties;
}

// TODO: use emotion lib

const Button = (props: ButtonProps) => {
  return (
    <button
      style={{
        paddingTop: 8,
        paddingBottom: 8,
        border: '1px solid',
        borderColor: 'gray',
        borderRadius: 4,
        boxShadow: '0 2px 4px 0px gray',
        cursor: 'pointer',
        ...props.style,
      }}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
