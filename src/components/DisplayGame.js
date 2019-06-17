import React, { Component } from 'react'
import axios from 'axios';

class DisplayGame extends Component {

  state = {
    game:{}
  }


  getGames = async () =>{
    let id = this.props.id
    const result = await axios.get(`http://www.campus-bordeaux.ovh:3002/joysticks/api/${id}/games`)
    this.setState({game: result.data})
 
  }
  
  componentDidMount =() => {
    this.getGames()
  }

  render() {

    const {name, pochette, description, image1, image2, promo, theme,date, trailer} = this.state.game
    return (
      <div>
        <p>name : {name}</p>
        <p>pochette : {pochette}</p>
        <p>description : {description}</p>
        <img src={image1} alt={name}/>
        <img src={image2} alt={name}/>
        <p>promo : {promo}</p>
        <p>theme : {theme}</p>
        <p>date : {date}</p>
        <p>trailer : {trailer}</p>

      </div>
    )
  }
}

export default DisplayGame
