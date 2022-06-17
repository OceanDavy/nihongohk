import React, {Fragment, useState } from 'react';
import OptionChart from '../optionchart/OptionChart';
import "./flashcard.css";


const Flashcard = () => {
  
  //user status
  const [data, setData] = useState({
    guessCard: [],
    optionsCards: [],
    score: 0,
    status: "",
    next: "",
    isDisabled: false
  });

  //Hiragana and Katakana arrays/charts (Romanji / Chart)
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
  
  let katakanaArr = [
    ["A", "ア"], ["I", "イ"], ["U", "ウ"],
    ["E", "エ"], ["O", "オ"], ["KA", "カ"],
    ["KI", "キ"], ["KU", "ク"], ["KE", "ケ"],
    ["KO", "コ"], ["SA", "サ"], ["SHI", "シ"],
    ["SU", "ス"], ["SE", "セ "], ["SO", "ソ"],
    ["TA", "タ"], ["CHI", "チ"], ["TSU", "ツ"],
    ["TE", "テ"], ["TO", "ト"], ["NA", "ナ"],
    ["NI", "ニ"], ["NU", "ヌ"], ["NE", "ネ"],
    ["NO", "ノ"], ["HA", "ハ"], ["HI", "ヒ"],
    ["FU", "フ"], ["HE", "ヘ"], ["HO", "ホ"],
    ["MA", "マ"], ["MI", "ミ"], ["MU", "ム"],
    ["ME", "メ"], ["MO", "モ"], ["YA", "ヤ"],
    ["YU", "ユ"], ["YO", "ヨ"], ["RA", "ラ"],
    ["RI", "リ"], ["RU", "ル"], ["RE", "レ"],
    ["RO", "ロ"], ["WA", "ワ"], ["O", "ヲ"],
    ["N", "ン"]
  ];
  
  let toGuess = [];
  let cards = [];

  //Function that generates only the Hiragana Charts | Button "Next" call this function
  const hiraganaGenerate = () =>{
    cards = [];

    for(let i=0; i < 3; i++){
      cards.push(hiraganaArr[Math.floor(Math.random() * hiraganaArr.length)]);
    }
    toGuess = cards[Math.floor(Math.random() * cards.length)];
    console.log(toGuess);
    console.log(cards[1][0] + " " + cards[0][0]  + " "+ cards[2][0]);

        setData((prevState) => ({
          ...prevState,
          guessCard: toGuess,
          optionsCards: cards,
          status: "",
          next: "",
          isDisabled: false
        }));
  };

  //Function that generates only the Katakana Charts | Next Button will call this func
const katakanaGenerate = () => {
    cards = [];

    for(let i=0; i < 3; i++){
      cards.push(katakanaArr[Math.floor(Math.random() * katakanaArr.length)]);
    }
    toGuess = cards[Math.floor(Math.random() * cards.length)];
    console.log(toGuess);
    console.log(cards[1][0] + " " + cards[0][0]  + " "+ cards[2][0]);

    setData((prevState) => ({
      ...prevState,
      guessCard: toGuess,
      optionsCards: cards,
      status: "",
      next: "",
      isDisabled: false
    }));
  };

  //This function it's called from the Hiragana Button on top of the Guess Box
  //This will helps us to reset the score if User click on the Hiragana Button
  const btnHiragana = () => {
    hiraganaGenerate(
      setData((prevState) => ({
        ...prevState,
        guessCard: toGuess,
        optionsCards: cards,
        score: 0
      }))
    );
  }

  //Same as BtnHiragana but for the Katakana charts, it will reset the game
  const btnKatakana = () => {
    katakanaGenerate(
      setData((prevState) => ({
        ...prevState,
        guessCard: toGuess,
        optionsCards: cards,
        score: 0
      }))
    );
  }

  //Guess function that checks if users option chosen is correct or not
const guessMethod = (answer) => {
  if(answer === data.guessCard[1]){
    console.log("Correct! " + answer);
    console.log(data);
    setData((prevState) => ({
      ...prevState,
      score: prevState.score + 5,
      status: "Correct!",
      next: "Next!",
      isDisabled: true
    }));
    
  } else{
    setData((prevState) => ({
      ...prevState,
      score: 0,
      status: "Wrong!",
      next: "Again!",
      isDisabled: true
    }));
  }
  }

  //function that jumps to the next character (next) 
  //Checks if chart guessed is on hiragana or katakana list
  //If its a hira chart then calls the method HiraganaGenerate()
  //If its a katakana chart then calls the method katakanaGenerate()
  const nextChart = () => {
    let checkChart;
    let i = 0;
    //Loop the outer array (which is one)
    for(i = 0; i <= hiraganaArr.length; i++){
      var innerL = hiraganaArr[i].length;

      for(let j = 0; j <= innerL; j++){
        console.log(hiraganaArr[1]);
      }
    }
  };


    return (
      <Fragment>
        <OptionChart 
          optionHiragana={btnHiragana} 
          optionKatakana={btnKatakana} 
        />
        <div className='flashcard-box flex'>
            <div className='flashcard'>
              {/* CHART TO GUESS SECTION */ }
              <div className='partA flex flex-fd-c flex-ai-c'>
                  <p className='score' id='score'>Score: { data.score }</p>
                  <p className='chart' id='chart'> { data.guessCard[1] } </p>
                  <div className='win-message flex'>
                      <p className={`${data.status}` === "Correct!" ? "correct" : "wrong"}> { data.status }</p>
                      <p className='next' id='next' onClick={nextChart}> { data.next } </p>
                  </div>
              </div>
              {/* OPTIONS SECTION */ }
              <div className='partB'> 
                  <h3 className='chooseH3'>Choose Your Answer</h3>
                  <div className='options'>
                    { data.optionsCards.map((datas, i) => (
                        <button 
                          disabled={data.isDisabled} 
                          onClick={() => guessMethod(datas[1])} key={i}> 
                          <p> { datas[0] } </p>
                        </button>
                      ))}
                  </div>
              </div>
            </div>
        </div>
        </Fragment>

    )
  }

export default Flashcard;