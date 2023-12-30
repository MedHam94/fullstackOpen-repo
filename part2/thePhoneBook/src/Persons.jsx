const Persons = ({filterPerson}) =>{
    return(
        <ul>
        {filterPerson.map((el) => (
          <li key={el.name}>{el.name} {el.number}</li>
        ))}
      </ul>
    )
}

export default Persons