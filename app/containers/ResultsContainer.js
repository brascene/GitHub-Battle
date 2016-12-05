import React from 'react'
import Results from '../components/Results'
import githubHelpers from '../utils/githubHelpers'
import {connect} from 'react-redux'
import {clearUsers} from '../redux/actions/userAction'

class ResultsContainer extends React.Component{
    constructor(props,context){
        super(props);
        this.state={
            isLoading: true,
            scores: []
        }
    }
    componentDidMount(){
        var players = this.props.location.state.playerInfo;
        console.log("ResultContainer: Users ",this.props.user)
        console.log(players)
        githubHelpers.battle(players)
            .then(function(scores){
                this.setState({
                    scores:scores,
                    isLoading:false
                })
            }.bind(this))
    }
    componentWillMount(){
        window.scrollTo(0, 0);
    }
    handleOnStartAgain(){
        this.props.dispatch(clearUsers())
    }
    render(){
        return (
            <Results
                isLoading={this.state.isLoading}
                playersInfo={this.props.location.state.playerInfo}
                scores={this.state.scores}
                onStartAgain={this.handleOnStartAgain.bind(this)}/>
        )
    }
}

function mapStateToProps(state){
    return {
        routing: state.routing,
        user: state.users
    }
}

export default connect(mapStateToProps)(ResultsContainer)

