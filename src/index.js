import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import App from './App';
import './index.css';

import reducer from './reducer/myReducer'

// const asyncOperation = data => dispatch => {
//   axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
//     .then(resp=>console.log(resp.data))
// }

const asyncOperation = data => dispatch => {
  axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population', data)
    .then(resp=>{
      dispatch({
        type: FETCH_POPULATION,
        payload: resp.data 
      });
    })
    .catch(err=> {
      dispatch({
        type: FAILURE, 
        payload: err.response 
      });
    })
} 




const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
 </Provider>,
 document.getElementById('root')
);
