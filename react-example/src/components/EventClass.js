import React, { Component } from 'react'

export class EventClass extends Component {
    clickHandler() {
        console.log('Click the class button')
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click Me! Class Component</button>
            </div>
        )
    }
}

export default EventClass