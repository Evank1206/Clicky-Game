import React, { Component } from 'react';
import Click from "../click/Click";

class Game extends Component {

    constructor() {
        super();
        this.state = { 
            score: 0,
            clickedObjects: [],
            btnsArr: [1,2,3,4,5,6,7,8,9,10]
         }
      }

    shuffle = () =>{
        const numbs = this.state.btnsArr;
        for(let i = numbs.length-1; i>0; i--){
            // console.log(i, numbs);
            const mixed = Math.floor(Math.random() * (i+2));
            [numbs[i], numbs[mixed]] = [ numbs[mixed], numbs[i] ]              
        }
        console.log(numbs);
    }
      
    gameover = () =>{
        this.setState({score:0});
        this.shuffle()  
    }

    incrementScore = (e) =>{
        // e.preventDefault();
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
            this.setState({clickedObjects:newClickedObjects, score: this.state.score +1});
            this.shuffle();
        }
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
