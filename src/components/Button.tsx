/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface ButtonProps {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  css?: any;
  className?: string;
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  const { className, disabled, css: cssStyle, text, onClick } = props;

  return (
    <button
      css={css`
        padding-top: 8px;
        padding-bottom: 8px;
        border: 1px solid;
        border-color: gray;
        border-radius: 4px;
        box-shadow: 0 2px 4px 0px gray;
        cursor: ${disabled ? 'auto' : 'pointer'};
        ${cssStyle}
      `}
      type="submit"
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  className: '',
  css: undefined,
  disabled: false,
};

export default Button;
