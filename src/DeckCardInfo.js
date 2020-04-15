//this is just the info keeping track of the number
import React, {Component} from 'react';


class DeckCardInfo extends Component{
  render(){
    return(
      <div>
        <h3>{this.props.cardCode} - {this.props.cardValue} of {this.props.cardSuit}</h3>
        <h2>Number of cards in deck remaining:</h2>
        <h3>{this.props.remaining}</h3>
      </div>
    )
  }
}

export default DeckCardInfo;
