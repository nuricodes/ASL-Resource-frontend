import React, { useState } from 'react'
import './Form.css'
import FormSignup from './FormSignup'
import Login from './Login'

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
            <div className="form-container">
                <span className="close-btn">x</span>
                <div className="form-content-left">
                    {/* <img src="https://images.unsplash.com/photo-1580893211123-627e0262be3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="thumbsUp" className="form-img" /> */}
                </div>
                {/* if not submitted then display form signup and show the submit form...if form is submitted then pass in form success */}
                {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <Login />}

            </div>

        </>
    )
}

export default Form
