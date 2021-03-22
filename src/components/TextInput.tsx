import styled from '@emotion/styled';

interface TextInputProps {
  placeholder: string;
  value: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  style?: React.CSSProperties;
  className?: string;
}

const TextInput = (props: TextInputProps) => {
  const {
    className,
    style,
    type,
    placeholder,
    value,
    disabled,
    onChange,
  } = props;

  return (
    <input
      className={className}
      style={{ paddingTop: 8, paddingBottom: 8, ...style }}
      type={type}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      onChange={onChange}
    />
  );
};

TextInput.defaultProps = {
  type: 'text',
  disabled: false,
  className: '',
  style: undefined,
};

const StyledTextInput = styled(TextInput)`
  padding-top: 8px;
  padding-bottom: 8px;
`;

export default StyledTextInput;
