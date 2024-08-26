import React from 'react'

const Greeting = ({ name }) => {
  return (
      <div className='name'>
          {name && <h1>Hello, {name}!</h1>}
      </div>
  );
};
export default Greeting