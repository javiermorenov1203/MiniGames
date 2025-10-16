import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import HomePage from './Pages/HomePage.jsx'
import TicTacToePage from './Pages/TicTacToePage.jsx'
import MemoryMatchPage from './Pages/MemoryMatchPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/Minigames" element={<HomePage />} />
        <Route path="/TicTacToe" element={<TicTacToePage />} />
        <Route path="/MemoryMatch" element={<MemoryMatchPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
