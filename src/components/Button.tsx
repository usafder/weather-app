import styled from '@emotion/styled';

interface ButtonProps {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  style?: React.CSSProperties;
  className?: string;
}

const Button = (props: ButtonProps) => {
  const { className, style, text, onClick } = props;

  return (
    <button
      type="submit"
      className={className}
      style={{ ...style }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  className: '',
  style: undefined,
};

const StyledButton = styled(Button)`
  padding-top: 8px;
  padding-bottom: 8px;
  border: 1px solid;
  border-color: gray;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0px gray;
  cursor: pointer;
`;

export default StyledButton;
