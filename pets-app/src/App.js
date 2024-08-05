import logo from './logo.svg';
import './App.css';
import Header from "./components/header"
import {pets} from "./data/petsData"
import PetList from "./components/petList"



function App() {
  return (
    // code goes here
    <div className="app">
      <Header/>
      
      <PetList myPets={pets}/>
      
    </div>
  );
}

export default App;
