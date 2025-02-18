import { useState, useEffect } from "react";
import { StyledContainer, PaymentContainer, ContainerForm, Form, Input, PrimaryButton, H2, ButtonContainer, PricingSection, TotalAmount, PaymentAccessSection, SpanBrl, SpanTotal, Span01 } from './styles';
import artExtreme from '../../assets/images/artExtreme.jpg';
import { useNavigate } from "react-router-dom";
import PixIcon from '../iCons/pixIcon';
import LuckSecurity from "../iCons/luckSecurity";

import { formatPhoneNumber, validatePhone } from "../../utils/formatPhone";
import { validateCPF } from "../../utils/validateCPF";
import Pagarme from "../iCons/pagarme";
import { createPixTransaction } from "../../services/api";

const PaymentForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [document, setDocument] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(true); // Estado para controlar a renderização
  // const [userLogged, setUserLogged] = useState(false);
  const navigate = useNavigate();

  // Verifica se o usuário está logado
  // useEffect(() => {
  //    const token = localStorage.getItem('token'); // Exemplo: verificando se existe um token de autenticação
  //    if (!token) {
  //       navigate("/conecte-se"); // Redireciona para a página de login se o usuário não estiver logado
  //    } else {
  //       setLoading(false); // Se o usuário estiver logado, termina o carregamento
  //    }
  // }, [navigate]);

  const handlePhoneChange = async (value) => {
    setPhone(formatPhoneNumber(value)); // Use a função utilitária para formatar
  };

  // handleSubmit
  const handleSubmit = async (event) => {
    console.log("Formulário enviado");
    event.preventDefault();

    // Previne submit se não houver campos preenchidos
    if (!name || !email || !document || !phone) {
      return;
    }

    if (!validateCPF(document)) {
      alert('CPF inválido. Certifique-se de que o CPF está correto.');
      return;
    };

    if (!validatePhone(phone)) {
      alert('Número de telefone inválido. O formato correto é (DDD) 9XXXX-XXXX.');
      return;
    };

    try {
      const response = await createPixTransaction({ name, email, document, phone });
      console.log(response, 'createPixTransaction');
      // Redireciona para a página de confirmação e envia o response como state
      navigate("/confirmacao-pix-gerado", { state: { pix_qr_code_url: response.pix_qr_code_url, qr_code: response.qr_code, userID: response.userID } });
    } catch (error) {
      console.error('Erro ao criar transação PIX:', error);
    }

  };

  // if (loading) {
  //    return null; // Enquanto está carregando, não renderiza nada
  // }

  return (
    <>
      <StyledContainer>
        <PricingSection>
          <PaymentAccessSection>
            <img width="100%" src={artExtreme} alt="" />
            <h3> Crie conteúdo para redes sociais</h3>
          </PaymentAccessSection>
          <TotalAmount>
            <div>
              <SpanBrl>BRL</SpanBrl> <strong>R$1,00</strong>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyItems: "center" }}>
              <span style={{ marginRight: "10px" }}>Pix</span>
              <PixIcon></PixIcon>
            </div>
          </TotalAmount>
        </PricingSection>
        <PaymentContainer>
          <Pagarme></Pagarme>
          <ContainerForm>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "end" }}>
              <LuckSecurity /> <Span01>Protegido</Span01>
            </div>
            <Form onSubmit={handleSubmit}>
              <label>Nome *</label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nome"
                required
              />
              <label>E-mail *</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
              <label>CPF *</label>
              <Input
                type="text"
                value={document}
                onChange={(e) => setDocument(e.target.value)}
                placeholder="CPF"
                required
              />
              <label>TELEFONE *</label>
              <Input
                type="text"
                value={phone}
                onChange={(e) => handlePhoneChange(e.target.value)}
                placeholder="Telefone"
                required
              />
              <ButtonContainer>
                <PrimaryButton type="submit">Completar compra</PrimaryButton >
              </ButtonContainer>
            </Form>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "20px" }}>
              <LuckSecurity />
              <Span01>Todas as transações são seguras e criptografadas</Span01>
            </div>
          </ContainerForm>
        </PaymentContainer>
      </StyledContainer>
    </>
  );
};

export default PaymentForm;