import PaymentConfirmation from "../../components/paymentConfirmation";
import Header from "../../components/header";
import Navbar from '../../components/hamburgerMenu';
import { StyledContainer } from "./styles";



const PagePaymentConfirmation = () => {
   return (
      <>
         <Navbar></Navbar>
         <Header></Header>
         <StyledContainer>
            <PaymentConfirmation></PaymentConfirmation>
         </StyledContainer>
      </>
   );
};

export default PagePaymentConfirmation;