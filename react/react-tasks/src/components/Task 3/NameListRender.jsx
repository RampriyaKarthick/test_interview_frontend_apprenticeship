import React from 'react'
import "../../styles/NameList.css"

function NameListRender() {

    const givenNamesArray = ['Alice', 'Bob', 'Charlie', 'David'];
  return (
    <div>
        <h1 className='greeting'>Task 3 - Name List</h1>
        <ul className="ul-list">
        {givenNamesArray.map((name, index) => (
                    <li className="li-list" key={index}>{name}</li>
                ))}
        </ul>
        
    </div>
  )
}

export default NameListRender