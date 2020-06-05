import React from 'react'


const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello Lukman</h1>
    //     </div>
    // )


    return React.createElement(
        'div',
        {id: 'Hello',class: 'DummyClass'},
        React.createElement('h1',null,'Hello Lukman'))
}

export default Hello