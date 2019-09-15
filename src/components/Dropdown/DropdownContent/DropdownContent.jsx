import React from 'react'
import './DropdownContent.scss'
const DropdownContent = (props) => {
    return (
        <div className='dropdown__content active'>
            {props.children}
        </div>
    )
}

export default DropdownContent
