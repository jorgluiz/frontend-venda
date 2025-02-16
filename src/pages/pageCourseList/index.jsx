import CourseList from "../../components/courseList";
import Header from "../../components/header";
import Navbar from '../../components/hamburgerMenu';
import { StyledCourse } from "./styles";
import GridLayout from "../../components/layout";

const PageCurso = () => {
   return (
      <GridLayout>
         <CourseList></CourseList>
      </GridLayout>
   );
};

export default PageCurso;