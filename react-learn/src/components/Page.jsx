import React, { Component } from "react";
import "./Page.css"

export default class Page extends Component {
  constructor(props) {
    super(props);
    this.lastPage = Math.ceil(props.total / props.size);
  }

  handleClick = (page) =>{
    this.props.onChange && this.props.onChange(page)
  }

  render() {
    return (
      <div className="page">
        {this.props.nowPage !== 1 ? <span onClick={()=>{this.handleClick(1)}}>首页</span> : "" }
        {this.props.nowPage !== 1 ? <span onClick={()=>{this.handleClick(1)}}>1</span> : "" }
        {this.props.nowPage - 2 > 2 ? <span className="symbol">...</span> : "" }
        {this.props.nowPage - 2 > 1 ? <span onClick={()=>{this.handleClick(this.props.nowPage - 2)}}>{this.props.nowPage - 2}</span> : "" }
        {this.props.nowPage - 1 > 1 ? <span onClick={()=>{this.handleClick(this.props.nowPage - 1)}}>{this.props.nowPage - 1}</span> : "" }
        {<span className="active">{this.props.nowPage}</span>}
        {this.props.nowPage + 1 < this.lastPage ? <span onClick={()=>{this.handleClick(this.props.nowPage + 1)}}>{this.props.nowPage + 1}</span> : "" }
        {this.props.nowPage + 2 < this.lastPage ? <span onClick={()=>{this.handleClick(this.props.nowPage + 2)}}>{this.props.nowPage + 2}</span> : "" }
        {this.props.nowPage + 2 < this.lastPage - 1 ? <span className="symbol">...</span> : "" }
        {this.props.nowPage !== this.lastPage ? <span onClick={()=>{this.handleClick(this.lastPage)}}>{this.lastPage}</span> : "" }
        {this.props.nowPage !== this.lastPage ? <span onClick={()=>{this.handleClick(this.lastPage)}}>末页</span> : ""}
      </div>
    )
  }
}
