import React, { Component } from 'react'
import GameList from "../components/GameList"
import "../screen/Home.css"

export class Home extends Component {

  state = {
    show:true
  }

  handleShow = () => {
    this.setState({ show : !this.state.show });
  }

  render() {

    const effect = this.state.show ? "showing" : "notShowing"

    return (
      <div>
        <h1>Welcome to get fun with us !</h1>

        <div className ="pressButton">
          <button onClick={this.handleShow}> 
            {this.state.show ? "Show Me The Games" : " I'm Fed Up With Games"} click On it 
          </button>
        </div>
       
        <div className = {effect}>
          <GameList />
        </div>
      
      </div>
    )
  }
}

export default Home
