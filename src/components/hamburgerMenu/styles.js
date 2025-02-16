import styled from 'styled-components';

export const Nav = styled.nav`
  display: none; /* Escondido por padrão */
  justify-content: end;
  align-items: center;
  padding: 20px;
  background-color: #333;
  height: 44px;

  @media (max-width: 768px) {
    display: ${({ toggle }) => toggle === true ? "none" : "flex"}; /* Exibe o nav quando a largura for maior ou igual a 768px */
    grid-area: header;
  }
`;

export const Hamburger = styled.div`
  width: 30px;
  height: 25px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  cursor: pointer;
  z-index: 100;

  div {
    width: 100%;
    height: 3px;
    background: linear-gradient(135deg, rgb(82, 255, 186) 9.27%, rgb(35, 250, 236) 46.96%, rgb(0, 170, 255) 88.5%);
    border-radius: 5px;
    transition: all 0.3s ease;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg) translate(10px, 10px)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg) translate(5px, -5px)' : 'rotate(0)')};
    }
  }
`;

export const Menu = styled.div`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.95);
  justify-content: center;
  align-items: center;
  z-index: 10;

  a {
    background: linear-gradient(135deg, rgb(82, 255, 186) 9.27%, rgb(35, 250, 236) 46.96%, rgb(0, 170, 255) 88.5%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
    text-decoration: none;
    margin: 20px 0;
    font-size: 24px;
    transition: color 0.3s ease;

    &:hover {
      color: #ff6347;
    }
  }
`;
