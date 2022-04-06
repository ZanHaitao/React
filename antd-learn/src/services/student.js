const appkey = "15556677737_1585147447159";

/**
 * 分页获取数据
 * @param {*} param0 
 */
export async function getStudentDataFindByPage({
  page = 1,
  limit = 10,
  sex = -1,
  key = "",
} = {}) {
  let result
  if (key === "") {
    const resp = (await fetch(`/api/student/findByPage?page=${page}&size=${limit}&appkey=${appkey}`).then(resp => resp.json())).data;
    result = {
      count: resp.cont,
      datas: resp.findByPage
    }
  } else {
    const resp = (await fetch(`/api/student/searchStudent?page=${page}&size=${limit}&sex=${sex}&search=${key}&appkey=${appkey}`).then(resp => resp.json())).data;
    result = {
      count: resp.cont,
      datas: resp.searchList
    }
  }
  return result;
}

export async function getStudentDataAll() {
  return (await fetch(`/api/student/findAll?appkey=${appkey}`).then(resp => resp.json())).data
}