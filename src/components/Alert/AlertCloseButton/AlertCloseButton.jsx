import React from 'react'
import './AlertCloseButton.scss'

const AlertCloseButton = (props) => {
    return (
        <button 
        className='alert__close__button'
        onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default AlertCloseButton
