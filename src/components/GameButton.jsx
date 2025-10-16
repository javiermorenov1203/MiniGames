import { useNavigate } from 'react-router-dom'
import './GameButton.css'

export function GameButton({ icon, gameName, redirection }) {
    const navigate = useNavigate()
    return (
        <div className='game-buttons-container'>
            <button className='game-button' onClick={() => navigate(`/${redirection}`)}>{icon}</button>
            <p className='game-title'>{gameName}</p>
        </div>
    )
}

