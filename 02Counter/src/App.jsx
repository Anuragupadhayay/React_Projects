import { useState } from 'react'

import './App.css'

function App() {

  const [counter, setCounter] = useState(15)  //in the array the first element is variable and the second element is method
  // let counter = 15


  const AddValue = () => {
      setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // this will not update the values in the website, if you call this function it will only update it to +1,
    //this is because of reconciliation algorithm in the react that batches all the methods in single method
    //but what if you want it this way? here's the solution you can use, it is called callback method

     setCounter((prevCounter) => prevCounter + 1)
    // setCounter((prevCounter) => prevCounter + 1)
    // setCounter((prevCounter) => prevCounter + 1)
    // setCounter((prevCounter) => prevCounter + 1)


  }

  const RemoveValue = () => {
    setCounter(counter - 1) 
    setCounter((prevCounter) => prevCounter - 1)   
  }
  return (
    <>
      <h1>React Course {counter} </h1>
      <h2>Counter Value: {counter} </h2>
      <button
      onClick={AddValue}>Add value</button> {" "}
      <button
      onClick={RemoveValue}>Remove value</button>
      <p>footer: {counter} </p>  
    </>
  )
}

export default App
