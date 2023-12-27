const Header = ({course})=> {
  console.log('header', course);
  return <h1>{course}</h1>
}

const Part = ({part})=> <p>{part.name} {part.exercises}</p>

const Content =({parts})=>{
  console.log(parts);
  return(
    
    <>
      {parts.map(part=>
          <Part  key={part.id} part={part} />
          )}
    
    </>
    
  )
}

const Total = ({parts})=>{
  return(
    <p><b>Number of exercises {parts.reduce((acc, cur)=> acc + +cur.exercises,0)}</b></p>
  )
}

const Course = ({course}) =>{

  return (
    <>
      <Header course={course[0].name} />
      <Content parts={course[0].parts} />
      <Total parts={course[0].parts} /> 
      <Header course={course[1].name} />
      <Content parts={course[1].parts} />
      <Total parts={course[1].parts} /> 
    </>
  )
}
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  
  return <Course course={courses} />  

    
}

export default App