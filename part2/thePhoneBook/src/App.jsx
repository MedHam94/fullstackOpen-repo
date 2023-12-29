import { useState } from "react";

const App = () => {

  // State variable for managing persons array and newName
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  // Event handler for add a new name to persons array
  const addName = (event) => {
    // prevent browser from refresh when submit the form
    event.preventDefault();
    console.log("button Clicked", event.target);

    // Create a new name object and update persons state
    const name = {name:newName} 
    console.log('this is the name', name.name);
    
    for(let i =0; i<persons.length; i++){
      if(persons[i].name === name.name){
        alert(`${persons[i].name} is already added to phonebook`)
        break
      }else{
        setPersons(persons.concat(name))
      }
    }
    
  };

  // Event handler for updating newName state as user types
  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  console.log(persons);
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName} >
        <div>
          name: <input value={newName}  onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((el,i)=><li key={el.name}>{el.name}</li>)}
      </ul>
      
    </div>
  );
};

export default App;
