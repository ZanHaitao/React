import React, { useState, useEffect } from "react";
import StudentSearchBar from "../../../components/StudentSearchBar";
import StudentTable from "../../../components/StudentTable";
import Pager from "../../../components/common/Pager";
import { getStudentDataFindByPage } from "../../../services/student";
import qs from "query-string";

function getQuery(search) {
  let query = qs.parse(search);
  query = Object.assign(
    {
      page: 1,
      sex: -1,
      key: "",
      limit: 10,
    },
    query
  );
  query.page = +query.page;
  query.limit = +query.limit;
  query.sex = +query.sex;
  return query;
}

/**
 * 通过query 获取数据
 * @param {*} query
 * @returns
 */
function useResp(query) {
  const [resp, setResp] = useState({
    count: 0,
    datas: [],
  });

  useEffect(() => {
    getStudentDataFindByPage({
      page: query.page,
      limit: query.limit,
      sex: query.sex,
      key: query.key,
    }).then((resp) => {
      setResp(resp);
    });
  }, [query.page, query.limit, query.sex, query.key]);
  return resp;
}

function changeLocation(query, history) {
  const search = qs.stringify(query);
  history.push("?" + search);
}

export default function Students(props) {
  const query = getQuery(props.location.search);
  const resp = useResp(query);
  return (
    <div>
      <StudentSearchBar
        search={query.key}
        sex={query.sex}
        onSearch={(search) => {
          if (search.key === "") {
            changeLocation(
              {
                ...query,
                page: 1,
                key: "",
                sex: -1,
              },
              props.history
            );
          } else {
            changeLocation(
              {
                ...query,
                page: 1,
                key: search.key,
                sex: search.sex,
              },
              props.history
            );
          }
        }}
      />
      <StudentTable stus={resp.datas} />
      <Pager
        total={resp.count}
        current={query.page}
        limit={query.limit}
        onPageChange={(newPage) => {
          changeLocation(
            {
              ...query,
              page: newPage,
            },
            props.history
          );
        }}
      />
    </div>
  );
}
