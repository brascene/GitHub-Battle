import React from 'react'
var PropTypes = React.PropTypes;
import style from '../styles/index'

import UserDetailsWrapper from './UserDetailsWrapper'
import UserDetails from './UserDetails'

import { Link } from 'react-router'

function puke (obj){
    return <pre>{JSON.stringify(obj,2,' ')}</pre>
}

function Results(props){
    var winIndex = props.scores[0]>props.scores[1] ? 0 : 1;
    var looseIndex = winIndex == 1 ? 0 : 1;
    console.log(winIndex)
    console.log(looseIndex)
    return (
        <div style={style.transparentBg} className="jumbotron col-sm-12 text-center">
            <h1>Results</h1>
            <div className="col-sm-8 col-sm-offset-2">
                <UserDetailsWrapper header="Winner" info={props.playersInfo[winIndex]} score={props.scores[winIndex]}>
                </UserDetailsWrapper>
                <UserDetailsWrapper header="Looser" info={props.playersInfo[looseIndex]} score={props.scores[looseIndex]}>
                </UserDetailsWrapper>

                <div style={style.transparentBg} className="jumbotron col-sm-12">
                    <Link to="/playerOne">
                        <button className="btn btn-lg btn-danger" onClick={props.onStartAgain}>Start again</button>
                    </Link>
                    <Link to="/testProps">
                        <button className="btn btn-lg btn-success">Test props on another route</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

Results.propTypes={
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    scores: PropTypes.array.isRequired,
    onStartAgain: PropTypes.func.isRequired
}

module.exports = Results;
