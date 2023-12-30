import { useState } from "react";

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

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          Filter shown with <input value={search} onChange={handleSearchChange} />
        </div>
      </form>
      <h2>Add new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName.name} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber.number} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filterPerson.map((el) => (
          <li key={el.name}>{el.name} {el.number}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
