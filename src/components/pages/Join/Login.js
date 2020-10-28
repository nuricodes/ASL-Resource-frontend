import React from 'react'
import useForm from './useForm'
import validate from './validateInfo'
import './Form.css'

const Login = ({ submitForm }) => {
    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate)


    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <img src="https://www.iconspng.com/images/-abstract-user-icon-1/-abstract-user-icon-1.jpg" height="150px" width="150px" />
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">
                        Username:
                    </label>
                    <input
                        id="username"
                        type="text"
                        name='username'
                        className='form-input'
                        placeholder="Enter your username"
                        value={values.username}
                        onChange={handleChange} />
                    {/* Display erros name...if it's true then return the following */}
                    {errors.username && <p>{errors.username}</p>}
                </div>

                <div className="form-inputs">
                    <label htmlFor="password"
                        className="form-label">
                        Password:
                    </label>
                    <input id="password"
                        type="password"
                        name='password'
                        className='form-input'
                        placeholder="Enter your password"
                        value={values.password}
                        onChange={handleChange} />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <button
                    className="form-input-btn"
                    type="submit">Submit</button>
                <span className="form-input-login">
                    Forgot your password? Click <a
                        href="#">here</a></span>
            </form>
        </div>
    )
}

export default Login

