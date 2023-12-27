const Header = (props)=> <h1>{props.course}</h1>

const Part = ({part})=> <p>{part.name} {part.exercises}</p>

const Content =({parts})=>{
  console.log('content', parts)
  return(
    
    <>
      {parts.map(part=>
          <Part  key={part.id} part={part} />
          )}
    
    </>
    
  )
}

const Total = ({parts})=>{
  console.log('Total', parts);
  return(
    <p><b>Number of exercises {parts.reduce((acc, cur)=> acc + +cur.exercises,0)}</b></p>
  )
}

const Course = ({course}) =>{

  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },{
        name: 'Redux',
        exercises: 11,
        id: 4
      }
      
    ]
  }
  
  return <Course course={course} />  

    
}

export default App