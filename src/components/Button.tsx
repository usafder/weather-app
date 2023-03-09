/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface ButtonProps {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  disabled?: boolean;
}

const buttonCss = css({
  paddingTop: '8px',
  paddingBottom: '8px',
  border: '1px solid',
  borderColor: 'gray',
  borderRadius: '4px',
  boxShadow: '0 2px 4px 0px gray',
  cursor: 'pointer',
  '&:disabled': {
    cursor: 'not-allowed',
  },
});

const Button = (props: ButtonProps) => {
  const { className, disabled, text, onClick } = props;

  return (
    <button
      css={buttonCss}
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
  disabled: false,
};

export default Button;
