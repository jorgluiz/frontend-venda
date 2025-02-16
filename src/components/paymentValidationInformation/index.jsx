import TimeIcon from "../iCons/timeIcon";
import { ContainerValidity, H4, Container, P, Strong } from "./styles";

const ValidityInfo = () => {
   return (
      <Container>
         <ContainerValidity>
            <TimeIcon></TimeIcon>
            <H4>Aproveite! Este código tem validade de 12 horas.</H4>
         </ContainerValidity>
         <P>Escaneie o <Strong>QR Code</Strong> ou copie o <Strong>código PIX</Strong>. Abra o APP da instituição que você possui o PIX cadastrado e realize o pagamento.</P>
      </Container>
   );
};

export default ValidityInfo;