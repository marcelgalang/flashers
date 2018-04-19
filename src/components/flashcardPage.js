import React, { Component } from 'react'

class FlashcardPage extends Component {

  constructor(props) {
    super(props);
    this.state = {

      isFlipped: false
    };
    this.onFlip = this.onFlip.bind(this);

  }

  onFlip = () => {
    this.setState(prevState => ({
      isFlipped: !prevState.isFlipped
    }));
  }

  render(){
    console.log("On FC page")

    const flashcard = this.props.flashcard
    const side = this.state.isFlipped ? (<h1 onClick={this.onFlip} >{flashcard.b_side}</h1>) : (<h1 onClick={this.onFlip} >{flashcard.a_side}</h1>)

    return(

      <div>

        {side}


      </div>


      )
  }
}


export default FlashcardPage