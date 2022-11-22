import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import './index.css';
import App from './App';
import Provider from './context/Provider';
import theme from './theme';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <HashRouter>
      <Provider>
        <ThemeProvider theme={ theme }>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </Provider>
    </HashRouter>,
  );
