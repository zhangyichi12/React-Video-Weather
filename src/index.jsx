import './style/style.css';

import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';

import ReduxPromise from 'redux-promise';

import routes from './routes.jsx';

import reducers from './reducers/rootReducer.jsx';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

// Taking this component's generated HTML and put it in the DOM
ReactDom.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>
    ,
    document.querySelector('.mount_point')
);