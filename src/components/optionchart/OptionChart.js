import React from 'react';
import "./style.css";

const OptionChart = (props) => {

    return(
        <div className='chartoption flex flex-jc-sa'>
            <p className='chart-button hiragana-option' 
            onClick={props.optionHiragana}>
                ひらがな 
                <span>(hiragana)</span>
            </p>
          
            <p className='chart-button katakana-option' 
            onClick={props.optionKatakana}>
                カタカナ 
                <span>(katakana)</span>
            </p>
        </div>
    )

}

export default OptionChart;