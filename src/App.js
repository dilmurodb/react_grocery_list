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
  
  return (
    <div className="App">
      <Header />
      <Main items={items} />
      <Footer />
    </div>
  );
}

export default App;
