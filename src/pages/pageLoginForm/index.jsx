import Header from '../../components/header';
import LoginForm from '../../components/loginForm';
import Navbar from '../../components/hamburgerMenu';
import { StyledLogin } from './styles';

const Login = () => {
   return (
      <>
         <Navbar></Navbar>
         {/* <Header></Header> */}
         <StyledLogin>
            <LoginForm></LoginForm>
         </StyledLogin>
      </>
   );
};

export default Login;