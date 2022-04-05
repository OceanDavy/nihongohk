import React, { Component } from 'react';

//style navbar
import "../navbar/style.css";


export class Navbar extends Component {
  render() {
    return (
      <div className='Navbar flex flex-jc-c flex-fd-c'>
          <h1 className='title'>NIHONGOHK</h1>
          <div className='subtitles flex '>
              <h3 className='hiragana-subtitle subtitle'>ひらがな <span>FLASHCARDS</span></h3>
              <h3 className='katakana-subtitle subtitle'>カタカナ <span>FLASHCARDS</span></h3>
          </div>          
      </div>
    )
  }
}

export default Navbar;