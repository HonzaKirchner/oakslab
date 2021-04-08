import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import CssBaseline from '@material-ui/core/CssBaseline';
import { SnackbarProvider } from 'notistack';
import './index.css';
import App from './App';

const snackbarProps = {
  anchorOrigin: {
    horizontal: 'center',
    vertical: 'bottom',
  },
  maxSnack: 3,
  autoHideDuration: null,
}

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <RecoilRoot>
      <SnackbarProvider {...snackbarProps}>
        <App />
      </SnackbarProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
