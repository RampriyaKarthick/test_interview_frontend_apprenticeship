
import './App.css';
import React from 'react';

import "./styles/greeting.css"
import Greeting from "./components/Task 1/Greeting"
import Counter from "./components/Task 2/Counter"
import NameListRender from './components/Task 3/NameListRender';
import "./App.css"

function App() {
    

    return (
      <div className="App">
     <h1 className="tasks">Check React Tasks</h1> 
    <Greeting/>
    <Counter/>
    <NameListRender/>
     
  </div>
    );
}

export default App;
