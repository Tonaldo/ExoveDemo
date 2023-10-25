import { useState } from 'react'
import exoveLogo from './assets/exove.png'
import './App.css'

function App() {
  const [intermediateSliderValue, setIntermediateSlidervalue] = useState(0)
  const [sliderValue, setSlidervalue] = useState(0)
  
  
  return (
    <>
      <div>
          <img src={exoveLogo} className="logo react" alt="React logo" /> 
      </div>
      <h1>SliderDemo</h1>
      <div className="mainContainer">
       <input value={intermediateSliderValue} type="range"  onMouseUp={() => setSlidervalue(intermediateSliderValue)} onChange={(event) => setIntermediateSlidervalue(parseInt(event.target.value))}/>
      </div>
      <h1>New value: {sliderValue}</h1>
    </>
  )
}

export default App
