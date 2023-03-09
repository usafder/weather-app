/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface TextInputProps {
  placeholder: string;
  value: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  className?: string;
}

const textInputCss = css({
  paddingTop: '8px',
  paddingBottom: '8px',
});

const TextInput = (props: TextInputProps) => {
  const { className, type, placeholder, value, disabled, onChange } = props;

  return (
    <input
      className={className}
      css={textInputCss}
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
};

export default TextInput;
