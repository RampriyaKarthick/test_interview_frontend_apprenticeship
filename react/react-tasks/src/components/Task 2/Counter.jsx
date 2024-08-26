import React, { useState } from 'react';

function Counter() {
    //Initialising count state with default 0
    const [count, setCount] = useState(0);

  return (
    <div>Task 2 - Counter App
    <h2>Counter : {count}</h2>
       <button >Increment</button>
       <button >Decrement</button>
       </div>
  )
}

export default Counter