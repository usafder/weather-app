/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface TextInputProps {
  placeholder: string;
  value: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  css?: any;
  className?: string;
}

const TextInput = (props: TextInputProps) => {
  const {
    className,
    css: cssStyle,
    type,
    placeholder,
    value,
    disabled,
    onChange,
  } = props;

  return (
    <input
      className={className}
      css={css`
        padding-top: 8px;
        padding-bottom: 8px;
        ${cssStyle}
      `}
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
  css: undefined,
};

export default TextInput;
