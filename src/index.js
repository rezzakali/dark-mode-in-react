import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './App.css';
import ThemeContextWrapper from './contexts/ThemeContextWrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeContextWrapper>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeContextWrapper>
);
