import React from 'react'

const GroceryItemLine = ({ item, handleCheck, handleDelete }) => {
  return (
    <div className="item-line">
        <input type="checkbox" checked={item.checked} onChange={() => handleCheck(item.id)}/>
        <li>{item.item}</li>
        <button onClick={() => handleDelete(item.id)}>delete</button>
    </div>
  )
}

export default GroceryItemLine