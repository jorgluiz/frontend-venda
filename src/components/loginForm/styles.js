import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledContainer = styled.div`
width: 90%;
height: 700px;
display: flex;
align-items: center;
justify-content: center;

@media (min-width: 700px) {
   width: 1152px;
}
`;

export const ContainerForm = styled.div`
width: 50%;
border: 1px solid #000;

@media (max-width: 600px) {
    width: 100%;  // Novo tamanho para telas menores que 550px
    & label {
        font-size: 20px;
    }
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
border: ${({ toggleEmail, togglePassword }) => toggleEmail || togglePassword ? "solid 1px red" : ""};
`;

export const PrimaryButton = styled.button`
width: 74px;
height: 41px;
margin-top: 20px;
border-radius: 20px;
background-color: red;
color: #f1f1f1;
cursor: pointer;
`;

export const SecondaryButton = styled.button`
`;

export const H2 = styled.h2`
text-align: center;
`;

export const LinkSignup = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 20px;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;