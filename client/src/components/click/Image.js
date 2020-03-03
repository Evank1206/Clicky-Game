import React from 'react'

function Click(props) { //props = func={this.incrementScore}
    return (
        <div className="container">

            <img className={"items"} src={props.src} alt="" style={{height:200, width:200}} id={props.id} onClick={props.func} />
            
        </div>
    )
}

export default Click;
