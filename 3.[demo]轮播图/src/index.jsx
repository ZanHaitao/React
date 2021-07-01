import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import image1 from './assets/img1.jpeg';
import image2 from './assets/img2.jpeg';
import image3 from './assets/img3.jpeg';

const container = document.getElementById('root'); // 根元素节点
const imageArr = [image1, image2, image3]; // 图片数组
let index = 0; // 当前展示图片索引
let timer;

/**
 * 渲染函数
 */
function render() {
    ReactDom.render(<img src={imageArr[index]} alt="" />, container);
}

/**
 * 开始轮播图片
 */
function start() {
    stop();
    timer = setInterval(() => {
        index = (index + 1) % imageArr.length;
        render();
    }, 2000)
}

/**
 * 停止轮播图片
 */
function stop() {
    clearInterval(timer);
}

/**
 * 鼠标移入事件
 */
container.addEventListener('mouseenter', () => {
    stop();
});

/**
 * 鼠标移出事件
 */
container.addEventListener('mouseleave', () => {
    start();
})

render();
start();