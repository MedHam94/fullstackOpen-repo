import { useState, useEffect } from "react";
import personService from "./services/notes";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
// import { create } from "json-server";

const App = () => {
  // State variable for managing persons array and newName
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("effect");
    personService
      .getAll()
      .then(response => setPersons(response))
      .catch(err => console.log(err))
  }, []);

  // Event handler for add a new name to persons array
const addPerson =  (event) => {
  event.preventDefault();
  const person = {
    name: newName,
    number: newNumber,
  };
  if (!checkForDuplicates(person)){
    personService
      .create(person)
      .then(response => setPersons((prevPersons) => [...prevPersons, response]))
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
