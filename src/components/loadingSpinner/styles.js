import styled from "styled-components";

// Estilos do Container principal
export const StyledContainer = styled.div`
   // seus estilos para o container
    display: 'flex';
    justify-content: 'center';
    align-items: 'center';
    height: '100vh';
`;

// Spinner de loading
export const LoadingSpinner = styled.div`
   border: 8px solid rgba(0, 0, 0, 0.1);
   border-top: 8px solid #3498db; /* Cor da borda superior */
   border-radius: 50%;
   width: 60px;
   height: 60px;
   animation: spin 1s linear infinite;

   @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
   }
`;
