import { useState } from "react"
import './ToDoItem.css'

const ToDoItem = (props) => {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }

    return (
        <p className={clicked ? 'done' : ''} onClick={handleClick}>{props.title}</p>
    )
}

export default ToDoItem