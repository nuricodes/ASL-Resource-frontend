import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';


const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large']


export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    // if you put a button style...then its going to apply STYLES 1 or 2 but if you don't have any of the class applied to it it will automatically apply the first style 
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0]

    // if it has a button size then change it to SIZES (medium or large)
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <>
            <Link to='/signup' className='btn-mobile'>

                <button
                    className={`btn${checkButtonStyle} ${checkButtonSize}`}
                    onClick={onClick}
                    type={type}
                >
                    {/* renders/displays whatever you put inside of the button */}
                    {children}
                </button>

            </Link>



        </>
    )
}