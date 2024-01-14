import { useState, useEffect } from "react";
import personService from "./services/notes";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import Notification from "./components/Notification"
// import { create } from "json-server";

const App = () => {
  // State variable for managing persons array and newName
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [msg, setMsg] = useState(null)
  const [style, setStyle] = useState()

  useEffect(() => {
    console.log("effect");
    personService
      .getAll()
      .then((response) => setPersons(response))
      .catch((err) => console.log(err));
  }, []);


  const success= {
    backgroundColor:"grey",
    color:"darkGreen",
    border:"5px solid green",
    padding:"10px",
    margin:"10px 40px",
    borderRadius:"10px",
    fontWeight:"600",
    fontSize:"25px"
  }

  const fail = {
    backgroundColor:"grey",
    color:"darkRed",
    border:"5px solid red",
    padding:"10px",
    margin:"10px 40px",
    borderRadius:"10px",
    fontWeight:"600",
    fontSize:"25px"
  }
  // Event handler for add a new name to persons array
  const addPerson = (event) => {
    event.preventDefault();
    const person = {
      name: newName,
      number: newNumber,
    };
    if (!checkForDuplicates(person)) {
      personService
        .create(person)
        .then((response) =>{
          setPersons((prevPersons) => [...prevPersons, response])
          setStyle(success)
          setMsg(`${response.name} has been Added`)
          setTimeout(()=>{
            setMsg(null)
          },5000)
        })
        .catch((err) => {
          console.log(err)
        });
    } else {
      // alert(`${newName} is already added to the Phonebook`);
      setStyle(fail)
      setMsg(`${person.name} is already existed`)
      setTimeout(()=>{
        setMsg(null)
      },5000)
    }
  };

  const handleDelete = (id) => {
    const name = persons.find(el => el.id === id)
    console.log(name);
    if (window.confirm(`delete ${name.name}?`)) {
      personService
        .deletePerson(id)
        .then((res) => {
          console.log("Deleted", res);
          setPersons((prevPersons) =>
            prevPersons.filter((person) => person.id !== id)
          )
          
        })
        .catch((err) => console.log(err));
    }
  };

  const checkForDuplicates = (person) => {
    return persons.some(
      (el) =>
        el.name.toLowerCase() === person.name.toLowerCase() ||
        el.number === person.number
    );
  };

  // Event handler for updating newName state as user types
  const handleNameChange = (event) => {
    console.log("this is input handler", event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log("this is input handler", event.target.value);
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
      <Notification message={msg} style={style}/>
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

      <Persons filterPerson={filterPerson} deletePerson={handleDelete} />
    </div>
  );
};

export default App;
