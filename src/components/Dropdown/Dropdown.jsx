import React from 'react'
import './Dropdown.scss'

const Dropdown = (props) => {
    return (
        <div className={`dropdown__container ${props.open ? 'active' : ''}`}>
            {props.children}
        </div>
    )
}

export default Dropdown
