import React, { Component } from 'react'
import './index.css'

export default class index extends Component {

    constructor(props) {
        super(props);
        this.pageNumber = this.getPageNumber();
    }

    /**
     * 获取显示最小页码
     * @returns 
     */
    getMinPageNumber() {
        const flag = this.pageNumber - this.props.current;
        const middle = Math.floor(this.props.panelPage / 2);
        if (flag !== 0 && flag < middle) {
            return this.props.current - middle - flag < 1 ? 1 : this.props.current - middle - flag;
        } else if (flag === 0) {
            return this.props.current - this.props.panelPage + 1 < 1 ? 1 : this.props.current - this.props.panelPage + 1;
        }
        return this.props.current - middle < 1 ? 1 : this.props.current - middle;
    }

    /**
     * 获取显示最大页码
     * @returns 
     */
    getMaxPageNumber(min) {
        return min + this.props.panelPage - 1 > this.pageNumber ? this.pageNumber : min + this.props.panelPage - 1;
    }

    /**
     * 获取最大页码
     * @returns 
     */
    getPageNumber() {
        return Math.ceil(this.props.total / this.props.limit);
    }

    /**
     * 改变页码
     * @param {*} newPage 
     */
    changePage(newPage) {
        if (newPage < 1) {
            newPage = 1
        } else if (newPage > this.pageNumber) {
            newPage = this.pageNumber
        }

        this.props.onChangePage && this.props.onChangePage(newPage)
    }

    /**
     * 获取页码数字
     * @returns 
     */
    getPage(){
        const minPage = this.getMinPageNumber();
        const maxPage = this.getMaxPageNumber(minPage);
        const numbers = [];
        numbers.push(<div key={1} onClick={() => { this.changePage(1) }} className={this.props.current === 1 ? 'page-btn active' : 'page-btn'}>1</div>)
        if (minPage > 2) {
            numbers.push(<div key={999} className="page-tip">...</div>)
        }
        for (let i = minPage; i <= maxPage; i++) {
            if (i === 1 || i === this.pageNumber) {
                continue;
            }
            numbers.push(<div key={i} onClick={() => { this.changePage(i) }} className={this.props.current === i ? 'page-btn active' : 'page-btn'}>{i}</div>)
        }
        if (maxPage < this.pageNumber - 1) {
            numbers.push(<div key={9999} className="page-tip">...</div>)
        }
        if (this.pageNumber !== 1) {
            numbers.push(<div key={this.pageNumber} onClick={() => { this.changePage(this.pageNumber) }} className={this.props.current === this.pageNumber ? 'page-btn active' : 'page-btn'}>{this.pageNumber}</div>)
        }
        return numbers;
    }

    render() {
        return (
            <div className="page-content">
                <div className="page-symbol" onClick={() => { this.changePage(1) }}>&lt;&lt;</div>
                <div className="page-change" onClick={() => { this.changePage(this.props.current - 1) }}>上一页</div>
                {this.getPage()}
                <div className="page-change" onClick={() => { this.changePage(this.props.current + 1) }}>下一页</div>
                <div className="page-symbol" onClick={() => { this.changePage(this.pageNumber) }}>&gt;&gt;</div>
                <div style={{marginLeft:20}}>{this.props.current} / {this.pageNumber}</div>
            </div>
        )
    }
}
