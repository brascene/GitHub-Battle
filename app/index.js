var app = document.getElementById('app');

import React from 'react'
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'

import { Router, Route, browserHistory, IndexRoute} from "react-router";

import Main from './components/Main'
import Home from './components/Home'
import PromptContainer from './containers/PromptContainer'
import ConfirmBattleContainer from './containers/ConfirmBattleContainer'
import ResultsContainer from './containers/ResultsContainer'
import TestProps from './components/TestProps'

import {syncHistoryWithStore} from 'react-router-redux'
import store from './redux/index'
const history = syncHistoryWithStore(browserHistory,store)


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Main}>
                <IndexRoute component={Home}></IndexRoute>
                <Route path="/playerOne" header="Player One" component={PromptContainer}></Route>
                <Route path="/playerTwo/:playerOne" header="Player Two" component={PromptContainer}></Route>
                <Route path="battle" component={ConfirmBattleContainer}></Route>
                <Route onUpdate={() => window.scrollTo(0, 0)} path="/results" component={ResultsContainer}></Route>
                <Route path="/testProps" component={TestProps}></Route>
            </Route>
        </Router>
    </Provider>,app
);