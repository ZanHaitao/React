const appkey = '15556677737_1585147447159';

/**
 * 获取学生列表
 * @param {Object} 
 */
export async function getStudentList({ page = 1, limit = 10, key = '', sex = -1 } = {}) {
  let resp, res;
  if (key) {
    resp = await fetch(`/api/student/searchStudent?appkey=${appkey}&page=${page}&size=${limit}&search=${key}&sex=${sex}`)
  } else {
    resp = await fetch(`/api/student/findByPage?appkey=${appkey}&page=${page}&size=${limit}`)
  }
  res = (await resp.json()).data;
  if (key) {
    res.datas = res.searchList;
    delete res.searchList;
  } else {
    res.datas = res.findByPage;
    delete res.findByPage;
  }
  return res;
}