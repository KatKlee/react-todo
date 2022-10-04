import { useState } from "react"
import './ToDoItem.css'

const ToDoItem = (props) => {
    const [clicked, setClicked] = useState(false)

    const done = () => {
        setClicked(!clicked)
    }

    return (
        <p className={clicked ? 'done' : ''} onClick={done}>{props.title}</p>
    )
}

export default ToDoItem