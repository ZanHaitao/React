import React from "react";
import Ball from "./Ball";
import { getRandom } from "../util/util";

export default class BallList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ballListArr: [],
    };

    const timer = setInterval(() => {
      const info = {
        x:getRandom(0,document.documentElement.clientWidth),
        y:getRandom(0,document.documentElement.clientHeight),
        xSpeed:getRandom(100,300),
        ySpeed:getRandom(100,300),
        bg:`rgb(${getRandom(0,255)},${getRandom(0,255)},${ getRandom(0,255) })`
      }
      this.setState({
        ballListArr:[...this.state.ballListArr,info]
      })
      if(this.state.ballListArr.length === 20){
        clearInterval(timer);
      }
    }, 1000);
  }

  render(){
    return <>
      {this.state.ballListArr.map((item,i)=> <Ball {...item}/> )}
    </>
  }
}
