import React from 'react'

function Click(props) { //props = func={this.incrementScore}
    return (
        <div>

            <img src={props.src} alt="" style={{height:200, width:200}} id={props.id} onClick={props.func} />
            
        </div>
    )
}

export default Click;
