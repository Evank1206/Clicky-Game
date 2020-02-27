import React, { Component } from 'react';
import Click from "../click/Click";

class Game extends Component {

    constructor() {
        super();
        this.state = { 
            score: 0,
            clickedObjects: []
         };
        // this.incrementScore = this.incrementScore.bind(this);
      }

    gameover = () =>{
        // console.log(this.state.score=0);
        this.setState({score:0});   
    }

    incrementScore = (e) =>{

        // console.log("before: " + this.state.score);
        e.preventDefault();
        console.log('id:',e.target.id);
        // this.state.clickedObject.push(e.target.id)

        //check if e.target.id exists already in this.state.clickedObject
        // if true
            //gameover
        //else
            //add the id to clickedObject
            //increment the score
        let found = false;
        for(let i=0; i<this.state.clickedObjects.length; i++){
            if(e.target.id === this.state.clickedObjects[i]){
                console.log("clicked");
                found = true;
                break;           
            }
        }
        if(found){
            this.gameover();
        }else{
            const newClickedObjects = this.state.clickedObjects;
            newClickedObjects.push(e.target.id);
            this.setState({clickedObjects:newClickedObjects, score: this.state.score+1});
        }
    
        // if(true){
        //     this.setState({score: this.state.score + 1});
        // }
        // else{
        //     this.setState({score: 0});
        // }
    // console.log("after: " + this.state.score);

    }


    render() {
        return (
            <div>

                <h1>Hello Again</h1>

                <h2>{this.state.score}</h2>

                <Click id="1" func={this.incrementScore}/>
                <Click id="2" func={this.incrementScore}/>
                <Click id="3" func={this.incrementScore}/>
                <Click id="4" func={this.incrementScore}/>
                <Click id="5" func={this.incrementScore}/>
                <Click id="6" func={this.incrementScore}/>

            </div>
        )
    }
}

export default Game;
