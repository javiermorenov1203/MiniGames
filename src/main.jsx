import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import HomePage from './Pages/HomePage.jsx'
import TicTacToePage from './Pages/TicTacToePage.jsx'
import MemoryMatchPage from './Pages/MemoryMatchPage.jsx'
import RockPaperScissorsPage from './Pages/RockPaperScissorsPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter basename="/MiniGames">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/TicTacToe" element={<TicTacToePage />} />
        <Route path="/MemoryMatch" element={<MemoryMatchPage />} />
        <Route path="/RockPaperScissors" element={<RockPaperScissorsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
