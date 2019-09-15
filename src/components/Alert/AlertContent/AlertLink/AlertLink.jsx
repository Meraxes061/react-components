import React from 'react'
import './AlertLink.scss'

const AlertLink = (props) => {
    return (
        <a className='alert__link' href={props.href}>{props.children}</a>
    )
}

export default AlertLink
