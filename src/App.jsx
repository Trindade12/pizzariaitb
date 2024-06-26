import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Listagem from './pages/Listagem'

const App = () => {

  const [color] = useState("#0000FF")
  document.body.style.backgroundColor = color

  return (
    <Routes>
      <Route path='/' element={<Listagem/>}/>
    </Routes>
  )
}

export default App
