/** @jsxImportSource @emotion/react */
import React from 'react';
import RadixSample from './RadixSample';
import { css, Global } from '@emotion/react';

function App() {
  return (
    <>
      <Global styles={baseCss} />
      <div css={containerCss}>
        <RadixSample/>
      </div>
    </>
  );
}

const baseCss = css`
  button {
    all: unset;
  }
`;

const containerCss = css`
  text-align: center;
  height: 200px;
`;
export default App;
