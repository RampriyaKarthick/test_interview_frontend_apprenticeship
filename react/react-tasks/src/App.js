
import './App.css';
import React, { useState } from 'react';
import Greeting from './components/Greeting';

function App() {
    const [name, setName] = useState('');
    const [submittedName, setSubmittedName] = useState('');

    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();  //prevents the page from reloading
      setSubmittedName(name);  //setting the name that is typed in the input form
     setName('')   //clear the input field
  };

    return (
      <div className="App">
      <h1>Greeting App</h1>
      <form onSubmit={handleSubmit}>
          <input 
              type="text" 
              value={name} 
              onChange={handleInputChange} 
              placeholder="Enter your name" 
          />
          <button type="submit">Submit</button>
      </form>
      <Greeting name={submittedName} />
  </div>
    );
}

export default App;
