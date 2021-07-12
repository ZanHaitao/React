import React, { Component } from 'react'
import types from '../../utils/commonTypes';
import PropTypes from 'prop-types';

export default class index extends Component {

    /**
     * 默认属性值
     */
    static defaultProps = {
        datas:[],
        choose:[],
    }

    /**
     * 属性值约束
     */
    static propTypes = {
        datas:types.datas,
        choose:PropTypes.arrayOf(PropTypes.string),
        name:PropTypes.string.isRequired,
        onChange:PropTypes.func
    }

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
