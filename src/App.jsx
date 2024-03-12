import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import { HashRouter, Router, Routes, Route } from 'react-router-dom';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='name'>Hii this is Muzzammil Afridi</h1>
     
      <HashRouter>

      <Navbar/>
     
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </HashRouter>

      
     </>
  )
}

export default App
