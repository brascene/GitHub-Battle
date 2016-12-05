import React from "react";
require ('../Main.css');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

export default React.createClass({
    render() {
        return (
            <div className="main-container">
                <ReactCSSTransitionGroup
                    transitionName="appear"
                    transitionEnterTimeout={1500}
                    transitionLeaveTimeout={1500}>
                    {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
})



