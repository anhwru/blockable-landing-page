import React from 'react';
import ReactDOM from 'react-dom';
import { DataProvider } from './contexts/data.context';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
