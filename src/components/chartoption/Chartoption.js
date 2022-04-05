import React, { Component } from 'react'
//style chart options
import "./style.css";

export class Chartoption extends Component {
  render() {
    return (
      <div className='chartoption flex flex-jc-sa'>
          <p className='hiragana-option'>ひらがな <span>(hiragana)</span></p>
          <p className='katakana-option'>カタカナ <span>(katakana)</span></p>
      </div>
    )
  }
}

export default Chartoption