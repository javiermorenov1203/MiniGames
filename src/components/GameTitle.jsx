import { useNavigate } from 'react-router-dom'
import './GameTitle.css'

export default function GameTitle({ title }) {

    const navigate = useNavigate()

    return (
        <div className="header">
            <button className={'back-button'} onClick={() => navigate('/')}>←</button>
            <h1 className="title">{title}</h1>
        </div>
    )

}