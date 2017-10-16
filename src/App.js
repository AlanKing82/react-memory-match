import React, { Component } from 'react';

import './App.css';

function initialCards() {
  return [
    {value: 2, matched: false, flipped: false},
    {value: 4, matched: false, flipped: false},
    {value: 1, matched: false, flipped: false},
    {value: 1, matched: false, flipped: false},
    {value: 3, matched: false, flipped: false},
    {value: 4, matched: false, flipped: false},
    {value: 2, matched: false, flipped: false},
    {value: 3, matched: false, flipped: false}
  ];
}


function Card(props) {
  return (
          <div className="card">
              <div className="topContent">
                  <div className="front">
                      
                  </div>
              </div>
              <div className="bottomContent">
                  <div className="front">
                      
                  </div>
              </div>
    
          </div>
  );
}

class Game extends Component {

  constructor(){
    super();

    this.state = {
      cards: initialCards()
    }


    
  }

  renderCards(cards){
    return cards.map((card, index) => {
      return(
        <Card  
          key={index}
          value={card.value}
        />
      )

    });

  }

  render() {
    return (
          <div className="memory-game">
            <div className="modalContent">
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
