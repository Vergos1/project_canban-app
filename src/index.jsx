import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';
import CustomTheme from './config/MantineConfig/MantineConfig.jsx';
import { store } from './store/store.js';
import App from './App.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_REACT_APP_GOOGLE_API_TOKEN}>
        <MantineProvider theme={CustomTheme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </MantineProvider>
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>,
);
