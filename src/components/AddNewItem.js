import React from 'react'

const AddNewItem = ({ items, addNewItem, newItem }) => {
  return (
    <form>
        <label htmlFor="addItem">Add item</label>
        <input 
            autoFocus 
            type="text" 
            id="addItem" 
            required 
            placeholder="Add item..." 
            onChange={(e) => addNewItem(e.target.value)} 
            onSubmit={(e) => addNewItem()} 
        />
        <button type="submit">Add Item</button>
    </form>
  )
}

export default AddNewItem