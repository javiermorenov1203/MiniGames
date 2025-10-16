import { GameButton } from '../components/GameButton'
import './HomePage.css'

function HomePage() {

  return (
    <>
      <h1>MiniGames Page</h1>
      <p>Welcome to the MiniGames Homepage. <br />Select the game you want to play.</p>
      <GameButton icon={'❌'} gameName={'Tic Tac Toe'} redirection={'TicTacToe'}></GameButton>
      <GameButton icon={'🧠'} gameName={'Memory Match'}></GameButton>
    </>
  )
}

export default HomePage
