import React from 'react'
import './DropdownItem.scss'

const DropdownItem = (props) => {
    return (
        <div className='dropdown__item'>
            {props.children}
        </div>
    )
}

export default DropdownItem
