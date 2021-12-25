import React from 'react'
import {useGlobalContext}  from '../Context/context'
function Backdrop() {
    const {showBackdrop} = useGlobalContext()
    return (
        <div className={`backdrop ${showBackdrop ? "backdrop--active" : ''}`}>
            
        </div>
    )
}

export default Backdrop
