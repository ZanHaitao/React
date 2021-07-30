import React, { useState, useEffect } from "react";
import "./index.scss";
import { getStudentList } from "../../../services/student";
import StudentSearchBar from "../../../components/StudentSearchBar";
import StudentTable from "../../../components/StudentTable";
import Pager from "../../../components/PageComp";
import qs from "query-string";

/**
 * 获取地址参数
 * @param {*} search
 * @returns
 */
function getQueryParams(search) {
  const defaultQuery = {
    page: 1,
    limit: 10,
    key: "",
    sex: -1,
  };
  const query = qs.parse(search);
  return {
    ...defaultQuery,
    ...query,
  };
}

/**
 * 设置location地址
 * @param {*} query
 * @param {*} history
 */
function setLocationInfo(query, history) {
  const pathname = qs.stringify(query);
  history.push(`?${pathname}`);
}

/**
 * 自定义HOOK获取数据
 * @param {*} query
 * @returns
 */
function useResp(query) {
  const [resp, setResp] = useState({});
  useEffect(() => {
    (async () => {
      const res = await getStudentList({
        page: query.page,
        limit: query.limit,
        key: query.key,
        sex: query.sex,
      });
      setResp(res);
    })();
  }, [query.page, query.limit, query.key, query.sex]);
  return resp;
}

/**
 * 自定义HOOK初始化location地址
 * @param {*} query
 * @param {*} history
 */
function useLocation(query, history) {
  useEffect(() => {
    setLocationInfo(query, history);
  }, []);
}

export default function StudentList(props) {
  const query = getQueryParams(props.location.search);
  useLocation(query, props.history);
  const resp = useResp(query);
  return (
    <div>
      <StudentSearchBar
        defaultVal={{ key: query.key, sex: +query.sex }}
        onSearch={(op) => {
          setLocationInfo(
            {
              ...query,
              ...op,
              page: 1,
            },
            props.history
          );
        }}
      />
      <StudentTable
        stus={resp.datas}
        enterDetail={(id) => {
          props.history.push("/student/" + id);
        }}
      />
      <Pager
        current={+query.page}
        total={resp.cont}
        limit={query.limit}
        onChangePage={(newPage) => {
          setLocationInfo(
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
