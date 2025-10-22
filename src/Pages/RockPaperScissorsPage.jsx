import { useRef, useState } from "react"
import GameTitle from "../components/GameTitle"
import RestartButton from "../components/RestartButton"
import './RockPaperScissorsPage.css'

export default function RockPaperScissorsPage() {

    const myOption = useRef(null)
    const oponentOption = useRef(null)

    const myScore = useRef(0)
    const oponentScore = useRef(0)

    const [myScoreVisual, setMyScoreVisual] = useState(0)
    const [oponentScoreVisual, setOponentScoreVisual] = useState(0)


    const [optionSelected, setOptionSelected] = useState('')
    const [oponentOptionSelected, setOponentOptionSelected] = useState('')
    const options = ['👊', '✌️', '✋']

    const onWait = useRef(false)

    function handlePlay() {
        if (onWait.current === true) {
            return
        }
        onWait.current = true
        let timeOut = 0
        let index = 0

        while (timeOut < 1000) {
            setTimeout(() => {
                setOponentOptionSelected(options[index])
                index = (index + 1) % 3
            }, timeOut);
            timeOut += 100
        }

        setTimeout(() => {
            const oponetSelection = options[Math.floor(Math.random() * 3)]
            setOponentOptionSelected(oponetSelection)
            const mySelection = myOption.current.textContent
            if (mySelection === oponetSelection) {
                myOption.current.style.backgroundColor = 'rgb(116, 116, 116)';
                oponentOption.current.style.backgroundColor = 'rgb(116, 116, 116)';
            } else if (mySelection === '👊' && oponetSelection === '✌️') {
                myOption.current.style.backgroundColor = 'rgb(0, 169, 0)'
                myScore.current += 1
            } else if (mySelection === '✌️' && oponetSelection === '✋') {
                myOption.current.style.backgroundColor = 'rgb(0, 169, 0)'
                myScore.current += 1
            } else if (mySelection === '✋' && oponetSelection === '👊') {
                myOption.current.style.backgroundColor = 'rgb(0, 169, 0)'
                myScore.current += 1
            } else {
                oponentOption.current.style.backgroundColor = 'rgb(0, 169, 0)'
                oponentScore.current += 1
            }

            setTimeout(() => {
                setOponentOptionSelected('')
                setOptionSelected('')
                myOption.current.style.backgroundColor = 'rgb(221, 221, 221)'
                oponentOption.current.style.backgroundColor = 'rgb(221, 221, 221)'
                setMyScoreVisual(myScore.current)
                setOponentScoreVisual(oponentScore.current)
                onWait.current = false
            }, 1000);

        }, 1000);
    }

    function handleOptionSeleted(value) {
        if (onWait.current === true) {
            return
        }
        setOptionSelected(value)
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
                            <span className="score-number">{myScoreVisual}</span>
                        </div>
                        <div className="rock-paper-scissor-option-container">
                            <button className="rock-paper-scissor-option" onClick={() => handleOptionSeleted('👊')}>👊</button>
                            <button className="rock-paper-scissor-option" onClick={() => handleOptionSeleted('✌️')}>✌️</button>
                            <button className="rock-paper-scissor-option" onClick={() => handleOptionSeleted('✋')}>✋</button>
                        </div>
                        <div ref={myOption} className="rock-paper-scissor-option-selected">
                            {optionSelected}
                        </div>
                    </div>
                </div>

                <div className="rock-paper-scissor-middle-panel">vs
                </div>

                <div className="rock-paper-scissor-right-container">
                    <h3 className="rock-paper-scissor-player-title">Oponent</h3>
                    <div className="rock-paper-scissor-right-panel">
                        <div ref={oponentOption} className="rock-paper-scissor-option-selected">
                            {oponentOptionSelected}
                        </div>
                        <div className="rps-score-counter">
                            <span className="score-title">Score</span>
                            <span className="score-number">{oponentScoreVisual}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rps-button-container">
                <button onClick={() => handlePlay()} id="play-button" disabled={!optionSelected}>Play</button>
                <RestartButton onClick={() => {
                    myScore.current = 0
                    oponentScore.current = 0
                    setMyScoreVisual(0)
                    setOponentScoreVisual(0)
                    setOptionSelected('')
                    setOponentOptionSelected('')
                }}></RestartButton>
            </div>
        </>
    )
}