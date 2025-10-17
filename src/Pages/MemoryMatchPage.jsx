import { useState, useRef, useEffect } from "react"
import GameTitle from "../components/GameTitle"
import RestartButton from "../components/RestartButton"
import './MemoryMatchPage.css'

export default function MemoryMatchPage() {

    const firstAttempt = useRef(true);
    const firstAttemptIcon = useRef('');
    const firstAttemptIndex = useRef(null);
    const onWait = useRef(false);
    const [playerHasWon, setPlayerHaswon] = useState(false);

    const [cards, setCards] = useState(['🐕', '🐕', '🍒', '🍒', '✈️', '✈️', '💍', '💍', '🍉', '🍉'])
    const [isHidden, setIsHidden] = useState(Array(10).fill(true))

    function shuffle(array) {
        let currentIndex = array.length;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
    }

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
                }, 700);
            }

            firstAttemptIcon.current = ''
            firstAttemptIndex.current = null
        }

        firstAttempt.current = !firstAttempt.current

        if (newHidden.every(value => value === false)) {
            setTimeout(() => {
                setPlayerHaswon(true)
            }, 700);
        }
    }

    useEffect(() => {
        shuffle(cards)
    }, []);

    return (
        <>
            <GameTitle title={'Memory Match'}></GameTitle>
            <p>Select the cards and find the matching pairs.</p>
            <div className="card-container">
                {playerHasWon || cards.map((value, index) => (
                    <button key={index} className={`card ${isHidden[index] ? 'hidden-card' : ''}`} onClick={() => handleClick(index)}>
                        <span className="icon">{isHidden[index] ? '❔' : value}</span>
                    </button>
                ))}
                {!playerHasWon || <p className="winning-text">You have found all the matching pairs. <br />Click the restart button to play again.</p>}
            </div>
            <RestartButton onClick={() => {
                setIsHidden(Array(10).fill(true))
                setPlayerHaswon(false)
                shuffle(cards)
                firstAttempt.current = true;
                firstAttemptIcon.current = '';
                firstAttemptIndex.current = null;
            }}></RestartButton>
        </>
    )
}