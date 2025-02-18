import GridLayout from "../../components/layout";
import PaymentForm from "../../components/paymentForm";
import Header from "../../components/header";
import Navbar from '../../components/hamburgerMenu';
import { StyledPayment } from "./styles";

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