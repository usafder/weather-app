/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Router from './router';

const appCss = css({
  textAlign: 'center',
  position: 'fixed',
  padding: 0,
  margin: 0,
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});

function App() {
  return (
    <div css={appCss}>
      <Router />
    </div>
  );
}

export default App;
