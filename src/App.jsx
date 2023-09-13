import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.scss'
import { Game } from './pages/Game'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/game/:id?" element={<Game />} />
        <Route path="*" element={<Navigate to="/game" />} />
      </Routes>
    </Router>
  )
}

export default App
