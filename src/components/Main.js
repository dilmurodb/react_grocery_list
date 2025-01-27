import React from 'react'
import GroceryItemsList from './GroceryItemsList'
import '../styles/main.css'

const Main = ({ items }) => {
  return (
    <main>
        <GroceryItemsList items={items} />
    </main>
  )
}

export default Main