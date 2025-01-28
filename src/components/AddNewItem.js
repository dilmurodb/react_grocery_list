import React from 'react'

const AddNewItem = ({ items, addNewItem, newItem, setNewItem }) => {
  return (
    <form>
        <label htmlFor="addItem">Add item</label>
        <input 
            autoFocus 
            type="text" 
            id="addItem" 
            required 
            placeholder="Add item..." 
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)} 
            onSubmit={(e) => addNewItem()} 
        />
        <button type="submit">Add Item</button>
    </form>
  )
}

export default AddNewItem