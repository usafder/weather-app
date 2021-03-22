import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledLoader = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border: 8px solid gray;
  border-left: 8px solid skyblue;
  background: transparent;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export default StyledLoader;
