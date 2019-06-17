import React, { Component } from 'react'
import DisplayGame from '../components/DisplayGame'

class GameDetails extends Component {
  render() {
    return (
      <div>
       <DisplayGame id ={this.props.match.params.id}/>
      </div>
    )
  }
}

export default GameDetails
