import { useNavigate } from 'react-router-dom'
import './GameButton.css'

export function GameButton({ icon, gameName }) {
    const navigate = useNavigate()
    return (
        <div className='game-buttons-container'>
            <button className='game-button' onClick={() => navigate('/TicTacToe')}>{icon}</button>
            <h4>{gameName}</h4>
        </div>
    )
}

