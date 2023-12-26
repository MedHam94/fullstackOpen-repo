import { useState } from 'react'


const Button = (props)=> <button onClick = {props.handleClick}> {props.text}</button>

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>

  )
}

const Statistic = (props) =>{
if(props.good === 0 && props.neutral === 0 & props.bad===0)
  return <p>No feedback given</p>

  return (
    <table>
      <tbody>

      <StatisticLine  text='good' value={props.good}/>
      <StatisticLine  text='neutral' value={props.neutral}/>
      <StatisticLine  text='bad' value={props.bad}/>
      <StatisticLine  text='total' value={props.total}/>
      <StatisticLine  text='average' value={props.average}/>
      
      </tbody>
    </table>

  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)

  const handleGoodClick = ()=>{
    const updatedGood = good +1 
    setGood(updatedGood)
    const updatedTotal = updatedGood + neutral + bad
    setTotal(updatedTotal)
    setAverage((updatedGood/updatedTotal) - (bad/updatedTotal))

  }
  const handleNeutralClick = ()=>{
    const updatedNeutral = neutral +1 
    setNeutral(updatedNeutral)
    const updatedTotal = good + updatedNeutral + bad
    setTotal(updatedTotal)
    setAverage((good/updatedTotal) - (bad/updatedTotal))


  }
  const handleBadClick = ()=>{
    const updatedBad = bad +1 
    setBad(updatedBad)
    const updatedTotal = good + neutral + updatedBad
    setTotal(updatedTotal)
    setAverage((good/updatedTotal) - (updatedBad/updatedTotal))
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <Button handleClick={handleGoodClick} text='good'/>
        <Button handleClick={handleNeutralClick} text='neutral'/>
        <Button handleClick={handleBadClick} text='bad'/>
      </div>
      <h2>Statistics</h2>
      <Statistic good={good} neutral={neutral} bad={bad} total={total} average={average}/>
      
      
    </div>
  )
}

export default App