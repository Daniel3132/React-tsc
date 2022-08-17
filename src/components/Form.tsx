import { useState } from "react"
import { Sub } from '../types'

interface FormState {
    /* nick: '',
    subMonths: 0,
    avatar: '',
    description: '' */
    inputValues: Sub
}

const Form = () => {
    const [inputValues, setInputValues] = useState<FormState["inputValues"]>({
        nick: '',
        subMonths: 0,
        avatar: '',
        description: ''
    })

    const handleSubmit = () => {

    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/*
                //De esta manera podemos detectar el tipo de evento que estando 
                en la funcion, no lo reconocia y no podiamos saber el nombre
                 <input onChange={e=>{
                    setInputValues({
                        ...inputValues,
                        [e.target.name]:e.target.value
                    })
                }} type="text" /> */}
                <input onChange={handleChange} value={inputValues.nick} type="text" name="nick" placeholder="nick" />
                <input onChange={handleChange} value={inputValues.subMonths} type="text" name="subMonth" placeholder="subMonth" />
                <textarea onChange={handleChange} value={inputValues.avatar} name="description" placeholder="description" />
                <input onChange={handleChange} value={inputValues.description} type="text" name="avatar" placeholder="avatar" />
                <button>Save new Sub!</button>
            </form>
        </div>
    )
}

export default Form