import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive') 
  // function changeColor(color){
  //   setColor(color)
  // }
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button style={{backgroundColor: 'red'}} onClick={() => setColor('red')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'>Red</button>
          <button style={{backgroundColor: 'green'}} onClick={() => setColor('green')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'>Green</button>
          <button style={{backgroundColor: 'yellow'}} onClick={() => setColor('yellow')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'>Yellow</button>
          <button style={{backgroundColor: 'olive'}} onClick={() => setColor('olive')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'>Olive</button>
          <button style={{backgroundColor: 'brown'}} onClick={() => setColor('brown')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'>Brown</button>
        </div>
      </div>
    </div>
  )
}

export default App
