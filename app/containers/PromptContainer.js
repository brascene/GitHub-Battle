import React from 'react'

var transparentBg = require('../styles').transparentBg;
import Prompt from '../components/Prompt'


import {connect} from 'react-redux'
import {fetchGithubUser} from '../redux/actions/userAction'
import store from '../redux/index'
import {addUser} from '../redux/actions/userAction'
import {addRepos} from '../redux/actions/userAction'

class PromptContainer extends  React.Component{
    constructor(props,context){
        super(props)
        this.state={
            username: ''
        }
    }
    handleUpdateUser(e){
        this.setState({
            username: e.target.value
        })
    }
    handleSubmitUser(e){
        e.preventDefault();
        var username = this.state.username;

        this.props.dispatch(addUser(this.state.username))
        this.props.dispatch(addRepos(this.state.username))

        this.setState({
            username:''
        });

        if(this.props.routeParams.playerOne){
            this.context.router.push({
                pathname: '/battle',
                query: {
                    playerOne: this.props.routeParams.playerOne,
                    playerTwo: this.state.username
                }
            })
        } else {
            this.context.router.push('/playerTwo/'+this.state.username);
        }
    }
    render(){
        return (
            <Prompt
                onSubmitUser={this.handleSubmitUser.bind(this)}
                onUpdateUser={this.handleUpdateUser.bind(this)}
                header={this.props.route.header}
                username={this.state.username}/>
        )
    }
}

PromptContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
}

function mapStateToProps(state){
    return {
        routing: state.routing,
        user: state.users
    }
}

export default connect(mapStateToProps)(PromptContainer)