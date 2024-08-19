import React from 'react'
import './App.css'
import Home from './pages/home'
import {BrowserRouter as Router,  Routes, Route} from 'react-router-dom'
import Sharts from './pages/sharts'
import Pants from './pages/pants'
import Jens from './pages/jens'
import Men from './pages/men'
import Women from './pages/women'
import '../src/assets/boostrap/bootstrap.css'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/sharts' element={<Sharts/>} />
        <Route path='/pants' element={<Pants/>} />
        <Route path='/jens' element={<Jens/>} />
        <Route path='/men' element={<Men/>} />
        <Route path='/women' element={<Women/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
