const appkey = "15556677737_1585147447159";
export default async function (page, size) {
  const resp = await fetch(`/api/student/findByPage?appkey=${appkey}&page=${page}&size=${size}`)
  return (await resp.json()).data;
}