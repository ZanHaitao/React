import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { Route, Switch, withRouter } from "react-router-dom";
import Welcome from "./Welcome";
import StudetnList from "./student/StudetnList";
import StudentAdd from "./student/StudentAdd";
import StudentDetail from './student/StudentDetail'
import CourseList from "./course/CourseList";
import CourseAdd from "./course/CourseAdd";

const MenuRouter = withRouter(Menu);

export default function Admin() {
  return (
    <div>
      <Layout header={<Header />} aside={<MenuRouter />}>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/student" exact component={StudetnList} />
          <Route path="/student/add" exact component={StudentAdd} />
          <Route path="/student/:id" exact component={StudentDetail} />
          <Route path="/course" exact component={CourseList} />
          <Route path="/course/add" exact component={CourseAdd} />
        </Switch>
      </Layout>
    </div>
  );
}
