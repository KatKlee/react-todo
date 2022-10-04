import { useState } from "react"

const InputToDo = (props) => {
    const [inputToDo, setInputToDo] = useState('')

    const add = () => {
        props.settodo((prev) => [...prev, inputToDo])
        setInputToDo('')
    }

    return (
        <section className="inputToDo">
            <input type="text" placeholder="Neues TODO" value={inputToDo} onChange={(e) => { setInputToDo(e.target.value) }} />
            <button onClick={add}>+</button>
        </section>
    )
}

export default InputToDo