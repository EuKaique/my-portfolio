import React from 'react';
import ReactDOM from 'react-dom/client';
import { Page } from './page';
import { GlobalTheme } from './theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalTheme />
    <Page />
  </React.StrictMode>
);