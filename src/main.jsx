import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import NavigationProvider from './utils/NavigationProvider .jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NavigationProvider>
      <App />
    </NavigationProvider>
  </BrowserRouter>
);
