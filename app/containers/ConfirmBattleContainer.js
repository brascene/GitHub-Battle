import React from 'react'
import ConfirmBattle from '../components/ConfirmBattle'
import {clearUsers} from '../redux/actions/userAction'

import {connect} from 'react-redux'

class ConfirmBattleContainer extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
            isLoading: true,
            playerInfo: []
        }
    }
    componentDidUpdate(prevProps,prevState){
        console.log("Component did mount: ",this.props.user)
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.user.fetched){
            this.setState({
                isLoading: !nextProps.user.fetched,
                playerInfo: nextProps.user.users
            })
        }
    }
    componentWillUnmount(){
        console.log("Battle component will unmount")
        console.log("Routing: ", this.props.routing)
        //this.props.dispatch(clearUsers())
    }
    componentWillMount(){
        window.scrollTo(0, 0);
    }
    handleInitiateBattle(){
        this.context.router.push({
            pathname:'/results',
            state: {
                playerInfo: this.state.playerInfo
            }
        })
    }
    handleStartAgain(){
        this.props.dispatch(clearUsers())
    }
    render(){
            return (
                <div>
                    <ConfirmBattle
                        isLoading={this.state.isLoading}
                        onInitiateBattle={this.handleInitiateBattle.bind(this)}
                        playersInfo={this.state.playerInfo}
                        onStartAgain={this.handleStartAgain.bind(this)}>
                    </ConfirmBattle>
                </div>
            )
        }
}

ConfirmBattleContainer.contextTypes = {
    router: function() { return React.PropTypes.func.isRequired; }
};


function mapStateToProps(state){
    return {
        routing: state.routing,
        user: state.users
    }
}

export default connect(mapStateToProps)(ConfirmBattleContainer)