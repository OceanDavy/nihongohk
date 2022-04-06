import React, { Component } from 'react';

import "./flashcard.css";

let hiraganaArr = [
    ["A", "あ"], ["I", "い"], ["U", "う"],
    ["E", "え"], ["O", "お"], ["KA", "か"],
    ["KI", "き"], ["KU", "く"], ["KE", "け"],
    ["KO", "こ"], ["SA", "さ"], ["SHI", "し"],
    ["SU", "す"], ["SE", "せ "], ["SO", "そ"],
    ["TA", "た"], ["CHI", "ち"], ["TSU", "つ"],
    ["TE", "て"], ["TO", "と"], ["NA", "な"],
    ["NI", "に"], ["NU", "ぬ"], ["NE", "ね"],
    ["NO", "の"], ["HA", "は"], ["HI", "ひ"],
    ["FU", "ふ"], ["HE", "へ"], ["HO", "ほ"],
    ["MA", "ま"], ["MI", "み"], ["MU", "む"],
    ["ME", "め"], ["MO", "も"], ["YA", "や"],
    ["YU", "ゆ"], ["YO", "よ"], ["RA", "ら"],
    ["RI", "り"], ["RU", "る"], ["RE", "れ"],
    ["RO", "ろ"], ["WA", "わ"], ["O", "を"],
    ["N", "ん"]
  ];

  let toGuess = [];
  let cards = [];

export class Flashcard extends Component {
  state = {
    guessCard: [],
    optionsCards: [],
    score: 0,
    status: "",
    next: ""
  }

  componentDidMount(){
    this.randomGenerate();
  }

  randomGenerate(){
    cards = [];

    for(let i=0; i < 3; i++){
      cards.push(hiraganaArr[Math.floor(Math.random() * hiraganaArr.length)]);
    }
    toGuess = cards[Math.floor(Math.random() * cards.length)];
    console.log(toGuess);
    console.log(cards[1][0] + " " + cards[0][0]  + " "+ cards[2][0]);

        this.setState({
          guessCard: toGuess,
          optionsCards: cards
        });
  }

  guessMethod(a){
    if(a === toGuess[0]){
      this.setState({
        status: "Correct!",
        next: "next"
      });
    } else{
      this.setState({
        status: "Wrong",
        next: "restart"
      });
    }
  }

  render() {
    return (
      <div className='flashcard-box flex'>
          <div className='flashcard'>
            {/* CHART TO GUESS SECTION */ }
            <div className='partA flex flex-fd-c flex-ai-c'>
                <p className='score' id='score'>Score: { this.state.score }</p>
                <p className='chart' id='chart'> { this.state.guessCard[1] } </p>
                <div className='win-message flex'>
                    <p className='correct' id='correct'> { this.state.status }</p>
                    <p className='next' id='next' onClick={ () => {this.randomGenerate()}}> { this.state.next } </p>
                </div>
            </div>
            {/* OPTIONS SECTION */ }
            <div className='partB'> 
                <h3>Choose Your Answer</h3>
                <div className='options'>
                  <p onClick={() => this.guessMethod(this.state.optionsCards[2][0])}> { cards[2] }</p>
                  <p onClick={() => this.guessMethod(this.state.optionsCards[1][0])}> { cards[1] } </p>
                  <p onClick={() => this.guessMethod(this.state.optionsCards[0][0])}> { cards[0] }</p>
                </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Flashcard