import React from 'react'
import {connect} from 'react-redux'

class TestProps extends React.Component{
    componentWillMount(){
        console.log("Component will mount");
        console.log("Users: ",this.props.user.users);
        console.log("Repos: ", this.props.user.repos)
    }
    render(){
        return (
            <div>
                <h2>Testiram pristup github userima bez get requesta (console log)</h2>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.users
    }
}

export default connect (mapStateToProps)(TestProps)
