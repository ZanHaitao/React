import React from "react";
import ReactDOM from "react-dom";
import img1 from "./assets/1.jpeg";
import img2 from "./assets/2.jpeg";
import img3 from "./assets/3.jpeg";
import "./index.css";

const imgArr = [img1, img2, img3]; // 存放图片数组
let index = 0;
let timer;
const container = document.getElementById("root");

/**
 * 渲染
 */
function render() {
  ReactDOM.render(<img src={imgArr[index]} alt="" />, container);
}
/**
 * 启动定时器，切换图片
 */
function start() {
  stop();
  timer = setInterval(() => {
    index = (index + 1) % 3;
    render();
  }, 2000);
}
/**
 * 停止定时器
 */
function stop() {
  clearInterval(timer);
}
container.onmouseenter = () => {
  stop();
};
container.onmouseleave = () => {
  start();
};
render();
start();
