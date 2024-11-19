import React from 'react'
import Index from './components'
import Aboutus from './components/aboutus'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Seeds from './components/seeds'
import IrrigationTools from './components/irrigation_tools'
import Fertilizer from './components/fertilizer'
import Pesticides from './components/pestisides'
import Signup from './signup'
import Login from './components/login'
import { Toaster } from 'react-hot-toast'
import Chatbot from './components/chatbot'

import { useAuth } from './components/authuser'
// import { profile } from 'console'


function App() {
  const [profile] = useAuth()
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/index" element={<Index/>} />
          <Route path="/seeds" element={profile?<Seeds/>:<Navigate to={"/login"} />} />
          <Route path="/irrigation" element={profile?<IrrigationTools/>:<Navigate to={"/login"}/>} />
          <Route path="/fertilizer" element={profile?<Fertilizer/>:<Navigate to={"/login"} />} />
          <Route path="/pesticide" element={profile?<Pesticides/>:<Navigate to={"/login"}/>} />
          <Route path="/loginsignup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/kisan" element={profile?<Chatbot/>:<Navigate to={"/login"}/>} />

        </Routes>
        <Toaster/>

      </Router>
    </div>
  )
}

export default App