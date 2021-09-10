import { useState } from "react"

const useForm = (initialState: any) => {
    const [form, setForm] = useState(initialState)

    const handleInputChange = (e: any) => {
        const {value, name} = e.target
        setForm({...form, [name]: value})
    }

    return [form, handleInputChange]
}

export default useForm