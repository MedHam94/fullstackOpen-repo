const Country = ({info}) =>{
    if(info.name.common == null){
        return null
    }else{
        return (
            <>
                <h1>{info.name.common}</h1>
                <p>Capital:{info.capital[0]}</p>
                <p>Area: {info.area}</p>
    
                <h3>Languages</h3>
                <ul>
                    {Object.entries(info.languages).map(([index, value])=>{
                        return <li key={index}>{value}</li>
                    })}
                </ul>
                <img src={info.flags.png} alt={info.flags.alt} />
            </>
        )
    }
    

}

export default Country