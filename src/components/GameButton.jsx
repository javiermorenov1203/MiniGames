import './GameButton.css'

export function GameButton({icon, gameName}) {

    return (
        <div className='game-buttons-container'>
            <button className='game-button'>{icon}</button>
            <h4>{gameName}</h4>
        </div>
    )
}

