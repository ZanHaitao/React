import qs from "query-string"
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

/**
 * 获取全部数据
 * @returns 
 */
export async function getStudentDataAll() {
  return (await fetch(`/api/student/findAll?appkey=${appkey}`).then(resp => resp.json())).data
}

/**
 * 添加学生
 * @param {*} data 
 * @returns 
 */
export async function addStudent(data) {
  const query = qs.stringify(data);
  return await fetch(`/api/student/addStudent?appkey=${appkey}&${query}`).then(resp => resp.json())
}

/**
 * 修改学生
 * @param {*} data 
 * @returns 
 */
export async function updateStudent(data) {
  const query = qs.stringify(data);
  return await fetch(`/api/student/updateStudent?appkey=${appkey}&${query}`).then(resp => resp.json())
}

/**
 * 通过学号查询学生信息
 * @param {*} sNo 
 * @returns 
 */
export async function findStudnetById(sNo) {
  const resp = await getStudentDataAll();
  return resp.find(it => it.sNo === sNo);
}