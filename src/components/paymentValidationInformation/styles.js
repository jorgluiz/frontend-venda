import styled from "styled-components";

export const Container = styled.div`
width: 50%;
display: flex;
flex-direction: column;

@media (max-width: 768px) {
    width: 100%;
}
`;

export const ContainerValidity = styled.div`
display: flex;
align-items: center;
height: 132px;
background-color: #ffefe6;
`;

export const H4 = styled.h4`
color: #ff6500;
margin-left: 15px;
`;

export const P = styled.p`
font-size: 12px;
/* width: 400px; */
color: #565c69;
margin-top: 20px;
`;

export const Strong = styled.strong`

color: #000;
`;