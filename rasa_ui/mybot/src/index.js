import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Home from './Home';


import { store } from './store';
import { Provider } from 'react-redux';

// const path = window.location.pathname

ReactDOM.render(
  
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>,
  
  document.getElementById('root')
);


