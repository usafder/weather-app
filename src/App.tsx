import Router from './router';
import 'weathericons/css/weather-icons.min.css';
import styled from '@emotion/styled';

const AppContainer = styled.div`
  text-align: center;
  height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <Router />
    </AppContainer>
  );
}

export default App;
