import React from 'react';
import ReactDOM from 'react-dom';

import  'bootstrap/dist/css/bootstrap.min.css';

import './sass/main.scss';


import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from "react-redux";
import {rootReducer} from "./redux/reducers/rootReduser";
import 'react-toastify/dist/ReactToastify.css';
import thunk from "redux-thunk";
import App from './App';


const store =createStore(rootReducer, compose(applyMiddleware(thunk) , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));




ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
    , document.getElementById('root'));
