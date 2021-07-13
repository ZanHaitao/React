import React, { Component } from 'react'

export default function name(Comp) {
    class WithLog extends Component {
        componentDidMount(){
            console.log('组件初始化完毕')
        }
        
        componentWillUnmount(){
            console.log('组件已经销毁')
        }

        render() {
            const {forwardRef,...rest} = this.props;
            return (
                <Comp {...rest} ref={forwardRef}/>
            )
        }
    }

    return React.forwardRef((props,ref)=>{
        return <WithLog {...props} forwardRef={ref}/>
    })
}
