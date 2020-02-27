import React from 'react'

function Click(props) { //props = func={this.incrementScore}
    return (
        <div>

            <button onClick={props.func} id={props.id}>Click</button>
            
        </div>
    )
}

export default Click;
