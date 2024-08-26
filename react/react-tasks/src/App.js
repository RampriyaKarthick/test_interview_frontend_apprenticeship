
import './App.css';
import React, { useState } from 'react';
import Greeting from './components/Greeting';

function App() {
    const [name, setName] = useState('');

    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div className="App">
            <input 
                type="text" 
                value={name} 
                onChange={handleInputChange} 
                placeholder="Enter your name" 
            />
            <Greeting name={name} />
        </div>
    );
}

export default App;
