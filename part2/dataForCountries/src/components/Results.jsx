const Results = ({filterResult})=>{


    return (
        <ul>
            {filterResult.map(el => {
                return <li key={el.altSpellings[0]}>{el.name.common}</li>
            })}
        </ul>
    )
}


export default Results