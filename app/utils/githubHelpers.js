import axios from 'axios'

var id = "";
var sec = "";
var params = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo(username){
    return axios.get('https://api.github.com/users/' + username);
    //ovo vraca promise
}

function getRepos (username){
    return axios.get("https://api.github.com/users/"+username+"/repos");
}

function getTotalStars(repos){
    return repos.data.reduce(function(prev,curr){
        return prev + curr.stargazers_count;
    },0)
}

function getPlayersData(player){
    return getRepos(player.login)
        .then(getTotalStars)
        .then(function(totalStars){
            return {
                followers: player.followers,
                totalStars: totalStars
            }
        })
}

function calculateScores(players){
    return [
        players[0].followers * 3 + players[0].totalStars,
        players[1].followers * 3 + players[1].totalStars
    ]
}

var helpers = {
    getPlayersInfo: function(players){
        //ovdje sad radimo preko mapa niz promisa i guramo ga u axios.all, na koji primjenimo then
        return axios.all(players.map(function(username){
            return getUserInfo(username);
        })).then(function(result){
            return result.map(function(user){
                return user.data;
                //ovo i dalje vraca promise
            })
        }).catch(function(err){
            console.log(err);
        })
    },
    battle: function(players){
        var playerOneData = getPlayersData(players[0]);
        var playerTwoData = getPlayersData(players[1]);
        return axios.all([playerOneData,playerTwoData])
            .then(calculateScores)
            .catch(function(err){
                console.log(err);
            })
    }
}

module.exports = helpers;