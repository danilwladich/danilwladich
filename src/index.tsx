import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <div className="wrapper">
    <HashRouter>
      <App />
    </HashRouter>
  </div>
);