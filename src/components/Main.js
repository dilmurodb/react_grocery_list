import React from 'react'
import GroceryItemsList from './GroceryItemsList';
import AddNewItem from './AddNewItem';
import '../styles/main.css'

const Main = ({ items, handleCheck, handleDelete, addNewItem, newItem }) => {
  return (
    <main>
        <AddNewItem addNewItem={addNewItem} 
                    newItem={newItem}
        />
        <GroceryItemsList items={items} 
                          handleCheck={handleCheck} 
                          handleDelete={handleDelete} 
        />
    </main>
  )
}

export default Main