import { React } from 'react';
import './App.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar.jsx';


function App() {
  
  return (
    <div className="App" >
      <NavBar/>
      <ItemListContainer saludo="Hola, este es mi e-commerce" />

    </div>
  );
}

export default App; 
