import React from 'react'
import {GlobalCtx} from "./AuthGlobal"

const Header = (props) => {
   
    const {gState, setGState} = React.useContext(GlobalCtx)
    const {url} = gState

    const [form, setForm] = React.useState({
        username: "",
        password: ""
    })

    const handleChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    return (
    <div>
        <form>
            <input type="text" name="username" value={form.username} onChange={handleChange}/>
            <input type="password" name="password" value={form.password} onChange={handleChange}/>
            <input type="submit" value="signup" />
        </form>
    </div>
    )
}

export default Header