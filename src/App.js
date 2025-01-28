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

  const submitNewItem = () => {}

  const addNewItem = (e) => {
    e.preventDefault()
    // console.log(e)
  }
  
  return (
    <div className="App">
      <Header />
      <Main items={items} handleCheck={handleCheck} handleDelete={handleDelete} addNewItem={addNewItem} newItem={newItem} setNewItem={setNewItem} />
      <Footer />
    </div>
  );
}

export default App;
