import { useState } from "react"
import "./TicTacToePage.css"

export default function TicTacToePage() {

    const icons = ['✖️', '⭕']
    const [current, setCurrent] = useState(0)
    const [board, setBoard] = useState(Array(9).fill(null))
    const winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    var disbledBoard = false

    function HandleClick(index) {
        if (board[index] !== null) {
            return;
        }
        var updatedBoard = [...board]
        updatedBoard[index] = icons[current]
        setBoard(updatedBoard)

        loop1:
        for (let i = 0; i < winningCombinations.length; i++) {
            loop2:
            for (let j = 0; j < winningCombinations[i].length; j++) {
                var index = winningCombinations[i][j]
                if (updatedBoard[index] === icons[current]) {
                    if (j === 2) {
                        console.log('Has ganado')
                        disbledBoard = true
                        return
                    }
                    continue loop2
                } else {
                    continue loop1
                }
            }
        }
        setCurrent((current + 1) % 2)
    }

    return (
        <>
            <h1>Tic Tac Toe</h1>
            <p>Select the spot where you want to place the {icons[current]}: </p>
            <div className='board'>
                {board.map((value, index) => (
                    <button className='tile' key={index} onClick={() => HandleClick(index)} disabled={disbledBoard}>
                        {value ?? ''}
                    </button>
                ))}
            </div>
        </>
    )

}