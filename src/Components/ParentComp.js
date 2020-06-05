import React, { Component } from 'react'
import RegularComp from './RegularComp'

class ParentComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'Lukman'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name:'Lukman'
            })
        }, 2000)
    }
    
    render() {
        console.log("Parent Component")
        return (
            <div>
               <RegularComp name={this.state.name}></RegularComp>
               <PureComp name={this.state.name}></PureComp>
            </div>
        )
    }
}

export default ParentComp
