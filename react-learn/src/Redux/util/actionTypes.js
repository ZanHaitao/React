/**
 * 获取length长度的一个随机的字符串（包含数字字母）
 * @param {*} length 
 */
function getRandomString(length) {
  return Math.random().toString(36).substr(2, length).split("").join(".");
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  INIT() {
    return "@@redux/INIT" + getRandomString(6)
  },
  UNKNOWN() {
    return "@@redux/PROBE_UNKNOW_ACTION" + getRandomString(6)
  }
}