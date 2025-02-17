import styled from "styled-components";

export const StyledContainer = styled.div`
/* grid-area: content; */

`;

export const SubContainer = styled.div`

& video {
    width: 200px;
    height: 350;
    background-color: #333;
}

@media (max-width: 768px) {
    & video {
        width: 300px;
        height: 200px;
    }
}

@media (max-width: 500px) {
    & video {
        width: 100vw;
        height: 200px;
    }
}
`;