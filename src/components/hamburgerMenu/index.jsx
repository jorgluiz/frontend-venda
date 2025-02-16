import { useState, useContext } from "react";
import { Nav, Hamburger, Menu } from './styles';
import { Link } from "react-router-dom";
import { AuthContext } from '../../contexts/authContext';

const Navbar = () => {
   const { hasPaid, isAuthenticated } = useContext(AuthContext);
   const [open, setOpen] = useState(false);
   // Função que fecha o menu
   const closeMenu = () => setOpen(false);

   return (
      <Nav>
         <Hamburger onClick={() => setOpen(!open)} open={open}>
            <div />
            <div />
            <div />
         </Hamburger>
         <Menu open={open}>
            {
               hasPaid ? (
                  <Link onClick={closeMenu} to="/cursos-lista">Curso</Link>
               ) : (
                  <Link onClick={closeMenu} to="/pagamento">Assinatura</Link>
               )
            }
            {!isAuthenticated && (
               <>
                  <Link onClick={closeMenu} to="/users/sign_up">Cadastro</Link>
                  <Link onClick={closeMenu} to="/conecte-se">Entrar</Link>
               </>
            )}

            <Link onClick={closeMenu} to="/">Início</Link>
         </Menu>
      </Nav>
   );
};

export default Navbar;