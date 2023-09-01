import React from 'react'

function EventFunctional() {
    function clickHandler() {
        console.log('Click the functional button')  
    }

    return (
        <div>
            <button onClick={clickHandler}>Click Me! Functional Component</button>
        </div>
    )
}

export default EventFunctional