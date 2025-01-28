import React from 'react'
import GroceryItemsList from './GroceryItemsList'
import '../styles/main.css'

const Main = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
        <GroceryItemsList items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
    </main>
  )
}

export default Main