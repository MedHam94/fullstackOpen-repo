import { useState, useEffect } from "react";
import axios from 'axios';
import PersonForm from "./PersonForm";
import Filter from "./Filter";
import Persons from './Persons'

const App = () => {
  // State variable for managing persons array and newName
  const [persons, setPersons] = useState([{ name: "Arto Hellas", number: '040-1234567' }]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');

  // Event handler for add a new name to persons array
  const addPerson = (event) => {
    // prevent browser from refresh when submit the form
    event.preventDefault();
    console.log("button Clicked", event.target);

    // Create a new name object and update persons state
    const person = [{ name: newName, number: newNumber}]
    console.log("this is the name", person[0].name, person[0].number);

    let nameOrNumberAlreadyExists = false;

    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === person[0].name  || persons[i].number === person[0].number) {
        alert(`${persons[i].name} or ${persons[i].number} is already added to phonebook`);
        nameOrNumberAlreadyExists = true;
        break;
      }
    }
    if (!nameOrNumberAlreadyExists) {
      console.log('added',persons.concat(person));
      setPersons(persons.concat(person));
    }
  };



  // Event handler for updating newName state as user types
  const handleNameChange = (event) => {
    console.log('this is input hundler',event.target.value);
    setNewName(event.target.value);
    
  };

  const handleNumberChange = (event) => {
    console.log('this is input hundler',event.target.value);
    setNewNumber(event.target.value);
    
  };

  const handleSearchChange = () => {
    console.log('this is search letter',event.target.value);
    setSearch(event.target.value);
  };

const filterPerson = persons.filter(el=> el.name.toLowerCase().includes(search.toLowerCase()))

useEffect(()=>{
  console.log('effect');
  axios
    .get('http://localhost:3001/persons')
    .then(response =>{
      
    })
})
  return (
    <div>
      <h2>Phonebook</h2>

      <Filter 
        search={search}
        handleSearchChange={handleSearchChange}
      />
      
      <h2>Add new</h2>

      <PersonForm 
        onSubmit={addPerson}
        newName={newName.name}
        handleNameChange={handleNameChange}
        newNumber={newNumber} 
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>

      <Persons filterPerson={filterPerson}/>
      
    </div>
  );
};

export default App;