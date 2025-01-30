import React from 'react'

const AddNewItem = ({ handleSubmit, addNewItem, newItem, setNewItem }) => {
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add item</label>
        <input 
            autoFocus 
            type="text" 
            id="addItem" 
            required 
            placeholder="Add item..." 
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)} 
        />
        <button type="submit">Add Item</button>
    </form>
  )
}

export default AddNewItem