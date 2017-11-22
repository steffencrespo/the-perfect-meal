import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router } from 'react-router-dom';

import './index.css';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ), document.getElementById('root'));
registerServiceWorker();
