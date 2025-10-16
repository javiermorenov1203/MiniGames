import './RestartButton.css'

export default function RestartButton({ onClick }) {
    return (
        <button className={'restart-button'} onClick={onClick}>Restart ↻</button>
    )
}