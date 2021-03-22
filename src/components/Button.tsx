import styled from '@emotion/styled';

interface ButtonProps {
  text: string;
  onClick: (event: any) => void;
  style?: React.CSSProperties;
  className?: string;
}

const Button = (props: ButtonProps) => (
  <button
    className={props.className}
    style={{ ...props.style }}
    onClick={props.onClick}
  >
    {props.text}
  </button>
);

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
