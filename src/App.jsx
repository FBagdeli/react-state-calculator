import { useState } from "react"
import "./App.css"

function App() {
  let [firstNumber, setNumber1] = useState(0)
  let [secondNumber, setNumber2] = useState(0)
  let [operation, setOperation] = useState('+')
  let [result, setResult] = useState(0)

  const handleClick = (e) => {
    if(firstNumber>0){
      firstNumber*10
      const newNumber = firstNumber + e.target.innerText
      firstNumber = setNumber1(newNumber)
    }else {
      firstNumber = setNumber1(e.target.innerText)
    }
  }

  const handleClick2 = (e) => {
    if(secondNumber>0){
      secondNumber * 10
      const newNumber = secondNumber + e.target.innerText
      secondNumber = setNumber2(newNumber)
    } else{
      secondNumber = setNumber2(e.target.innerText)
    }
  }

  const handleClickResult = () => {
    switch(operation){
      case('+') : {
        result = Number(firstNumber) + Number(secondNumber)
        setResult(result)
        break
      }
      case('-') : {
        result = Number(firstNumber) - Number(secondNumber)
        setResult(result)
        break
      }
      case('*') : {
        result = Number(firstNumber) * Number(secondNumber)
        setResult(result)
        break
      }
      case('÷') : {
        result= Number(firstNumber) / Number(secondNumber)
        setResult(result.toFixed(1) )
        break
      }
      default : 0
    }
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNumber}</p>
        <div className="numbers">
          <button onClick={handleClick}>1</button>
          <button onClick={handleClick}>2</button>
          <button onClick={handleClick}>3</button>
          <button onClick={handleClick}>4</button>
          <button onClick={handleClick}>5</button>
          <button onClick={handleClick}>6</button>
          <button onClick={handleClick}>7</button>
          <button onClick={handleClick}>8</button>
          <button onClick={handleClick}>9</button>
          <button onClick={handleClick}>0</button>
          <button onClick={() => setNumber1(0)}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operation}</p>
        <div className="numbers">
          <button onClick={() => setOperation('+')} >+</button>
          <button onClick={() => setOperation('-')} >-</button>
          <button onClick={() => setOperation('*')} >*</button>
          <button onClick={() => setOperation('÷')} >÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{secondNumber}</p>
        <div className="numbers">
          <button onClick={handleClick2} >1</button>
          <button onClick={handleClick2} >2</button>
          <button onClick={handleClick2} >3</button>
          <button onClick={handleClick2} >4</button>
          <button onClick={handleClick2} >5</button>
          <button onClick={handleClick2} >6</button>
          <button onClick={handleClick2} >7</button>
          <button onClick={handleClick2} >8</button>
          <button onClick={handleClick2} >9</button>
          <button onClick={handleClick2} >0</button>
          <button onClick={() => setNumber2(0)}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={handleClickResult}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
