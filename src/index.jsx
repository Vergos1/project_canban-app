import React from 'react';
import ReactDOM from 'react-dom/client';
import CustomTheme from './config/MantineConfig/MantineConfig.jsx';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_REACT_APP_GOOGLE_API_TOKEN}>
      <MantineProvider theme={CustomTheme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MantineProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>,
);
