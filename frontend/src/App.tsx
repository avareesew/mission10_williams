import React from 'react';
import './App.css';
import Header from './Header';
import BowlerList from './Bowler/BowlerList';
//this function runs the app. I am using my Header component and my BowlerList component.
function App() {
  return (
    <div className="App">
      <Header />
      <BowlerList />
    </div>
  );
}

export default App;
