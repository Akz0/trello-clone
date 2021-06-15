import React from 'react';
import ReactDOM from 'react-dom';
import Board from './containers/Board';
import './index.css';
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import RootReducer from './store/reducers/rootReducer';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose
const store = createStore(RootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Board />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
