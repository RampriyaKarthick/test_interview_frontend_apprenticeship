import React, { useState } from 'react';
import "../../styles/greeting.css"
import "../../styles/Counter.css"

function Counter() {
    //Initialising count state with default 0
    const [count, setCount] = useState(0);

//function for incrementing the count
    const incrementCounter = () => {
        setCount(count + 1);
    }
//function for incrementing the count
     const decrementCounter = () => {
        if (count > 0) { // Checking if count is greater than 0
            setCount(count - 1);
        }
        else{
            alert("Counter value cannot be less than 0")
        }

    }

  return (
    <div >
    <h1 className='greeting'>Task 2 - Counter App</h1>
    <h2 className="count_class">Counter : {count}</h2>
       <button onClick={incrementCounter}>Increment</button>
       <button onClick={decrementCounter}>Decrement</button>
       </div>
  )
}

export default Counter