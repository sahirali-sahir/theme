import React, { useState } from 'react'

import './App.css'

function App() {

  const [colour, setcolour]= useState('white')
  

  return (
    <div id='main' style={{background: colour}}>
    <div>
    <h1>select display mode</h1>
    </div>

      <div>
        <button onClick={() => {
          setcolour('white')
        }}>light mode</button>

       <button onClick={() => {
          setcolour('black')
        }}>dark mode</button>
      </div>
     
    </div>
  )
}

export default App
