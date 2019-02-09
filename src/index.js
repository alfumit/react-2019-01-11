import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import store from './store';
import {Provider} from 'react-redux';
import history from './history/history';
import { ConnectedRouter } from 'connected-react-router'

console.log(history);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
