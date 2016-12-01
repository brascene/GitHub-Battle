import React from 'react'
import Results from '../components/Results'
import githubHelpers from '../utils/githubHelpers'

export default React.createClass({
    getInitialState: function(){
        return {
            isLoading: true,
            scores: []
        }
    },
    componentDidMount: function(){
        var players = this.props.location.state.playerInfo;
        console.log(players)
        githubHelpers.battle(players)
            .then(function(scores){
                this.setState({
                    scores:scores,
                    isLoading:false
                })
            }.bind(this))
    },
    componentWillMount: function(){
        window.scrollTo(0, 0);
    },
    render(){
        return (
            <Results
                isLoading={this.state.isLoading}
                playersInfo={this.props.location.state.playerInfo}
                scores={this.state.scores}/>
        )
    }
})

