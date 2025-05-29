import { useState } from 'react'
import './App.css'
import About from './pages/About';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      
      <About/>
    </>
  )
}

export default App;
