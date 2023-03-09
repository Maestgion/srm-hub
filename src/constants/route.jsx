import Cookies from "js-cookie";
import ClubStudentsComp from "../components/club/clubstudents.comp";
import FacultyComp from "../components/faculty/dashboard.comp";
import FacultyStudentsComp from "../components/faculty/fstudents.comp";
import FacultyProjectsComp from "../components/faculty/projects.comp";
import FacultyResearchComp from "../components/faculty/research.comp";
import HomeComp from "../components/home/home.comp";
import Onboarding from "../components/onboarding/studentOnboarding";
import StudentComp from "../components/student/student.comp";
import LoginPage from "../pages/login.page";
import SignupPage from "../pages/signup.Page";
const userType = Cookies.get("user")

export const PRIVATE_ROUTES = [
  {
    path: "/dashboard",
    component: userType == "faculty" ? <FacultyComp /> : userType == "student" ? <StudentComp /> : <ClubStudentsComp />,
  },
  {
    path: "/facStud",
    component: <FacultyStudentsComp />
  },
  {
    path: "/facproj",
    component: <FacultyProjectsComp />
  },
  {
    path: "/facppr",
    component: <FacultyResearchComp />
  }
];
export const PUBLIC_ROUTES = [
  {
    path: "/login",
    component: <LoginPage />,
  },
  {
    path: "/signup",
    component: <SignupPage />,
  },
  {
    path: "/onboarding",
    component: <Onboarding />,
  },
];
