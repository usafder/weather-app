import styled from '@emotion/styled';
import Router from './router';
import 'weathericons/css/weather-icons.min.css';

const AppContainer = styled.div`
  text-align: center;
  position: fixed;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <AppContainer>
      <Router />
    </AppContainer>
  );
}

export default App;
