import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { StyledContainer, H1, P01, Check, TitleH1, ButtonPrimary, ContainerPixQrCode, Container } from "./styles";
import ValidityInfo from "../paymentValidationInformation";
import CheckCircle from "../iCons/checkCircle";
import { getPaymentStatusFromDatabaseCheckPayment } from "../../services/api";
import { AuthContext } from '../../contexts/authContext';

import { io } from 'socket.io-client';

const PaymentConfirmation = () => {
  const [copySuccess, setCopySuccess] = useState(""); // Estado para mostrar mensagem de sucesso
  const location = useLocation();
  const navigate = useNavigate();
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const { user, setHasPaid } = useContext(AuthContext);

  // Armazena os dados do location.state no estado local apenas na primeira renderização
  // obs: esses dados vem da criação do pix component ( paymentForm )
  const [displayData] = useState(() => location.state || {});
  const { pix_qr_code_url, qr_code, userID } = displayData;

  // Após a primeira renderização, limpa o location.state para que não fique disponível em futuros refresh
  useEffect(() => {
    if (location.state) {
      const timer = setTimeout(() => {
        navigate(location.pathname, { replace: true, state: null });
      }, 5000); // Aguarda 100ms para garantir que a renderização inicial ocorra
      return () => clearTimeout(timer);
    }
  }, [location, navigate]);

  useEffect(() => {
    const userToken = localStorage.getItem("token");
    // console.log(userToken, "userToken");

    // Conecta ao servidor WebSocket com reconexão automática
    const socket = io('https://backend-venda.up.railway.app', {
      transports: ['websocket'],
      reconnection: true,           // Habilita reconexão automática
      reconnectionAttempts: 10,      // Tenta reconectar 10 vezes
      reconnectionDelay: 1000,      // Delay entre as tentativas de reconexão (1 segundo)
      // auth: { token: userToken }, // Envia o token como autenticação, obter no backend io.on('connection', (socket) => 
    });

    socket.emit('joinRoom', userID);

    // Escuta por atualizações de pagamento via WebSocket
    socket.on('paymentUpdate', async (data) => {
      console.log('Pagamento atualizado via WebSocket:', data); // Log para verificar os dados recebidos
      if (data.status === 'paid') {

        // Requisição ao backend para buscar o status de pagamento
        const paymentStatus = await getPaymentStatusFromDatabaseCheckPayment(userToken);
        // console.log(paymentStatus.paid, "useEffect PixPaymentConfirmation");

        if (paymentStatus.paid === "paid") {
          localStorage.setItem("status", paymentStatus.paid);
          setHasPaid(true); // Atualiza o contexto com o status de pagamento
          setPaymentConfirmed(true);
        }
      }
    });

    // Cleanup ao desmontar o componente
    return () => socket.disconnect();
  }, []);

  const copyToClipboard = () => {
    if (qr_code) {
      navigator.clipboard.writeText(qr_code).then(() => {
        setCopySuccess("Código copiado com sucesso!");
      }).catch(() => {
        setCopySuccess("Falha ao copiar o código.");
      });
    }
  };


  // Se os dados não estiverem disponíveis, mostra uma mensagem
  // obs: o user.id que vem de contexts tem que ser mesmo que vem como response.userID da criação do pix. Component ( paymentForm )
  // if (!pix_qr_code_url || !qr_code || user.id != userID) {}
  if (!pix_qr_code_url || !qr_code) {
    return (
      <StyledContainer>
        <H1>QR Code expirado</H1>
        <P01>
          O QR Code não está mais disponível. Para realizar o pagamento, gere um novo Pix.
        </P01>
        <ButtonPrimary onClick={() => navigate("/gerar-pix")}>
          Gerar Novo Pix
        </ButtonPrimary>
      </StyledContainer>
    );
  }

  return (
    <StyledContainer>
      <Check>
        {paymentConfirmed && (
          <CheckCircle></CheckCircle>
        )}
        <TitleH1>
          {paymentConfirmed ? (
            <>
              <H1>Pedido realizado com sucesso!</H1>
            </>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "20px 0 20px 0" }}>
              <div>Aguardando confirmação...</div>
              <P01>Agora é só realizar o pagamento</P01>
            </div>
          )}
        </TitleH1>
      </Check>
      <Container>
        <ContainerPixQrCode >
          {pix_qr_code_url && (
            <div>
              <img
                src={pix_qr_code_url}
                alt="QR Code para pagamento PIX"
              />
            </div>
          )}
          <br />
          <div>
            <ButtonPrimary onClick={copyToClipboard}>COPIAR CÓDIGO PIX</ButtonPrimary>
          </div>
          {copySuccess && (
            <div style={{ marginTop: "10px", color: "green", fontSize: "12px" }}>
              {copySuccess}
            </div>
          )}
        </ContainerPixQrCode>
        <ValidityInfo></ValidityInfo>
      </Container>
    </StyledContainer>
  );
};

export default PaymentConfirmation;


// import { useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { StyledContainer, H1, P01, Check, TitleH1, ButtonPrimary, ContainerPixQrCode, Container } from "./styles";
// import ValidityInfo from "../validityInfo";
// import CheckCircle from "../iCons/checkCircle";

// import io from 'socket.io-client';


// const PixPaymentConfirmation = () => {
//    const [copySuccess, setCopySuccess] = useState(""); // Estado para mostrar mensagem de sucesso
//    const location = useLocation();
//    const { pix_qr_code_url, qr_code } = location.state || {}; // Recupera o qrCode do state
//    const [paymentConfirmed, setPaymentConfirmed] = useState(false);
//    const socket = io.connect('http://localhost:3000'); // Conecta ao servidor WebSocket

//    useEffect(() => {
//       // Escuta por atualizações de pagamento via WebSocket
//       socket.on('paymentUpdate', (data) => {
//          console.log('Pagamento atualizado via WebSocket:', data); // Log para verificar os dados recebidos
//          if (data.status === 'paid') {
//             setPaymentConfirmed(true);
//          }
//       });

//       // Cleanup ao desmontar o componente
//       return () => socket.disconnect();
//    }, [socket]);

//    const copyToClipboard = () => {
//       if (qr_code) {
//          navigator.clipboard.writeText(qr_code).then(() => {
//             setCopySuccess("Código copiado com sucesso!");
//          }).catch(() => {
//             setCopySuccess("Falha ao copiar o código.");
//          });
//       }
//    };

//    return (
//       <StyledContainer>
//          <Check>
//             <CheckCircle></CheckCircle>
//             <TitleH1>
//                <H1>Pedido realizado com sucesso!</H1>
//                <P01>Agora é só realizar o pagamento</P01>
//                {paymentConfirmed ? <div>Pagamento confirmado!</div> : <div>Aguardando confirmação...</div>}
//             </TitleH1>
//          </Check>
//          <Container>
//             <ContainerPixQrCode >
//                {pix_qr_code_url && (
//                   <div>
//                      <img
//                         src={pix_qr_code_url}
//                         alt="QR Code para pagamento PIX"
//                      />
//                   </div>
//                )}
//                <br />
//                <div>
//                   <ButtonPrimary onClick={copyToClipboard}>COPIAR CÓDIGO PIX</ButtonPrimary>
//                </div>
//                {copySuccess && (
//                   <div style={{ marginTop: "10px", color: "green", fontSize: "12px" }}>
//                      {copySuccess}
//                   </div>
//                )}
//             </ContainerPixQrCode>
//             <ValidityInfo></ValidityInfo>
//          </Container>
//       </StyledContainer>
//    );
// };

// export default PixPaymentConfirmation;