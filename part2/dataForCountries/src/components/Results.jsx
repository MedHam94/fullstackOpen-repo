import { useState } from "react"

const Results = ({filterResult, handleClick})=>{


    return (
        <ul>
            {filterResult.map(el => {
                return <li key={el.altSpellings[0]}>{el.name.common} <button onClick={()=>handleClick(el.name.common)}>Show detail</button></li>
            })}
        </ul>
    )
}


export default Results