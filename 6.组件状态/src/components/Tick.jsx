import React from 'react'

export default class Tick extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            time:10
        };
        let timer = setInterval(()=>{
            this.setState({
                time:this.state.time - 1
            })
            if(this.state.time == 0){
                clearInterval(timer);
            }
        },1000)
    }

    render(){
        return <div>倒计时：{this.state.time} <A num={this.state.time}/></div>
    }
}

function A (props){
    return <p>A:{props.num}  <B num={props.num}/> </p>
}

function B(props){
    return <p>B:{props.num}</p>
}