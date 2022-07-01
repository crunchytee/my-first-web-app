import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DriverProvider } from './DriverContext';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <DriverProvider>
      <App />
    </DriverProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
