import { useContext, useState, useEffect } from 'react';
import { StyledContainer, Gradientspan, Img, Button } from './styles';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

import { AuthContext } from '../../contexts/authContext';

const Header = () => {
   const { isAuthenticated, hasPaid, logout } = useContext(AuthContext);
   console.log(!isAuthenticated, "isAuthenticated");
   const [isLoading, setIsLoading] = useState(true); // Estado de carregamento
   // console.log(hasPaid);

   // esse header é só visivel se caso "hasPaid(true)", enquanto o usuario não faz o login 
   // vai ser sempre "hasPaid(false)", quando login é feito, possa ser que seja true se pagou se não pagou
   // vai ser false. Por coincidencia o header não mostra na pagina de login (conectar) ou singup (registrar). O login e singup
   // ficou mais limpo, mostrando só componente login ou singup.

   // Simula o carregamento inicial até o valor de hasPaid ser definido
   useEffect(() => {
      if (hasPaid !== undefined) {
         setIsLoading(false); // Finaliza o carregamento quando hasPaid é definido
      }
   }, [hasPaid]);

   // Enquanto está carregando, mostra o loader
   if (isLoading) return null; // Aguarda o carregamento 

   return (
      <StyledContainer>
         <Img width="150px" height="150px" src={logo} alt="" onClick={() => logout()} style={{ cursor: "pointer" }} />
         <Gradientspan>Aprendar Ganhar dinheiro com redes sociais</Gradientspan>
         {/* renderização condicional na navegação */}
         <ul className="nav-list">
            {
               hasPaid ? (
                  <li className='nav-item'><Link to="/cursos-lista">CURSO</Link></li>
               ) : (
                  <li className='nav-item'><Link to="/pagamento">ASSINATURA</Link></li>
               )
            }
            <li className='nav-item'><Link to="/">INICIO</Link></li>
            {isAuthenticated && (
               <li className='nav-item'><Button onClick={() => logout()}>SAIR</Button></li>
            )}
            {/* Só exibe o "ENTRAR" se o usuário não estiver autenticado */}
            {!isAuthenticated && (
               <li className='nav-item'><Link to="/conecte-se">ENTRAR</Link></li>
            )}
         </ul>
      </StyledContainer>
   );
};

export default Header;