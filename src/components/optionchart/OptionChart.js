import React from 'react';

const OptionChart = (props) => {

    return(
        <div className='chartoption flex flex-jc-sa'>
            <p className='hiragana-option' 
            onClick={props.optionHiragana}>
                ひらがな 
                <span>(hiragana)</span>
            </p>
          
            <p className='katakana-option' 
            onClick={props.optionKatakana}>
                カタカナ 
                <span>(katakana)</span>
            </p>
        </div>
    )

}

export default OptionChart;