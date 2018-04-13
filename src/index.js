import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
