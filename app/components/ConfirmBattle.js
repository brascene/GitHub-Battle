import React from 'react'
import styles from '../styles/index'
import { Link } from 'react-router'
import UserDetails from '../components/UserDetails'
import UserDetailsWrapper from '../components/UserDetailsWrapper'

function pljuni (obj){
    return <pre>{JSON.stringify(obj,null,' ')}</pre>
}

// function ConfirmBattle(props){
var ConfirmBattle = (props) => {
    return props.isLoading === true ? <p>Loading battle</p> :
        <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
            <div className="col-sm-8 col-sm-offset-2">
                <UserDetailsWrapper header="Player 1" info={props.playersInfo[0]}></UserDetailsWrapper>
                <UserDetailsWrapper header="Player 2" info={props.playersInfo[1]}></UserDetailsWrapper>
            </div>
            <div className="col-sm-8 col-sm-offset-2">
                <div className="col-sm-12" style={styles.space}>
                    <button type="button" className="btn btn-lg btn-success" onClick={props.onInitiateBattle}>
                            Initiate Battle!
                    </button>
                </div>
                <div className="col-sm-12" style={styles.space}>
                    <Link to="/playerOne">
                        <button type="button" className="btn btn-lg btn-danger" onClick={props.onStartAgain} >Reselect Players</button>
                    </Link>
                </div>
            </div>
        </div>
}

ConfirmBattle.PropTypes={
    isLoading: React.PropTypes.bool.isRequired,
    playersInfo: React.PropTypes.array.isRequired,
    onInitiateBattle: React.PropTypes.func.isRequired,
    onStartAgain: React.PropTypes.func.isPrototypeOf()
}

export default ConfirmBattle