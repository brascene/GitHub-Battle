import React from "react";
import { Link } from "react-router"

var transparentBg = require('../styles').transparentBg;

export default React.createClass({
    render() {
        return (
            <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
                <h1>Github battle</h1>
                <Link to='/playerOne'>
                    <button type="button" className="btn btn-lg btn-success">Get Started</button>
                </Link>
            </div>
        )
    }
})

