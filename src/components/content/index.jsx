import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext"; // Importe o contexto de autenticação
import { useNavigate } from "react-router-dom";
import { StyledContainer } from './styles';

const Content = ({ children }) => {
   const { isAuthenticated, loading } = useContext(AuthContext); // Acessa os estados de autenticação
   const navigate = useNavigate();

   return (
      <StyledContainer>
         {children}
      </StyledContainer>
   );
};

export default Content;