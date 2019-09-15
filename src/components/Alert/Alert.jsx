import React from 'react'
import './Alert.scss'

const Alert = (props) => {
    return (
        <div className={`alert ${props.open ? 'active' : ''}`}>
            <div className="alert-content">
                {props.children}
            </div>
        </div>
    )
}

export default Alert
