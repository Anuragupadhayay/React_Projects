import { useState } from 'react'

import './App.css'

function App() {


  let counter = 15


  const AddValue = () => {
    counter+=1
    console.log(counter);    
  }

  const RemoveValue = () => {
    counter-=1
    console.log(counter);    
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
