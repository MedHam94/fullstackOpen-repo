const Persons = ({filterPerson, deletePerson}) =>{
  
    return(
        <ul>
        {filterPerson.map((el) => (
          <li key={el.id}>{el.name} {el.number}  <button onClick={() => deletePerson(el.id)}>Delete</button></li> 
          
        ))}
      </ul>
    )
}

export default Persons