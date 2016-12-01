import { Router, Route, browserHistory} from "react-router";

import Main from '../components/Main.js'
import Home from '../components/Home.js'

var routes = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <Route path="/home" component={Home}></Route>
        </Route>
    </Router>
)

module.exports = routes;