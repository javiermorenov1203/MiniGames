import { useState } from "react"
import GameTitle from "../components/GameTitle"
import RestartButton from "../components/RestartButton"
import './MemoryMatchPage.css'

export default function MemoryMatchPage() {

    const [cards, setCards] = useState(['🐕', '🐕', '🐕', '🐕', '🐕', '🐕', '🐕', '🐕', '🐕', '🐕'])


    return (
        <>
            <GameTitle title={'Memory Match'}></GameTitle>
            <p>Select the cards and find the matching pairs.</p>
            <div className="card-container">
                {cards.map((value, index) => (
                    <button className="card">{value}</button>
                ))}
            </div>
            <RestartButton></RestartButton>
        </>
    )
}