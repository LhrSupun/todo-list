import Todo from './ToDo/index';
import { Provider } from 'react-redux';
import React from 'react';
import reducer from './store/reducers/index';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

/*
import './index.css';
import App from './App';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/
const store = createStore(reducer);
const app = (
  <Provider store={store}>
      <Todo />
  </Provider>
)
ReactDOM.render(app, document.getElementById('root'));

reportWebVitals(console.log('working'));
