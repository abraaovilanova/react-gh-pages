import React from 'react'
import './Popup.css'

const Popup = (props) => {
    return (props.trigger ? (
        <div className='Popup'>
            <div className="Popup-inner">
                <div className="Popup-inner-header">
                    <h3>{props.title}</h3>
                    <button className="close-btn" onClick={()=>props.handleTrigger(false)}>X</button>
                </div>
                 <br />
                {props.children}
            </div>
        </div>
    ): ''
    )
}

export default Popup