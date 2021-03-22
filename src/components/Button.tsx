import styled from '@emotion/styled';

interface ButtonProps {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  style?: React.CSSProperties;
  className?: string;
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  const { className, disabled, style, text, onClick } = props;

  return (
    <button
      type="submit"
      className={className}
      style={{ ...style }}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  className: '',
  style: undefined,
  disabled: false,
};

const StyledButton = styled(Button)`
  padding-top: 8px;
  padding-bottom: 8px;
  border: 1px solid;
  border-color: gray;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0px gray;
  cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};
`;

export default StyledButton;
