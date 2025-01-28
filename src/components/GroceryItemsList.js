import React from 'react'
import GroceryItemLine from './GroceryItemLine'
import '../styles/main.css'

const GroceryItemsList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
        {items.map(item => (<GroceryItemLine item={item} key={item.id} handleCheck={handleCheck} handleDelete={handleDelete} />))}
    </ul>
  )
}

export default GroceryItemsList