import { useState, useEffect } from "react";
import axios from "axios";
import PersonForm from "./PersonForm";
import Filter from "./Filter";
import Persons from "./Persons";

const App = () => {
  // State variable for managing persons array and newName
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log(response.data);
      setPersons(response.data);
    });
  }, []);

  // Event handler for add a new name to persons array
const addPerson =  (event) => {
  event.preventDefault();
  const person = {
    name: newName,
    number: newNumber,
  };
  if (!checkForDuplicates(person)){
    axios
    .post("http://localhost:3001/persons", person)
    .then(response =>{setPersons((prevPersons) => [...prevPersons, response.data])})
    .catch(err => console.log(err))
  }else{
    alert(`${newName} is already added to phonebook`);
  }
}


  const checkForDuplicates = (person) => {
    return persons.some(
      (el) =>
        el.name.toLowerCase() === person.name.toLowerCase() ||
        el.number === person.number
    );
  };

  // Event handler for updating newName state as user types
  const handleNameChange = (event) => {
    console.log("this is input hundler", event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log("this is input hundler", event.target.value);
    setNewNumber(event.target.value);
  };

  const handleSearchChange = () => {
    console.log("this is search letter", event.target.value);
    setSearch(event.target.value);
  };

  const filterPerson = persons.filter((el) =>
    el.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter search={search} handleSearchChange={handleSearchChange} />

      <h2>Add new</h2>

      <PersonForm
        onSubmit={addPerson}
        newName={newName.name}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>

      <Persons filterPerson={filterPerson} />
    </div>
  );
};

export default App;
