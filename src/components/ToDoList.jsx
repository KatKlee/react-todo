import InputToDo from "./InputToDo"
import ToDoCounter from "./ToDoCounter"
import { useState } from "react"
import './ToDoList.css'

const ToDoList = () => {
    const [newToDo, setNewToDo] = useState([])
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }

    return (
        <>
            <ToDoCounter countercount={newToDo.length} />
            <InputToDo settodo={setNewToDo} />
            {newToDo.map((item, key) =>
                <p key={key} className={clicked ? 'done' : ''} onClick={handleClick}>{item}</p>
            )}
        </>
    )
}

export default ToDoList


// TODO: Abstreichen der ToDos muss noch korrigiert werden