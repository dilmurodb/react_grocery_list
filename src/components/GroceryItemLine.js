import React from 'react'

const GroceryItemLine = ({ item, handleCheck }) => {
  return (
    <div className="item-line">
        <input type="checkbox" checked={item.checked} onChange={() => handleCheck()}/>
        <li>{item.item}</li>
        <button>delete</button>
    </div>
  )
}

export default GroceryItemLine