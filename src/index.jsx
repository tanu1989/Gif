import { Router, browserHistory, hashHistory  } from 'react-router';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import store from './stores/Store';
import routes from './components/routes'
import './styles/main.scss';

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} >
            {routes(store)}
        </Router>
    </Provider>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}