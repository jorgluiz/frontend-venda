import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, getPaymentStatusFromDatabaseCheckPayment } from "../../services/api";
import { jwtDecode } from "jwt-decode";

// Cria um contexto de autenticação para compartilhar o estado entre os componentes
export const AuthContext = createContext();

/**
 * Componente AuthProvider
 * 
 * Este componente gerencia o estado global relacionado à autenticação e pagamento.
 * Ele fornece funções e estados como `signin`, `logout`, `isAuthenticated` e `hasPaid`
 * para serem usados em toda a aplicação.
 * 
 * @param {object} props.children - Os componentes filhos que terão acesso ao contexto.
 */
export const AuthProvider = ({ children }) => {
   // Estado para verificar se o usuário está autenticado
   const [isAuthenticated, setIsAuthenticated] = useState(false);

   // Estado para verificar se o usuário já realizou o pagamento
   const [hasPaid, setHasPaid] = useState(false);

   // Função para navegação programática entre as rotas
   const navigate = useNavigate();

   // Estado de carregamento para garantir que a lógica de autenticação seja executada antes do render
   const [loading, setLoading] = useState(true);

   /**
    * useEffect
    * 
    * Verifica o token JWT armazenado no localStorage quando o componente é montado.
    * Atualiza os estados `isAuthenticated` e `hasPaid` com base nas informações do token e status de pagamento.
    * Redireciona o usuário para a página de login se o token for inválido ou estiver expirado.
    */
   useEffect(() => {
      const userToken = localStorage.getItem("token");
      const paymentStatus = localStorage.getItem("status"); // Status de pagamento salvo no localStorage

      if (paymentStatus === "paid") {
         setHasPaid(true); // Define o estado de pagamento como verdadeiro
      }

      if (!userToken) {
         // Se o token não existir, considera o usuário como não autenticado
         setIsAuthenticated(false);
         setHasPaid(false);
         setLoading(false);
         return;
      }

      try {
         // Decodifica o token JWT para verificar sua validade
         const decodedToken = jwtDecode(userToken);
         const currentTime = Date.now() / 1000; // Tempo atual em segundos

         if (decodedToken.exp < currentTime) {
            // Token expirado
            localStorage.removeItem("token"); // Remove o token expirado
            setIsAuthenticated(false);
            setHasPaid(false);
            navigate("/conecte-se"); // Redireciona para a página de login
         } else {
            // Token válido
            setIsAuthenticated(true);
         }
      } catch (error) {
         // Erro na decodificação do token
         console.error("Erro ao decodificar o token:", error);
         localStorage.removeItem("token");
         setIsAuthenticated(false);
         setHasPaid(false);
         navigate("/conecte-se");
      }

      setLoading(false); // Finaliza o estado de carregamento
   }, [navigate]);

   /**
    * signin
    * 
    * Realiza o login do usuário, salvando o token no localStorage e atualizando o contexto global.
    * Também faz uma chamada ao backend para verificar o status de pagamento do usuário.
    * 
    * @param {object} userToken - Token do usuário obtido após autenticação.
    */
   const signinContexts = async ({ userToken }) => {
      console.error(userToken, 'Error Error Error');
      try {
         // Verificações lógicas como userToken.error não geram exceções; são apenas comparações de valores no objeto.
         // Verifica se userToken.error existe e se possui a propriedade status
         if (userToken?.error?.status === 429) {
            return alert('Muitas tentativas de login. Por favor, tente novamente mais tarde.');
         }

         // Verificações lógicas como userToken.error não geram exceções; são apenas comparações de valores no objeto.
         // Verifica se userToken.error existe e se possui a propriedade status
         if (userToken?.error === "Invalid email or password") {
            setIsAuthenticated(false);
            return;
         }

         localStorage.setItem("token", userToken); // Salva o token no localStorage
         setIsAuthenticated(true);

         // Verifica o status de pagamento no backend
         const paymentStatus = await getPaymentStatusFromDatabaseCheckPayment(userToken);
         console.log(paymentStatus, "paymentStatus");

         if (paymentStatus.paid === "paid") {
            localStorage.setItem("status", paymentStatus.paid); // Salva o status no localStorage
            setHasPaid(true); // Atualiza o contexto com o status de pagamento
         }
         navigate('/'); // Redireciona para a página inicial
      } catch (error) {
         if (error.status === 404) {
            console.log("Recurso não encontrado:", error.message);
         } else {
            console.error("Erro inesperado:", error.message);
         }
      }
   };

   /**
    * logout
    * 
    * Faz o logout do usuário, removendo o token e o status de pagamento do localStorage.
    * Atualiza o contexto global e redireciona para a página de login.
    */
   const logout = () => {
      localStorage.removeItem("token"); // Remove o token do localStorage
      localStorage.removeItem("status"); // Remove o status de pagamento do localStorage
      setIsAuthenticated(false); // Atualiza o estado de autenticação
      setHasPaid(false); // Reseta o status de pagamento
      navigate("/conecte-se"); // Redireciona para a página de login
   };

   // Provedor do contexto que compartilha estados e funções para os componentes filhos
   return (
      <AuthContext.Provider
         value={{
            isAuthenticated, // Indica se o usuário está autenticado
            hasPaid,         // Indica se o usuário realizou o pagamento
            loading,         // Estado de carregamento
            signinContexts,          // Função para login
            logout,          // Função para logout
            setHasPaid       // Atualiza manualmente o status de pagamento
         }}>
         {children}
      </AuthContext.Provider>
   );
};
