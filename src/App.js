import React from 'react';

//Style Global
import './static/style.css';

//Components Navbar, Options (Hiragana and Katakana), Flashcard game
import Navbar from './components/navbar/Navbar';
import Chartoption from './components/chartoption/Chartoption';
import Flashcard from './components/flashcard/Flashcard';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='container'>
        <Chartoption/>
        <Flashcard/>
      </div>
    </div>
  );
}

export default App;
