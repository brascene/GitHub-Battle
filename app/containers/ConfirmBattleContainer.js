import React from 'react'
import ConfirmBattle from '../components/ConfirmBattle'
import githubHelpers from '../utils/githubHelpers'

export default React.createClass({
    //contextTypes se dodaje da bi mogli baratati sa rutama
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function(){
        return {
          isLoading: true,
          playerInfo: []
      }
    },
    componentWillMount: function(){
        console.log("Component will mount");
    },
    componentDidMount: function(){
        var query = this.props.location.query;
        var states = this;
        githubHelpers.getPlayersInfo([query.playerOne,query.playerTwo])
            .then(function(players){
                states.setState({
                    isLoading: false,
                    playerInfo: [players[0],players[1]]
                })
            })
    },
    componentWillReceiveProps: function(){
        console.log("Component will receive props");
    },
    componentWillMount: function(){
            window.scrollTo(0, 0);
    },
    handleInitiateBattle: function(){
        this.context.router.push({
            pathname:'/results',
            state: {
                playerInfo: this.state.playerInfo
            }
        })
    },
    render(){
        return (
            <div>
                <ConfirmBattle
                    isLoading={this.state.isLoading}
                    onInitiateBattle={this.handleInitiateBattle}
                    playersInfo={this.state.playerInfo}></ConfirmBattle>
            </div>
        )
    }
})