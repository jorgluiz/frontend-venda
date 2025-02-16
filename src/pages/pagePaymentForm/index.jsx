import PaymentForm from "../../components/paymentForm";
import Header from "../../components/header";
import { StyledPayment } from "./styles";
import Navbar from '../../components/hamburgerMenu';

const PaymentService = () => {
   return (
      <>
         <Navbar></Navbar>
         <Header></Header>
         <StyledPayment>
            <PaymentForm />
         </StyledPayment>
      </>
   );
};

export default PaymentService;