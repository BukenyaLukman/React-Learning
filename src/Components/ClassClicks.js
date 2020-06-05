import React, { Component } from 'react'

export class ClassClick extends Component {
    clickhandler(){
        console.log('Clicked the Button')
    }
    render() {
        return (
            <div>
                <button onClick={this.clickhandler}>Click Me</button>
            </div>
        )
    }
}

export default ClassClick
