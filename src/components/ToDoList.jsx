import InputToDo from "./InputToDo"
import ToDoCounter from "./ToDoCounter"
import { useState } from "react"
import ToDoItem from "./ToDoItem"

const ToDoList = () => {
    const [newToDo, setNewToDo] = useState([])

    return (
        <>
            <ToDoCounter countercount={newToDo.length} />
            <InputToDo settodo={setNewToDo} />
            {newToDo.map((item, key) =>
                <ToDoItem key={key} title={item} />
            )}
        </>
    )
}

export default ToDoList


// TODO: Abstreichen der ToDos muss noch auf Counter angewandt werden