import { useState } from 'react'
import './App.css'
import About from './pages/About';
import Developer from './pages/Developer';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import BasicLayouts from './layout/BasicLayouts';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      
      <BasicLayouts/>
    </>
  )
}

export default App;
