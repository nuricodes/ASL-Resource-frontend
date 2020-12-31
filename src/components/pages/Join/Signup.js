import React from 'react'
import {GlobalCtx} from "../../../App"
import './Form.css'
import { Link } from "react-router-dom";


const Signup = (props) => {
    const {gState, setgState} = React.useContext(GlobalCtx)
    const {url} = gState

    const blank = {
        username: "",
        password: ""
    }
    const [form, setForm] = React.useState(blank)


    const handleChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const {username, password} = form
        fetch(`${url}/auth/signup`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username, password})
        })
        .then(response => response.json())
        .then(data => {
            setForm(blank)
            props.history.push("/login")
        })

    }


    return (
        <div className="form-container">
                
    <div className="form-content-right">
    <form className="form" onSubmit={handleSubmit}>
        <h1>Get started with us today! Create your account by filling out the information below.</h1>
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
                value={form.username}
                onChange={handleChange} />
            
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
                value={form.password}
                onChange={handleChange} />
        </div>
        <button
            className="form-input-btn"
            type="submit">Submit</button>
        <span className="form-input-login">
            Already have an account? Login <a
                ><Link to="/login">here</Link></a></span>
    </form>
</div>
</div>
    )
}
export default Signup
