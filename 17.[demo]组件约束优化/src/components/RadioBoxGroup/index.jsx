import React, { Component } from 'react'
import types from '../../utils/commonTypes';
import PropTypes from 'prop-types';

export default class index extends Component {

    /**
     * 默认属性值
     */
     static defaultProps = {
        datas:[],
        choose:'',
    }

    /**
     * 属性值约束
     */
    static propTypes = {
        datas:types.datas,
        choose:PropTypes.string,
        name:PropTypes.string.isRequired,
        onChange:PropTypes.func
    }

    getRadioBoxs() {
        return this.props.datas.map(it => (<label key={it.value}>
            <input type="radio" value={it.value} name={this.props.name} onChange={(e) => {
                this.props.onChange(e);
            }} checked={this.props.choose === it.value} />
            {it.text}
        </label>))
    }

    render() {
        return (
            <>
                {this.getRadioBoxs()}
            </>
        )
    }
}
