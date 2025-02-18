import styled from "styled-components";

export const Section = styled.div`
display: grid;

grid-template:            
"header  header header" 100px /* rows */
"content content content" 1fr /* rows */ 
"footer  footer  footer" 60px / 60px 1fr 60px; /* rows */
/*columns columns columns */
height: 100vh;


@media (max-width: 768px) {
    grid-template:            /* rows */
    "header  header  header" minmax(40px, 5%) /* Garantia de altura mínima */
    "content content content" 1fr 
    "footer  footer  footer" minmax(60px, 15%);
}
`;
