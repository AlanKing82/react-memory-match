import React, { Component } from 'react';
import classnames from 'classnames';

import './App.css';

function initialCards() {
  return [
    {value: 2, matched: false, flipped: false, text: 'Acutely Toxic'},
    {value: 4, matched: false, flipped: false, text: 'Corrosive'},
    {value: 1, matched: false, flipped: false, text: 'Environmental Hazard'},
    {value: 1, matched: false, flipped: false, text: 'Environmental Hazard'},
    {value: 3, matched: false, flipped: false, text: 'Gas Under Pressure'},
    {value: 4, matched: false, flipped: false, text: 'Corrosive'},
    {value: 2, matched: false, flipped: false, text: 'Acutely Toxic'},
    {value: 3, matched: false, flipped: false, text: 'Gas Under Pressure'}
  ];
}


class Card extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    
    }

  handleClick(e) {
    if (!this.props.flipped) {
      this.props.checkMatch(this.props.value, this.props.id);
    }
  }


  render(){



    var innerClasses = classnames(
      'inside',
      {'picked': this.props.flipped},
      {'matched': this.props.matched}
    );


    
      return (


                <div className="card" onClick={this.handleClick}>	                            
                  <div className={innerClasses}>					                
                    <div className="front">	                                    
                        {this.props.text}                               
                    </div>					                
                    <div className="back">	                                    
                     test                            
                    </div>	                            
                  </div>					          
                </div>
              
      );
  }
}

class Game extends Component {

  constructor(props){
    super(props);
    //this.renderCards = this.renderCards.bind(this);
    this.checkMatch = this.checkMatch.bind(this);

    this.state = {
      cards: initialCards(),
      prevCard: null,
      matched: 0
    }
}

  checkMatch(value, id){
    var cards = this.state.cards;
    cards[id].flipped = true;

    this.setState({cards});

    if(this.state.prevCard){
    

      if(value === this.state.prevCard.value){
        
        var matches = this.state.matched;
        cards[id].matched = true;
        cards[this.state.prevCard.id].matched = true;
        this.setState({cards, prevCard: null, matched: matches + 1});

        
      }
      
    }else{
      this.setState({prevCard: {id, value}});
      
    }


  }

  renderCards(cards){
    return cards.map((card, index) => {
      return(
        <Card  
          key={index}
          value={card.value}
          id={index}
          matched={card.matched}
          flipped={card.flipped}
          text={card.text}
          checkMatch={this.checkMatch} />
      )

    });

  }

  render() {
    return (
          <div className="memory-wrap">
            <div className="memory-game">
              <h1>Memory Match Game</h1>
                {this.renderCards(this.state.cards)}

            </div>
          </div>
      );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">

        <Game />
      </div>
    );
  }
}

export default App;
