import React from 'react'
import GroceryItemsList from './GroceryItemsList';
import AddNewItem from './AddNewItem';
import '../styles/main.css'

const Main = ({ items, handleCheck, handleDelete, handleSubmit, addNewItem, newItem, setNewItem }) => {
  return (
    <main>
        <AddNewItem addNewItem={addNewItem} 
                    newItem={newItem}
                    setNewItem={setNewItem}
                    handleSubmit={handleSubmit}
        />
        <GroceryItemsList items={items} 
                          handleCheck={handleCheck} 
                          handleDelete={handleDelete} 
        />
    </main>
  )
}

export default Main