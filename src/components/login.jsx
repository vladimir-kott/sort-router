import React, { useEffect, useState } from 'react'
import TextField from './textField'

const Login = () => {
    const [data, setData] = useState({email:"", password:""})
    const [errors, setError] = useState({})
    const hanldeChange = ({target}) => {
        setData(prevState => ({...prevState, [target.name]:target.value}))
        /*console.log(e.target.name)*/
    }
    useEffect(() => {
        validate()
    }, [data])
    const validate = () => {
        const errors = {}
        for (const fildName in data){
            if (data[fildName].trim() === ""){
                errors[fildName] = `${fildName} обязательное для заполнения`
            }
        }
        setError(errors)
        return Object.keys(errors).length === 0 || false
    }

    const handleSumit = (event) => {
        event.preventDefault()
        const isValid = validate()
        if (!isValid) return
        console.log(data)
    }

    return (
        <form onSubmit = {handleSumit}>
            <TextField 
                label = "Email" 
                name = "email" 
                value = {data.email} 
                onChange = {hanldeChange}
                error = {errors.email}
            />
            <TextField 
                label = "Password" 
                type = "password" 
                name = "password" 
                value = {data.password} 
                onChange = {hanldeChange}
                error = {errors.password}
            />
            <button>Sumbit</button>
        </form>
    )
}
 
export default Login 