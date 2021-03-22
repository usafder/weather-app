import styled from '@emotion/styled';
import Router from './router';
import 'weathericons/css/weather-icons.min.css';

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
