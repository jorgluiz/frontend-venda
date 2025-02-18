import Content from '../content';
import Header from '../header';
import Footer from '../footer';
import HamburgerMenu from '../hamburgerMenu';
import { useContext, useEffect } from "react";
import { AuthContext } from '../../contexts/authContext';

import { Section } from './styles';

import { useNavigate } from "react-router-dom";

const GridLayout = ({ children }) => {
  const { hasPaid, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //    if (!children) {
  //       hasPaid ? navigate("/cursos-lista") : navigate("/pagamento");
  //    }
  // }, [hasPaid, navigate, children]);

  if (loading) return null; // Aguarda o carregamento

  return (
    <Section>
      <HamburgerMenu></HamburgerMenu>
      <Header />
      <Content>
        {children}
      </Content>
      <Footer />
    </Section>
  );
};

export default GridLayout;



{/* <Section>
<Gridareaheader>
    <Header />
</Gridareaheader>
<Gridareacontent>
    <Content />
</Gridareacontent>
<Gridareafooter>
    <Footer />
</Gridareafooter>
</Section> */}
