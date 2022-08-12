import React, { useEffect, useState } from 'react'
import TextField from './textField'
import { validator } from '../api/utils/validator'

const Login = () => {
    const [data, setData] = useState({email:"", password:""})
    const [errors, setError] = useState({})
    const hanldeChange = ({target}) => {
        setData(prevState => ({...prevState, [target.name]:target.value}))
        /*console.log(e.target.name)*/
    }
    const validatorConfig = {
        email:{
            isRequaired: {
                message: "Электронная почта обязательная для заполнения"
            },
            isEmail: {
                message: "Email введен не корректно"
            }
        },
        password:{
            isRequaired: {
                message: "Пароль обязательный для заполнения"
            },
            isCapitalSymbols:{
                message: "Пароль должен содержать минимум 1 Заглавную букву"
            },
            isContainDigit: {
                message: "Пароль должен содержать минимум 1 цифру"
            },
            min: {
                message: "Пароль должен быть минимум 8 симовол",
                value: 8
            }
        }
    }
    useEffect(() => {
        validate()
    }, [data])
    const validate = () => {
        const errors = validator(data, validatorConfig)
        setError(errors)
        return Object.keys(errors).length === 0
    }
    const isValid = Object.keys(errors).length === 0

    const handleSumit = (event) => {
        event.preventDefault()
        const isValid = validate()
        if (!isValid) return
        console.log(data)
    }

    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 shadow p-4'>
                    <h3 className='mb-4'>Login</h3>
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
                        <button 
                            type='submit' 
                            disabled={!isValid}
                            className='btn btn-primary w-100 mx-auto'
                        >Sumbit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
 
export default Login 