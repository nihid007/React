import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{Routes,Route} from "react-router-dom";
import Register from './pages/Register';
import Main from './pages/Main';
import End from './pages/End';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
     
    <Route path="/" exact element={<Register />} />
    <Route path="/main-home" exact element={<Main/>} />
    <Route path="/end-home" exact element={<End/>} />


    </Routes>
      
    </>
  )
} 

export default App
