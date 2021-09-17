import React, { useState } from "react"

type Teste = (initialState: Record<string, unknown>) => {
    form: Record<string, unknown>
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    clear: () => void
}


const useForm: Teste = (initialState) => {
    const [form, setForm] = useState<Record<string, unknown>>(initialState)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        setForm({ ...form, [name]: value })
    }

    const clear = () => {
        setForm(initialState)
    }

    return { form, handleInputChange, clear }
}

export default useForm