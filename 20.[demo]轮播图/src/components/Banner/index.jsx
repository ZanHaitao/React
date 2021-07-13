import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
import ImgContainer from './ImgContainer';
import Arrow from './Arrow';
import Indicator from './Indicator';

export default class Banner extends Component {

    /**
     * 默认属性
     */
    static defaultProps = {
        width: 500,
        height: 300,
        imgSrc: [],
        isAutoPlay: true,
        autoDurtion: 2000,
        durtion: 1000
    }

    /**
     * 属性约束
     */
    static propTypes = {
        width: PropTypes.number.isRequired, //banner容器宽度
        height: PropTypes.number.isRequired,  // banner容器高度
        imgSrc: PropTypes.arrayOf(PropTypes.string).isRequired, //banner轮播图片数组
        isAutoPlay: PropTypes.bool.isRequired, //是否自动播放
        autoDurtion: PropTypes.number.isRequired, //自动播放间隔时间
        durtion: PropTypes.number.isRequired //切换动画过度时间
    }

    state = {
        current: 0
    }

    imgDiv = React.createRef(); // img容器ref
    autoTimer = null

    componentDidMount() {
        if (!this.props.isAutoPlay) {
            return
        }
        this.startAutoLoop()
    }

    /**
     * 开启自动轮播
     */
    startAutoLoop = () => {
        if (!this.props.isAutoPlay) {
            return
        }
        this.autoTimer = setInterval(() => {
            const currentIndex = (this.state.current + 1) % this.props.imgSrc.length;
            this.handleSwitch(currentIndex);
        }, this.props.autoDurtion);
    }

    /**
     * 暂停自动轮播
     */
    stopAutoLoop = () => {
        if (!this.props.isAutoPlay) {
            return
        }
        clearInterval(this.autoTimer);
    }

    handleSwitchType = type => {
        let currentIndex = this.state.current;
        if (type === 'left') {
            currentIndex -= 1;
            if (currentIndex < 0) {
                currentIndex = this.props.imgSrc.length - 1
            }
        } else {
            currentIndex = (this.state.current + 1) % this.props.imgSrc.length;
        }
        this.handleSwitch(currentIndex);
    }

    /**
     * 切换轮播图
     * @param {*} index 
     */
    handleSwitch = index => {
        this.setState({
            current: index
        })
        this.imgDiv.current.switchTo(index);
    }

    render() {
        return (
            <div className="banner-container" style={{
                width: this.props.width,
                height: this.props.height
            }} onMouseEnter={this.stopAutoLoop} onMouseLeave={this.startAutoLoop}>
                <ImgContainer
                    ref={this.imgDiv}
                    imgSrc={this.props.imgSrc}
                    imgWidth={this.props.width}
                    imgHeight={this.props.height}
                    durtion={this.props.durtion}
                />
                <Arrow onChange={this.handleSwitchType} />
                <Indicator total={this.props.imgSrc.length} current={this.state.current} onChange={this.handleSwitch}/>
            </div>
        )
    }
}
