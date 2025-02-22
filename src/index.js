import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer';
import thunk from 'redux-thunk'

const logger = store => {
    return next => {
        return action => {
            const result = next(action)
            return result
        }
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(logger, thunk)))
ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));