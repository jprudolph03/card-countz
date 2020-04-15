import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Card from './Card';
import DeckCardInfo from './DeckCardInfo';
import axios from 'axios';
class ShowCard extends Component{

  constructor(props){
    super(props);
    this.state = {
      cardImg : '',
      cardCode: '',
      cardValue: '',
      cardSuit: '',
      remaining: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }




  handleClick(){
    axios.get(`https://deckofcardsapi.com/api/deck/${this.props.deckId}/draw/?count=1`)
      .then(res => {
        console.log(res.data);
        this.setState({
          cardImg: `${res.data.cards[0].image}`,
          cardCode: `${res.data.cards[0].code}`,
          cardValue: `${res.data.cards[0].value}`,
          cardSuit: `${res.data.cards[0].suit}`,
          remaining: `${res.data.remaining}`

        })
      })
      .catch(err => {
        console.log(err)
      })
  }


  render(){
    return(
      <div>
        <Button variant='primary' onClick={this.handleClick}>Show Card</Button>
        <h3>{this.props.deckId}</h3>
        <Card src={this.state.cardImg}/>
        <DeckCardInfo
        cardCode={this.state.cardCode}
        cardValue={this.state.cardValue}
        cardSuit={this.state.cardSuit}
        remaining={this.state.remaining}
        />
      </div>
    )
  }
}

export default ShowCard;
