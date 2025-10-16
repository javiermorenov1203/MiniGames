import { useState, useRef } from "react"
import GameTitle from "../components/GameTitle"
import RestartButton from "../components/RestartButton"
import './MemoryMatchPage.css'

export default function MemoryMatchPage() {

    const firstAttempt = useRef(true);
    const firstAttemptIcon = useRef('');
    const firstAttemptIndex = useRef(null);
    const onWait = useRef(false);

    const [cards, setCards] = useState(['🐕', '🐕', '🐕', '🐕', '🐕', '🍉', '🍉', '🍉', '🍉', '🍉'])
    const [isHidden, setIsHidden] = useState(Array(10).fill(true))

    function handleClick(index) {
        if (!isHidden[index] || onWait.current) return;

        const newHidden = [...isHidden];
        newHidden[index] = false;
        setIsHidden(newHidden);

        if (firstAttempt.current) {
            firstAttemptIcon.current = cards[index]
            firstAttemptIndex.current = index
        } else {
            if (cards[index] !== firstAttemptIcon.current) {

                onWait.current = true
                const firstIndex = firstAttemptIndex.current;
                
                setTimeout(() => {
                    const updatedHidden = [...newHidden];
                    updatedHidden[index] = true;
                    updatedHidden[firstIndex] = true;
                    setIsHidden(updatedHidden)
                    onWait.current = false
                }, 1000);
            }

            firstAttemptIcon.current = ''
            firstAttemptIndex.current = null
        }

        firstAttempt.current = !firstAttempt.current
    }

    return (
        <>
            <GameTitle title={'Memory Match'}></GameTitle>
            <p>Select the cards and find the matching pairs.</p>
            <div className="card-container">
                {cards.map((value, index) => (
                    <button key={index} className={`card ${isHidden[index] ? 'hidden-card' : ''}`} onClick={() => handleClick(index)}>
                        <span className="icon">{isHidden[index] ? '❔' : value}</span>
                    </button>
                ))}
            </div>
            <RestartButton onClick={() => {
                setIsHidden(Array(10).fill(true))
                firstAttempt.current = true;
                firstAttemptIcon.current = '';
                firstAttemptIndex.current = null;
            }}></RestartButton>
        </>
    )
}