import React, { Component } from 'react'
import axios from 'axios';
import {Link} from "react-router-dom"
export class GameList extends Component {
  state = {
    games : []
  }

getGames = async () =>{
  const result = await axios.get("http://www.campus-bordeaux.ovh:3002/joysticks/api/games")
  this.setState({games: result.data})
}


componentDidMount =() => {
  this.getGames()
}

  render() {
    const {games} = this.state
    
    return (
      <div>
        {games.map(game => {
        
        let url =`/gamelist/${game.id}`
          return (
            <div key={game.id}> 
              <p> 
                <Link to = {url}> {game.name} </Link> 
              </p>
            </div>)
                }
              )
        }
      </div>
    )
  }
}

export default GameList
