import { useState } from 'react'
import './App.css'
import About from './pages/About';
import Developer from './pages/Developer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      
      <Developer/>
    </>
  )
}

export default App;
