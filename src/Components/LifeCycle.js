import React, { Component } from 'react'

class LifeCycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Lukman'
        }
        console.log('LifeCycle Constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifeCycle getDerivedStateFormProps')
        return null
    }
    
    render() {
        console.log('LifeCycle Render')
        return (
            <div>
               LifeCycle A 
            </div>
        )
    }
}

export default LifeCycle
