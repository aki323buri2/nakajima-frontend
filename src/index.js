import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Providers from './providers/Providers';

ReactDOM.render(
  <React.Fragment>
    <Providers>
      <App />
    </Providers>
  </React.Fragment>,
  document.getElementById('root')
  );