import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import HomePage from './Pages/HomePage.jsx'
import TicTacToePage from './Pages/TicTacToePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/TicTacToe" element={<TicTacToePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
