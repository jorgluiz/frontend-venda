import Header from '../../components/header';
import SignUpForm from "../../components/signupForm";
import { StyledsIngup } from './styles';
import Navbar from '../../components/hamburgerMenu';

const Signup = () => {
   return (
      <>
         <Navbar></Navbar>
         {/* <Header></Header> */}
         <StyledsIngup>
            <SignUpForm></SignUpForm>
         </StyledsIngup>
      </>
   );
};

export default Signup;