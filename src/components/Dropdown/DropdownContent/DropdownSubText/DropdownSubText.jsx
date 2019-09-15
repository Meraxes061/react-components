import React from 'react'
import './DropdownSubText.scss'

const DropdownSubText = (props) => {
    return (
        <div className='dropdown__sub__text'>
            {props.children}
        </div>
    )
}

export default DropdownSubText
