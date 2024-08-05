import logo from './logo.svg';
import './App.css';
import Header from "./components/header"
import {pets} from "./data/petsData"

const liElements = pets.map(pet => {
  return (
    <li key={pet.id} className='pet'>
    <img src={pet.image} alt={pet.name}/>
    <h4>{pet.name}</h4>
    </li>
  )
})

function App() {
  return (
    // code goes here
    <div className="app">
      <Header/>
      <ul className='pet-list'>{liElements}</ul>
    </div>
  );
}

export default App;
