import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledContainer = styled.div`
width: 100%;
max-width: 900px;
height: 700px;
display: flex;
align-items: center;
justify-content: space-around;
border: 3px solid red;

/* @media (min-width: 700px) {
   width: 1152px;
} */

@media (max-width: 850px) {
  /* flex-wrap: wrap; */
  display: flex;
  flex-direction: column;
  height: auto;
}
`;

export const PaymentContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
max-width: 400px;
border-top: 1px solid #000;
`;

export const ContainerForm = styled.div`
width: 100%;
border: 1px solid #000;

@media (max-width: 760px) {
width: 100%;
}
`;

export const Form = styled.form`
display: flex;
flex-direction: column;

& label {
    margin-top: 20px;
}
`;


export const Input = styled.input`
background-color: #f5f5f5;
/* width: 500px; */
height: 43px; 

`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  width: 100%; /* Ocupa toda a largura do formulário */
`;

export const PrimaryButton = styled.button`
width: 100%;
height: 41px;
margin-top: 20px;
border-radius: 5px;
background-color: red;
color: #000;
cursor: pointer;
white-space: nowrap; /* Impede que o texto quebre para a próxima linha */
font-weight: 600;

&:hover {
   background-color: #cf0000;
   color: #ffb6b6;
}
`;

export const SecondaryButton = styled.button`
`;

export const H2 = styled.h2`
text-align: center;
`;

export const PricingSection = styled.div`
width: 100%;
max-width: 400px;
height: 521px;
border: 1px solid #000;

@media (max-width: 760px) {
/* width: 50%; */
width: 100%;
margin-bottom: 20px;
}
`;

export const TotalAmount = styled.div`
display: flex;
justify-content: space-between;
padding: 20px 0 20px 0;
border-top: 1px solid  rgb(54, 57, 77, 20%);
border-bottom: 1px solid  rgb(54, 57, 77, 20%);
`;

export const PaymentAccessSection = styled.div`
/* width: 100%;
max-width: 400px; */
margin-bottom: 20px;
/* width: 381px; */
/* border: 1px solid #000; */
`;

export const SpanTotal = styled.span`
font-weight: 600;
color: rgb(54, 57, 77);
`;

export const SpanBrl = styled.span`
font-size: 10px;
font-weight: 600;
color: rgb(54, 57, 77);
`;

export const Span01 = styled.span`

font-size: 14px;
line-height: 16px;
color: #6f7282;
`;