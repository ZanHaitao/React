import React, { useEffect, useState } from "react";
// import getStudentData from "./getStudentData.js";
import StudentList from "./StudentList";
import Pager from "../common/Pager";
import useGetStudent from "../myHook/useGetStudent";

export default function StudentConatainer() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const resp = useGetStudent(page, limit);
  if (resp) {
    const students = resp.findByPage;
    const total = resp.cont;
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
  return null;
}
