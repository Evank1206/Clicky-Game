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
                },
                {
                    num: "7",
                    imgUrl: "https://media0.giphy.com/media/pz1s2IpdQh86k/giphy.gif"
                },
                {
                    num: "8",
                    imgUrl: "https://pa1.narvii.com/5645/4714760267d36f427a618f57b8d076452961a458_00.gif"
                },
                {
                    num: "9",
                    imgUrl: "https://thumbs.gfycat.com/ConstantLegitimateIceblueredtopzebra-small.gif"
                },
                {
                    num: "10",
                    imgUrl: "https://data.whicdn.com/images/295684073/original.gif"
                },
                {
                    num: "11",
                    imgUrl: "https://i.pinimg.com/originals/20/3d/18/203d18ce4f76c402787626f93b9c165e.gif"
                },
                {
                    num: "12",
                    imgUrl: "https://thumbs.gfycat.com/InstructiveRadiantFerret-size_restricted.gif"
                },
                {
                    num: "13",
                    imgUrl: "https://media.giphy.com/media/EsouAhD0tY4YU/giphy.gif"
                },
                {
                    num: "14",
                    imgUrl: "https://media2.giphy.com/media/OVEWsTzreTj2M/source.gif"
                },
                {
                    num: "15",
                    imgUrl: "https://em.wattpad.com/54b5bfa171331f5954bda0229ce3023ea806e19f/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f3243563052336f7932475f6b78413d3d2d3737363031373438382e313562646461343531636566316633373633303336313939343438332e676966?s=fit&w=720&h=720"
                },
                {
                    num: "16",
                    imgUrl: "https://i.kym-cdn.com/photos/images/original/001/034/177/694.gif"
                },
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
                <div className="text">
                    <h2>Top Score:_{this.state.topScore}_</h2>
                    <h2>Game Score:_{this.state.score}_</h2>                    
                </div>


                <Click id={this.state.imgArr[0].num} src={this.state.imgArr[0].imgUrl} func={this.incrementScore}/>
                <Click id={this.state.imgArr[1].num} src={this.state.imgArr[1].imgUrl} func={this.incrementScore}/>
                <Click id={this.state.imgArr[2].num} src={this.state.imgArr[2].imgUrl} func={this.incrementScore}/>
                <Click id={this.state.imgArr[3].num} src={this.state.imgArr[3].imgUrl} func={this.incrementScore}/>
                <Click id={this.state.imgArr[4].num} src={this.state.imgArr[4].imgUrl} func={this.incrementScore}/>
                <Click id={this.state.imgArr[5].num} src={this.state.imgArr[5].imgUrl} func={this.incrementScore}/>
                <Click id={this.state.imgArr[6].num} src={this.state.imgArr[6].imgUrl} func={this.incrementScore}/>
                <Click id={this.state.imgArr[7].num} src={this.state.imgArr[7].imgUrl} func={this.incrementScore}/>
                <Click id={this.state.imgArr[8].num} src={this.state.imgArr[8].imgUrl} func={this.incrementScore}/>
                <Click id={this.state.imgArr[9].num} src={this.state.imgArr[9].imgUrl} func={this.incrementScore}/>
                <Click id={this.state.imgArr[10].num} src={this.state.imgArr[10].imgUrl} func={this.incrementScore}/>
                <Click id={this.state.imgArr[11].num} src={this.state.imgArr[11].imgUrl} func={this.incrementScore}/>
                <Click id={this.state.imgArr[12].num} src={this.state.imgArr[12].imgUrl} func={this.incrementScore}/>
                <Click id={this.state.imgArr[13].num} src={this.state.imgArr[13].imgUrl} func={this.incrementScore}/>
                <Click id={this.state.imgArr[14].num} src={this.state.imgArr[14].imgUrl} func={this.incrementScore}/>
                <Click id={this.state.imgArr[15].num} src={this.state.imgArr[15].imgUrl} func={this.incrementScore}/>


            </div>
        )
    }
}

export default Game;
