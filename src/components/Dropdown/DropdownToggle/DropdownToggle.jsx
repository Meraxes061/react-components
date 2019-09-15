import React from 'react'
import './DropdownToggle.scss'

const DropdownToggle = (props) => {

    return (
        <div
            className='dropdown__toggle'
            onClick={props.onClick}>
            <span>{props.text}</span>
            <i className="material-icons">arrow_drop_down</i>
        </div>
    )
}

export default DropdownToggle
