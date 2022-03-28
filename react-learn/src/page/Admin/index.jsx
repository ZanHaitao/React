import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Aside from "../../components/Aside";
import Welcome from "../Welcome";
import Students from "../student/Students";
import StudentsAdd from "../student/StudentsAdd";
import Courses from "../course/Courses";
import CoursesAdd from "../course/CoursesAdd";
import StudentDetail from "../student/StudentDetail";

export default function Admin() {
  return (
    <Layout header={<Header />} aside={<Aside />}>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/students" exact component={Students} />
        <Route path="/students/add" exact component={StudentsAdd} />
        <Route path="/students/:sno" exact component={StudentDetail} />
        <Route path="/courses" exact component={Courses} />
        <Route path="/courses/add" exact component={CoursesAdd} />
      </Switch>
    </Layout>
  );
}
