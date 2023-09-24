import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import { GlobalStyles } from 'twin.macro';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Home />
  </React.StrictMode>
);
