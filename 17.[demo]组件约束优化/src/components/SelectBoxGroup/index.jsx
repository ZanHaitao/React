import React, { Component } from 'react'
import types from '../../utils/commonTypes';
import PropTypes from 'prop-types';

export default class index extends Component {

    /**
     * 默认属性值
     */
    static defaultProps = {
        datas: [],
        choose: '',
    }

    /**
     * 属性值约束
     */
    static propTypes = {
        datas: types.datas,
        choose: PropTypes.string,
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func
    }

    getSelectBoxs() {
        return this.props.datas.map(it => (<option key={it.value} value={it.value}>
            {it.text}
        </option>))
    }

    render() {
        return (
            <>
                <select name={this.props.name} onChange={(e) => {
                    this.props.onChange(e);
                }} value={this.props.choose}>
                    {this.getSelectBoxs()}
                </select>
            </>
        )
    }
}
