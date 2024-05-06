import React from 'react'

function Example(props) {
    const {Course , Student} = props ;
    return (
    <div style={{border:"2px solid pink"}}>
        <h1>{Course}</h1>
        <h4>{Student}</h4>
    </div>
  )
}

export default Example;