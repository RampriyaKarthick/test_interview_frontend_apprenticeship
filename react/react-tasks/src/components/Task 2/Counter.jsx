import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
  return (
    <div>Counter
       <button >Increment</button>
       <button >Decrement</button>
       </div>
  )
}

export default Counter