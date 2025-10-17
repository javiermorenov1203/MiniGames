import GameTitle from "../components/GameTitle"
import RestartButton from "../components/RestartButton"


export default function RockPaperScissorsPage() {



    return (
        <>
            <GameTitle title={'Rock, Paper & Scissors'}></GameTitle>
            <div className="rock-paper-scissor-container">
                <div className="rock-paper-scissor-left-panel">
                    <button className="rock-paper-scissor-option">👊</button>
                    <button className="rock-paper-scissor-option">✌️</button>
                    <button className="rock-paper-scissor-option">✋</button>
                    <div className="rock-paper-scissor-option-selected">
                    </div>
                </div>
                <div className="rock-paper-scissor-center-panel">vs
                </div>
                <div className="rock-paper-scissor-right-panel">
                    <div className="rock-paper-scissor-option-selected">

                    </div>
                </div>
            </div >

            <RestartButton ></RestartButton>
        </>
    )
}