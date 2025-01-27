import React from 'react'
import GroceryItemLine from './GroceryItemLine'
import '../styles/main.css'

const GroceryItemsList = ({ items }) => {
  return (
    <ul>
        {items.map(item => (<GroceryItemLine item={item} key={item.id} />))}
    </ul>
  )
}

export default GroceryItemsList