import { useState } from "react"
import GameTitle from "../components/GameTitle"
import RestartButton from "../components/RestartButton"
import './RockPaperScissorsPage.css'

export default function RockPaperScissorsPage() {


    const [optionSelected, setOptionSelected] = useState('')
    const [oponentOptionSelected, setOponentOptionSelected] = useState('')

    return (
        <>
            <GameTitle title={'Rock, Paper & Scissors'}></GameTitle>
            <div className="rock-paper-scissor-container">
                <div className="rock-paper-scissor-left-container">
                    <h3 className="rock-paper-scissor-player-title">Your selection</h3>
                    <div className="rock-paper-scissor-left-panel">
                        <h4 className="rps-score-counter">Score:<br />1</h4>
                        <div className="rock-paper-scissor-option-container">
                            <button className="rock-paper-scissor-option">👊</button>
                            <button className="rock-paper-scissor-option">✌️</button>
                            <button className="rock-paper-scissor-option">✋</button>
                        </div>
                        <div className="rock-paper-scissor-option-selected">
                            {optionSelected}
                        </div>
                    </div>
                </div>

                <div className="rock-paper-scissor-middle-panel">vs
                </div>

                <div className="rock-paper-scissor-right-container">
                    <h3 className="rock-paper-scissor-player-title">Oponent</h3>
                    <div className="rock-paper-scissor-right-panel">
                        <div className="rock-paper-scissor-option-selected">
                            {optionSelected}
                        </div>
                        <h4 className="rps-score-counter">Score:<br/>1</h4>
                    </div>
                </div>
            </div>
            <RestartButton ></RestartButton>
        </>
    )
}