import { useState } from "react"
import GameTitle from "../components/GameTitle"
import RestartButton from "../components/RestartButton"
import './RockPaperScissorsPage.css'

export default function RockPaperScissorsPage() {


    const [optionSelected, setOptionSelected] = useState('')
    const [oponentOptionSelected, setOponentOptionSelected] = useState('')
    const options = ['👊', '✌️', '✋']

    function handlePlay() {

        let timeOut = 100

        while (timeOut < 1000) {
            setTimeout(() => {
                setOponentOptionSelected(options[0])
            }, timeOut);
            timeOut += 100
            setTimeout(() => {
                setOponentOptionSelected(options[1])
            }, timeOut);
            timeOut += 100
            setTimeout(() => {
                setOponentOptionSelected(options[2])
            }, timeOut);
            timeOut += 100
        }

        setTimeout(() => {
            const oponetSelection = options[Math.floor(Math.random() * 3)]
            setOponentOptionSelected(oponetSelection)
            const mySelection = document.getElementById('my-option').textContent
            if (mySelection === oponetSelection) {
                console.log('Empate')
            } else if (mySelection === '👊') {
                if (oponetSelection === '✌️') {
                    console.log('Has ganado')
                } else {
                    console.log('Has perdido')
                }
            }
        }, 1000);

    }

    return (
        <>
            <GameTitle title={'Rock, Paper & Scissors'}></GameTitle>
            <div className="rock-paper-scissor-container">
                <div className="rock-paper-scissor-left-container">
                    <h3 className="rock-paper-scissor-player-title">Your selection</h3>
                    <div className="rock-paper-scissor-left-panel">
                        <div className="rps-score-counter">
                            <span className="score-title">Score</span>
                            <span className="score-number">1</span>
                        </div>
                        <div className="rock-paper-scissor-option-container">
                            <button className="rock-paper-scissor-option" onClick={() => setOptionSelected('👊')}>👊</button>
                            <button className="rock-paper-scissor-option" onClick={() => setOptionSelected('✌️')}>✌️</button>
                            <button className="rock-paper-scissor-option" onClick={() => setOptionSelected('✋')}>✋</button>
                        </div>
                        <div id="my-option" className="rock-paper-scissor-option-selected">
                            {optionSelected}
                        </div>
                    </div>
                </div>

                <div className="rock-paper-scissor-middle-panel">vs
                </div>

                <div className="rock-paper-scissor-right-container">
                    <h3 className="rock-paper-scissor-player-title">Oponent</h3>
                    <div className="rock-paper-scissor-right-panel">
                        <div id="oponent-option" className="rock-paper-scissor-option-selected">
                            {oponentOptionSelected}
                        </div>
                        <div className="rps-score-counter">
                            <span className="score-title">Score</span>
                            <span className="score-number">1</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rps-button-container">
                <button onClick={() => handlePlay()} id="play-button" disabled={!optionSelected}>Play</button>
                <RestartButton ></RestartButton>
            </div>
        </>
    )
}