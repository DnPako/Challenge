import React from 'react';
import { render } from 'react-dom';
// Redux connection & Roouter
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension';
// Components
import App from './components/app';
// Reducers
import reducers from './reducers';

const createStoreWithMiddleware = composeWithDevTools(applyMiddleware())(createStore);

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
        <App>
        </App>
    </Router>
  </Provider>
  , document.querySelector('.container'));
