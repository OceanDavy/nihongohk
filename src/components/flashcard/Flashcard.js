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

let randomHira = [];
let romanjiCards = [];
let guess = [];

export class Flashcard extends Component {
  
  state = {
    guessCard: [],
    optionsCards: [],
    score: 0
  }
  
  componentDidMount(){
    this.randomGenerate();
  }
  
  randomGenerate(){
    for(let i=0; i < 3; i++){
      randomHira = hiraganaArr[Math.floor(Math.random() * hiraganaArr.length)];
      guess = (randomHira[0]);
    }
    guess = randomHira[1]; //The Hiragana Chart to display

    console.log("Guess: " + guess);
    console.log(randomHira + " Real One");
    console.log(romanjiCards);
    
    
        this.setState({
          guessCard: guess,
          optionsCards: romanjiCards
        });
  }

  render() {
    return (
      <div className='flashcard-box flex'>
          <div className='flashcard'>
            {/* CHART TO GUESS SECTION */ }
            <div className='partA flex flex-fd-c flex-ai-c'>
                <p className='score' id='score'>Score: 0</p>
                <p className='chart' id='chart'> { this.state.guessCard } </p>
                <div className='win-message flex'>
                    <p className='correct' id='correct'>Correct!</p>
                    <p className='next' id='next' onClick={ () => {this.randomGenerate()}}>Next</p>
                </div>
            </div>
            {/* OPTIONS SECTION */ }
            <div className='partB'> 
                <h3>Choose Your Answer</h3>
                <div className='options'>
                    <p> {this.state.optionsCards[2]} </p>
                    <p> {this.state.optionsCards[0]} </p>
                    <p> {this.state.optionsCards[1]} </p>
                </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Flashcard