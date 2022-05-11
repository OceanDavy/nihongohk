import React from 'react';

//Style Global
import './static/style.css';

//Components Navbar, Options (Hiragana and Katakana), Flashcard game
import Navbar from './components/navbar/Navbar';
import Flashcard from './components/flashcard/Flashcard';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <div className='container'>
        <Flashcard/>
      </div>
    </div>
  );
}

export default App;
