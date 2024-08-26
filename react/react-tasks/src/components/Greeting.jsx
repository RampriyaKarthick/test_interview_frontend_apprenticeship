import React , {useState} from 'react'
import Name from "./Name"

function Greeting() {
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
    <div className="greeting_component">
     <h1 className='greeting'>Task 1 - Greeting App</h1>
          <form onSubmit={handleSubmit}>
          <input 
              type="text" 
              value={name} 
              onChange={handleInputChange} 
              placeholder="Enter your name" 
          />
          <button type="submit">Submit</button>
      </form>
      <Name name={submittedName} />
    </div>
  )
}

export default Greeting