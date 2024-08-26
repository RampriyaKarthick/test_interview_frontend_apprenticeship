import React from 'react'
import "../../styles/greeting.css"

const Name = ({ name }) => {
  return (
      <div className='name'>
     
          {name && <h1>Hello, {name}!</h1>}
      </div>
  );
};
export default Name