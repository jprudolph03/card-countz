//God component.  Controlls ALL
import React, {Component} from 'react';
import ShowCard from './ShowCard';
import axios from 'axios';

import Container from 'react-bootstrap/Container'

class Dealer extends Component{
  constructor(props){
    super(props);
    this.state = {
      deckId: '',
      remaining: ''
    }
    this.axiosGetNewDeck = this.axiosGetNewDeck.bind(this);
  }

  axiosGetNewDeck(){
    //when component is rendered
    axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(response => {
      console.log(response);
      //handle response
      this.setState({
        deckId: response.data.deck_id,
      })
    })
    //if error
    .catch(error => {
      console.log(error)
    })
  }


  componentDidMount(){
    this.axiosGetNewDeck();
  }


  render(){
    return(
      <div>
        <Container>
          <ShowCard deckId={this.state.deckId} />
        </Container>
      </div>
    )
  }
}

export default Dealer;
