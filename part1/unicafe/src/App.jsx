import { useState } from 'react'


const Button = (props)=> <button onClick = {props.handleClick}> {props.text}</button>

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
    setTotal(good + updatedNeutral + bad)

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
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>Total {total}</p>
      <p >Average {average}</p>
    </div>
  )
}

export default App