/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Router from './router';
import 'weathericons/css/weather-icons.min.css';

function App() {
  return (
    <div
      css={css`
        text-align: center;
        position: fixed;
        padding: 0;
        margin: 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      `}
    >
      <Router />
    </div>
  );
}

export default App;
