import React, { Component } from 'react';
import Click from "../click/Image";

class Game extends Component {

    constructor() {
        super();
        this.state = {

            topScore:0,
            score: 0,

            clickedObjects: [],
            imgArr: [
                {
                    num: "1",
                    imgUrl: "https://www.rockandpop.cl/wp-content/uploads/2019/03/Dragon-Ball-Z.gif"
                },
                {
                    num: "2",
                    imgUrl: "https://media2.giphy.com/media/ykbXCsOwfp1dK/giphy.webp?cid=790b761166d02393695a9d67bdf8977e9b14c24345a35ea2&rid=giphy.webp"
                },
                {
                    num: "3",
                    imgUrl: "https://media1.tenor.com/images/a6c1821a219c36c1b19f8fe4efda4d8e/tenor.gif?itemid=12214403"
                },
                {
                    num: "4",
                    imgUrl: "https://media1.tenor.com/images/f4432ffef2d315fd506796755e583b91/tenor.gif?itemid=15075851"
                },
                {
                    num: "5",
                    imgUrl: "https://media2.giphy.com/media/pGmcFyW8VOVHO/source.gif"
                },
                {
                    num: "6",
                    imgUrl: "https://media3.giphy.com/media/zDAqUralC0HU4/giphy.gif"
                }
            ],
         }
      }

    shuffle = () =>{
        const numbs = this.state.imgArr;
        for(let i = numbs.length-1; i>0; i--){
            // console.log(i, numbs);
            const mixed = Math.floor(Math.random() * (i+2));
            [numbs[i], numbs[mixed]] = [ numbs[mixed], numbs[i]]              
        }
        console.log(numbs);
    }
      
    gameover = () =>{
        // console.log(this.state.topScore);
        // console.log(this.state.score);
        if(this.state.score > this.state.topScore){
            this.setState({score:0, topScore: this.state.score})
        }
        else{
            this.setState({score:0})
        }

        // this.setState({score:0, topScore:2});
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
        console.log("id", e.target.id);
        
    }



    render() {
        return (
            <div>

                <h1>Hello Again</h1>
                
                <h2>Top Score:_{this.state.topScore}_</h2>
                <h2>Game Score:_{this.state.score}_</h2>

                <Click id={this.state.imgArr[0].num} src={this.state.imgArr[0].imgUrl} func={this.incrementScore}/>
                <Click id={this.state.imgArr[1].num} src={this.state.imgArr[1].imgUrl} func={this.incrementScore}/>
                <Click id={this.state.imgArr[2].num} src={this.state.imgArr[2].imgUrl} func={this.incrementScore}/>
                <Click id={this.state.imgArr[3].num} src={this.state.imgArr[3].imgUrl} func={this.incrementScore}/>
                <Click id={this.state.imgArr[4].num} src={this.state.imgArr[4].imgUrl} func={this.incrementScore}/>
                <Click id={this.state.imgArr[5].num} src={this.state.imgArr[5].imgUrl} func={this.incrementScore}/>


            </div>
        )
    }
}

export default Game;
