import Header from '../../components/header';
import SignUpForm from "../../components/signupForm";
import { StyledsIngup } from './styles';
import HamburgerMenu from '../../components/hamburgerMenu';

const Signup = () => {
  return (
    <>
      <HamburgerMenu></HamburgerMenu>
      {/* <Header></Header> */}
      <StyledsIngup>
        <SignUpForm></SignUpForm>
      </StyledsIngup>
    </>
  );
};

export default Signup;