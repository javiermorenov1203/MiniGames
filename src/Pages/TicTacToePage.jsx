import { useState } from "react"
import GameTitle from "../components/GameTitle"
import "./TicTacToePage.css"

export default function TicTacToePage() {

    const icons = ['✖️', '⭕']
    const [current, setCurrent] = useState(0)
    const [winnerCells, setWinnerCells] = useState([])
    const [board, setBoard] = useState(Array(9).fill(null))
    const winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

    function HandleClick(index) {
        if (board[index] !== null || winnerCells.length > 0) {
            return;
        }
        var updatedBoard = [...board]
        updatedBoard[index] = icons[current]
        setBoard(updatedBoard)

        for (const combo of winningCombinations) {
            const [a, b, c] = combo;
            if (
                updatedBoard[a] &&
                updatedBoard[a] === updatedBoard[b] &&
                updatedBoard[a] === updatedBoard[c]
            ) {
                setWinnerCells(combo);
                return;
            }
        }
        setCurrent((current + 1) % 2)
    }

    return (
        <>
            <GameTitle title={'Tic Tac Toe'}></GameTitle>
            <p>Select the cell where you want to place the icon. </p>
            <p>Turn: {icons[current]}</p>
            <div className='board'>
                {board.map((value, index) => (
                    <button className={`tile ${winnerCells.includes(index) ? 'winning-tile' : ''} 
                            ${value || winnerCells.length > 0 ? 'disabled-tile' : ''}`
                    }
                        key={index}
                        onClick={() => HandleClick(index)}>
                        {value ?? ''}
                    </button>
                ))}
            </div>
            <button className={'restart-button'} onClick={() => {
                setCurrent(0)
                setWinnerCells([])
                setBoard(Array(9).fill(null))
            }
            }>Restart ↻</button>
        </>
    )

}