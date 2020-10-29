import React from 'react'
import './App.css'

//create and export a global state
export const GlobalCtx = React.createContext(null)

//set up an object contains global state
const  [gState, setGState] = React.useState({})


const AuthForm = () => {
    return(
        <GlobalCtx.Provider value={(gState, setGState)}>
        <div>

        </div>
        </GlobalCtx.Provider>
    )
}

export default AuthForm


