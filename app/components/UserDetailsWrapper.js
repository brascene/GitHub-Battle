import React from 'react'
import UserDetails from './UserDetails'

export default React.createClass({
    propTypes: {
      info: React.PropTypes.object.isRequired
    },
    render(){
        return (
            <div className="col-sm-6">
                <p className="lead">{this.props.header}</p>
                <UserDetails info={this.props.info} score={this.props.score}></UserDetails>
            </div>
        )
    }
})

