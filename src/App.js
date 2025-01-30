import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


function App() {

  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "der Wein"
    },
    {
      id: 2,
      checked: true,
      item: "der Apfel"
    },
    {
      id: 3,
      checked: false,
      item: "das Brot"
    }
  ])

  const [newItem, setNewItem] = useState('');

  const handleCheck = (id) => {
    const modifiedItemsList = items.map(item => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(modifiedItemsList)
  }

  const handleDelete = (id) => {
    const modifiedItemsList = items.filter(item => item.id !== id);
    setItems(modifiedItemsList)
  }

  const addNewItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {id: id, checked: false, item: item};
    const modifiedItemsList = [...items, myNewItem];
    setItems(modifiedItemsList);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItem) return;
    addNewItem(newItem);
    setNewItem('');
  }


  return (
    <div className="App">
      <Header />
      <Main items={items} handleCheck={handleCheck} handleDelete={handleDelete} handleSubmit={handleSubmit} addNewItem={addNewItem} newItem={newItem} setNewItem={setNewItem} />
      <Footer />
    </div>
  );
}

export default App;
