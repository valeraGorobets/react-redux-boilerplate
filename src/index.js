import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import appReducer from './Reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(appReducer);

ReactDOM.render(
  <Provider store={store}>
  	<BrowserRouter>
      <App />
  	</BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();