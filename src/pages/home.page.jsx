import React from "react";
import { Helmet } from "react-helmet";
import FacultyDashboardComp from "../components/faculty/dashboard.comp";
import FacultyComp from "../components/faculty/projects.comp";
import StudentComp from "../components/student/student.comp";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>SRM HUB | Home</title>
      </Helmet>
      <FacultyDashboardComp />
    </>
  );
}

export default HomePage;
