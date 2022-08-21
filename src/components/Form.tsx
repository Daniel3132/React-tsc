import React from "react"
import useNewSubForm from "../hooks/useNewSubForm"
import { Sub } from '../types'



interface FormProps {
    onNewSub: (newSub: Sub) => void
}

const INITIAL_STATE = {
    nick: '',
    subMonths: 0,
    avatar: '',
    description: ''
}





const Form = ({ onNewSub }: FormProps) => {
    // const [inputValues, setInputValues] = useState<FormState["inputValues"]>(INITIAL_STATE)

    const [inputValues, dispatch] = useNewSubForm()

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        onNewSub(inputValues)
        dispatch({type:"clear"})
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target

        dispatch({
            type: "change_value",
            payload: {
                inputName: name,
                inputValue: value
            }
        })
    }

    const handleClear = () => {
        dispatch({ type: "clear" })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={inputValues.nick} type="text" name="nick" placeholder="nick" />
                <input onChange={handleChange} value={inputValues.subMonths} type="text" name="subMonth" placeholder="subMonth" />
                <textarea onChange={handleChange} value={inputValues.description} name="description" placeholder="description" />
                <input onChange={handleChange} value={inputValues.avatar} type="text" name="avatar" placeholder="avatar" />
                <button onClick={handleClear} type="button">Clear Form</button>
                <button type="submit">Save new Sub!</button>
            </form>
        </div>
    )
}

export default Form