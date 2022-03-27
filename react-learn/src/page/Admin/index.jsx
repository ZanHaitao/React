import React from "react";
import { Route } from "react-router-dom";
import Layout from "../../layout";
import Header from "../../components/Header";
import Aside from "../../components/Aside";
import Welcome from "../Welcome";
import Students from "../student/Students";
import StudentsAdd from "../student/StudentsAdd";
import Courses from "../course/Courses";
import CoursesAdd from "../course/CoursesAdd";

export default function Admin() {
  return (
    <Layout header={<Header />} aside={<Aside />}>
      <>
        <Route path="/" exact component={Welcome} />
        <Route path="/students" exact component={Students} />
        <Route path="/students/add" exact component={StudentsAdd} />
        <Route path="/courses" exact component={Courses} />
        <Route path="/courses/add" exact component={CoursesAdd} />
      </>
    </Layout>
  );
}
