import PaymentConfirmation from "../../components/paymentConfirmation";
import GridLayout from "../../components/layout";
import Header from "../../components/header";
import Navbar from '../../components/hamburgerMenu';
import { StyledContainer } from "./styles";



const PagePaymentConfirmation = () => {
   return (
      <>
         {/* <Navbar></Navbar>
         <Header></Header> */}
         <GridLayout>
            <StyledContainer>
               <PaymentConfirmation></PaymentConfirmation>
            </StyledContainer>
         </GridLayout>
      </>
   );
};

export default PagePaymentConfirmation;