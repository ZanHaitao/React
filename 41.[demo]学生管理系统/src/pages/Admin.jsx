import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { Route, Switch } from "react-router-dom";
import Welcome from "./Welcome";
import StudetnList from "./StudetnList";
import StudentAdd from "./StudentAdd";
import CourseList from "./CourseList";
import CourseAdd from "./CourseAdd";

export default function Admin() {
  return (
    <div>
      <Layout header={<Header />} aside={<Menu />}>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/student" exact component={StudetnList} />
          <Route path="/student/add" exact component={StudentAdd} />
          <Route path="/course" exact component={CourseList} />
          <Route path="/course/add" exact component={CourseAdd} />
        </Switch>
      </Layout>
    </div>
  );
}
