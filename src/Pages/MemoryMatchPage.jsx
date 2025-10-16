import { useState } from "react"
import GameTitle from "../components/GameTitle"
import RestartButton from "../components/RestartButton"
import './MemoryMatchPage.css'

export default function MemoryMatchPage() {

    const [cards, setCards] = useState(['🐕', '🐕', '🐕', '🐕', '🐕', '🐕', '🐕', '🐕', '🐕', '🐕'])
    const [isHidden, setIsHidden] = useState(Array(10).fill(true))

    function handleClick(index) {
        const newHidden = [...isHidden];
        newHidden[index] = false;
        setIsHidden(newHidden);
    }

    return (
        <>
            <GameTitle title={'Memory Match'}></GameTitle>
            <p>Select the cards and find the matching pairs.</p>
            <div className="card-container">
                {cards.map((value, index) => (
                    <button className={`card ${isHidden[index] ? 'hidden-card' : ''}`} onClick={() => handleClick(index)}>
                        <span className="icon">{isHidden[index] ? '❔' : value}</span>
                    </button>
                ))}
            </div>
            <RestartButton onClick={() => setIsHidden(Array(10).fill(true))}></RestartButton>
        </>
    )
}