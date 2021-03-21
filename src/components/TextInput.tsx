interface TextInputProps {
  type: string;
  placeholder: string;
  value: string;
  disabled: boolean;
  onChange: (event: any) => void;
  style?: React.CSSProperties;
}

// TODO: use emotion lib

const TextInput = (props: TextInputProps) => {
  return (
    <input
      style={{ paddingTop: 8, paddingBottom: 8, ...props.style }}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      disabled={props.disabled}
      onChange={props.onChange}
    />
  );
};

TextInput.defaultProps = {
  type: 'text',
  disabled: false,
};

export default TextInput;
