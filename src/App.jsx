import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("white")

  return (
    <>
      <div className="w-full h-screen bg-red " style={{ backgroundColor: color }} >
        <h1 className=' bg-black w-full h-10 text-white flex justify-center  items-center text-center '>Background-changer</h1>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">
          <div className=' flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full text-white'>
            <button onClick={() => {
              setColor("red")
            }} className='outline-none px-5 py-1 rounded-full' style={{ backgroundColor: "red" }}>Red</button>
            <button onClick={ ()=>{
            setColor("purple")
          }}
            className='outline-none px-5 py-1 rounded-full' style={{ backgroundColor: "purple" }}>Purple</button>
            <button onClick={ ()=>{
            setColor("black")
          }} className='outline-none px-5 py-1 rounded-full ' style={{ backgroundColor: "black" }}>Black</button>
            <button onClick={ ()=>{
            setColor("orange")
          }}className='outline-none px-5 py-1 rounded-full' style={{ backgroundColor: "orange" }}>Orange</button>
            <button onClick={ ()=>{
            setColor("yellow")
          }} className='outline-none px-5 py-1 rounded-full' style={{ backgroundColor: "yellow" }}>Yellow</button>
            <button onClick={ ()=>{ setColor("green")}} className='outline-none px-5 py-1 rounded-full' style={{ backgroundColor: "green" }}>Green</button>
            <button onClick={ ()=>{ setColor("grey")}} className='outline-none px-5 py-1 rounded-full' style={{ backgroundColor: "grey" }}>Grey</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
