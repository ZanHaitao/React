import Mock from "mockjs"

const result = Mock.mock({
  msg: "查询成功",
  status: "success",
  'data|100': [{
    "address": "@county(true)",
    "appkey": /\d{11}_\d{7}/,
    "birth|1960-2005": 0,
    "ctime": /\d{11}/,
    "email": "@email",
    "id|+1": 1,
    "name": "@cname",
    "phone": /1\d{10}/,
    "sNo": /\d{6}/,
    "sex|1": [0, 1],
    "utime": /\d{11}/,
  }]
})
export default {
  'GET /api/student/findAll': result
}