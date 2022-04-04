import React, { useEffect } from "react";
import StudentSearchBar from "../../../components/StudentSearchBar";
import StudentTable from "../../../components/StudentTable";
import Pager from "../../../components/common/Pager";
import { change } from "../../../store/action/student/searchCondition";
import { fetchDatas } from "../../../store/action/student/searchResult";
import { connect } from "react-redux";
import store from "../../../store";
import { push } from "connected-react-router";
import qs from "query-string";

/**
 * 映射 搜索框
 */
let mapStateToProps = (state) => {
  return {
    search: state.student.condition.key,
    sex: +state.student.condition.sex,
  };
};
let mapDispatchToProps = (dispatch) => ({
  onSearch: (search) => {
    dispatch(
      change({
        ...search,
        page: 1,
      })
    );
    dispatch(push("?" + changeLocation(store.getState().student.condition)));
  },
});
const SearchBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentSearchBar);

/**
 * 映射 表格
 */
mapStateToProps = (state) => ({
  stus: state.student.result.datas,
});
const StuTable = connect(mapStateToProps)(StudentTable);

/**
 * 映射 分页组件
 */
mapStateToProps = (state) => ({
  current: +state.student.condition.page,
  total: state.student.result.total,
  limit: +state.student.condition.limit,
});
mapDispatchToProps = (dispatch) => ({
  onPageChange: (newPage) => {
    dispatch(change({ page: newPage }));
    dispatch(push("?" + changeLocation(store.getState().student.condition)));
  },
});
const PagerContainer = connect(mapStateToProps, mapDispatchToProps)(Pager);

/**
 * 导出组件
 * @returns
 */
export default function Student() {
  const query = store.getState().router.location.query;
  useEffect(() => {
    if (JSON.stringify(query) === "{}") {
      store.dispatch(
        push("?" + changeLocation(store.getState().student.condition))
      );
    } else {
      store.dispatch(change(query));
    }
  });
  store.dispatch(fetchDatas());
  return (
    <div>
      <SearchBar />
      <StuTable />
      <PagerContainer />
    </div>
  );
}

function changeLocation(query) {
  const search = qs.stringify(query);
  return search;
}
