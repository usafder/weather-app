import styled from '@emotion/styled';

interface TextInputProps {
  type: string;
  placeholder: string;
  value: string;
  disabled: boolean;
  onChange: (event: any) => void;
  style?: React.CSSProperties;
  className?: string;
}

const TextInput = (props: TextInputProps) => {
  return (
    <input
      className={props.className}
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

const StyledTextInput = styled(TextInput)`
  padding-top: 8px;
  padding-bottom: 8px;
`;

export default StyledTextInput;
