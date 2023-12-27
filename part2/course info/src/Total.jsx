const Total = ({parts})=>{
    return(
      <p><b>Number of exercises {parts.reduce((acc, cur)=> acc + +cur.exercises,0)}</b></p>
    )
  }

  
export default Total