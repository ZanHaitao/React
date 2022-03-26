import React, { useEffect, useState } from "react";
import getStudentData from "./getStudentData.js";
import StudentList from "./StudentList";
import Pager from "../common/Pager";

export default function StudentConatainer() {
  const [students, setStudents] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    (async function () {
      const resp = await getStudentData(page, limit);
      setStudents(resp.findByPage);
      setTotal(resp.cont);
    })();
  }, [page, limit]);

  return (
    <div>
      <StudentList stus={students} />
      <Pager
        total={total}
        current={page}
        limit={limit}
        onPageChange={(newPage) => {
          setPage(newPage);
        }}
      />
      <p>
        每页显示条数：
        <input
          type="number"
          value={limit}
          onChange={(e) => {
            setLimit(e.target.value);
          }}
        />
      </p>
    </div>
  );
}
