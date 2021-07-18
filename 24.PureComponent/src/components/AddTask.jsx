import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';

export default class AddTask extends PureComponent {

    state = {
        value:''
    }

    static propTypes = {
        addTask:PropTypes.func.isRequired
    }

    render() {
        console.log('AddTask render');
        return (
            <div>
                <input type="text" value={this.state.value} onChange={e=>{
                    this.setState({
                        value:e.target.value
                    })
                }}/>
                <button onClick={()=>{
                    this.props.addTask({
                        task:this.state.value,
                        finish:false
                    })
                    this.setState({
                        value:''
                    })
                }}>添加</button>
            </div>
        )
    }
}
