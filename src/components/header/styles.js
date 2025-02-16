import styled from "styled-components";

export const StyledContainer = styled.div`
grid-area: header;

height: 100px;
display: flex;
align-items: center;
justify-content: space-around; /* Alinha os itens à direita */
background-color: #333;
/* box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2), 0 4px 6px 0 rgba(0, 170, 255, 0.2); */
box-shadow: 4px 4px 6px 0 rgba(0, 0, 0, 0.2), 4px 4px 6px 0 rgba(0, 170, 255, 0.2);

& .nav-list {
    display: flex;
    justify-content: flex-end; /* Alinha os itens à direita */
}

& .nav-item {
    margin-left: 40px;
}
& .nav-item a {
    color: #f1f1f1;
}

@media (max-width: 768px) {
    display: none;
}
`;

export const Gradientspan = styled.span`
  background: linear-gradient(135deg, rgb(82, 255, 186) 9.27%, rgb(35, 250, 236) 46.96%, rgb(0, 170, 255) 88.5%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;

export const Img = styled.img`

`;

export const Button = styled.button`
background: none;
color: #f1f1f1;
font-size: 16px;
font-weight: 700;
font-family: Arial, Helvetica, sans-serif;
cursor: pointer;
`;