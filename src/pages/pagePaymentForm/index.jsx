import GridLayout from "../../components/layout";
import PaymentForm from "../../components/paymentForm";
import Header from "../../components/header";
import { StyledPayment } from "./styles";
import Navbar from '../../components/hamburgerMenu';

const PaymentService = () => {
   return (
      <>
         {/* <Navbar></Navbar>
         <Header></Header> */}
         <GridLayout>
            <StyledPayment>
               <PaymentForm />
            </StyledPayment>
         </GridLayout>
      </>
   );
};

export default PaymentService;