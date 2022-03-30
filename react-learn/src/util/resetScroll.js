let timer1, timer2;
/**
 * 初始化滚动条
 */
export default function resetScroll() {
  clearInterval(timer1);
  clearInterval(timer2);
  const html = document.documentElement;
  timer1 = reset(html.scrollTop, 0, 300, (start) => {
    html.scrollTop = start;
  });
  timer2 = reset(html.scrollLeft, 0, 300, (start) => {
    html.scrollLeft = start;
  });
}

/**
 * 持续duration时间 从start移动到end
 * @param {*} start 
 * @param {*} end 
 * @param {*} duration 
 * @param {*} callback 
 */
function reset(start, end, duration, callback) {
  const tick = 16;
  const times = Math.ceil(duration / tick);
  let currTImes = 0;
  const dis = (end - start) / times;
  let currStart = start + dis;

  const timer = setInterval(() => {
    currTImes++;
    currStart = currStart + dis;
    if (currTImes === times) {
      currStart = end;
      clearInterval(timer);
    }
    callback(currStart);
  }, tick);
  return timer;
}