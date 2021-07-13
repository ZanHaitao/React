import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class ImgContainer extends Component {

    static propTypes = {
        imgSrc: PropTypes.arrayOf(PropTypes.string).isRequired, // 图片地址数组
        imgWidth: PropTypes.number.isRequired, // 图片宽度
        imgHeight: PropTypes.number.isRequired,  // 图片高度
        durtion: PropTypes.number.isRequired, // 过度动画时间
    }

    imgDiv = React.createRef() // img容器ref
    timer = null //计时器
    times = 16 // 间隔时间

    switchTo = index => {
        let currentIndex = index;
        if (currentIndex < 0) {
            currentIndex = 0
        } else if (currentIndex > this.props.imgSrc.length - 1) {
            currentIndex = this.props.imgSrc.length - 1
        }

        //容器当前marginLeft
        let nowMarginLeft = parseFloat(getComputedStyle(this.imgDiv.current).marginLeft);
        //目标移动位置
        const targetMarginLeft = -currentIndex * this.props.imgWidth;
        //运动次数
        const loopNum = Math.ceil(this.props.durtion / this.times);
        //每次移动距离
        const everyMoveMarginLeft = (targetMarginLeft - nowMarginLeft) / loopNum;
        //当前循环次数
        let currentLoop = 0;
        clearInterval(this.timer)
        this.timer = setInterval(() => {
            currentLoop++;
            nowMarginLeft += everyMoveMarginLeft;
            this.imgDiv.current.style.marginLeft = nowMarginLeft + 'px'
            if (currentLoop === loopNum) {
                this.imgDiv.current.style.marginLeft = targetMarginLeft + 'px'
                clearInterval(this.timer)
                this.timer = null;
            }
        }, this.times);
    }

    /**
     * 生成img元素
     * @returns 
     */
    getImgs = () => {
        return this.props.imgSrc.map(it => (
            <img key={it} src={it} alt="" style={{
                width: this.props.imgWidth,
                height: this.props.imgHeight,
                display: 'block',
                float: 'left'
            }} />
        ))
    }

    render() {
        const imgs = this.getImgs();
        return (
            <div ref={this.imgDiv} className="image-container" style={{
                width: this.props.imgSrc.length * this.props.imgWidth,
                height: this.props.imgHight
            }}>
                {imgs}
            </div>
        )
    }
}
