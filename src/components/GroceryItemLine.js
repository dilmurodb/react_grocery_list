import React from 'react'

const GroceryItemLine = ({ item }) => {
  return (
    <div className="item-line">
        <input type="checkbox"/>
        <li>{item.item}</li>
        <button>delete</button>
    </div>
  )
}

export default GroceryItemLine