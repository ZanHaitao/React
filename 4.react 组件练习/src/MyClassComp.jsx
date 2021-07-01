import React from 'react'

export default class MyClassComp extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
    }

    render(){
        return <h1>test ClassComponents {this.props.title}</h1>
    }
}