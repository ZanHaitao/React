import React, { Component } from 'react'

export default class index extends Component {

    getCheckBoxs() {
        return this.props.datas.map(it => (<label key={it.value}>
            <input type="checkbox" value={it.value} name={this.props.name} onChange={(e) => {
                if (e.target.checked) {
                    this.props.onChange({
                        target:{
                            name:this.props.name,
                            value:[...this.props.choose, e.target.value]
                        }
                    });
                } else {
                    this.props.onChange({
                        target:{
                            name:this.props.name,
                            value:this.props.choose.filter(it => it !== e.target.value)
                        }
                    });
                }
            }} checked={this.props.choose.includes(it.value)} />
            {it.text}
        </label>))
    }

    render() {
        return (
            <>
                {this.getCheckBoxs()}
            </>
        )
    }
}
