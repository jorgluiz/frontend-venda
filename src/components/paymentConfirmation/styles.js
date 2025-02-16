import styled from "styled-components";

export const StyledContainer = styled.div`
width: 70%;
display: flex;
align-items: center;
flex-direction: column;
border: 3px solid red;

`;

export const H1 = styled.h1`

color: #2dc26e;
margin: 20px 0 20px 0;
`;

export const P01 = styled.p`

color: #7f858d;
font-size: 20px;
`;

export const Check = styled.div`

display: flex; 
align-items: center;
justify-content: center;
width: 100%;

@media (max-width: 760px) {
   display: flex;
   flex-direction: column;
}
`;

export const TitleH1 = styled.div`
margin-left: 20px;
`;

export const ButtonPrimary = styled.button`
font-size: 18px;
cursor: pointer;
background: transparent;
color: #ff6500;
font-weight: 600;
/* color: ; */

@media (max-width: 760px) {
border: 1px solid #ff6500;
width: 250px;
height: 40px;
}
`;

export const Container = styled.div`
width: 100%;
display: flex;
justify-content: space-evenly;


& img {
   /* box-shadow: 10px 10px 6px 0 rgba(0, 0, 0, 0.2), 4px 4px 6px 0 rgba(0, 170, 255, 0.2); */
   /* box-shadow: 0px 0px 10px 0 rgba(0, 0, 0, 0.5), 0px 0px 10px 0 rgba(0, 170, 255, 0.2); */
   box-shadow: 0px 0px 12px 0 rgba(0, 0, 0, 0.1), 0px 0px 8px 0 rgba(0, 170, 255, 0.15);


}

@media (max-width: 760px) {
   display: flex;
   flex-direction: column;
}
`;

export const ContainerPixQrCode = styled.div`

display: flex;
flex-direction: column;
align-items: center;

@media (max-width: 760px) {
   margin-bottom: 20px;
}
`;