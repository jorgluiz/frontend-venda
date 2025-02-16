import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StyledContainer } from "./styles";
// import { getPaymentStatusFromDatabaseCheckPayment } from "../../services/api";

const CourseList = () => {
   const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
   const navigate = useNavigate();

   // useEffect(() => {
   //    const userToken = localStorage.getItem("token");

   //    const userIsPaidValidate = async () => {
   //       if (!userToken) {
   //          // Redireciona para a página de login se não houver token
   //          navigate("/conecte-se");
   //          return;
   //       }

   //       try {
   //          const result = await getPaymentStatusFromDatabase(userToken);

   //          // Verifica se o pagamento foi realizado
   //          if (!result.paid || result.paid === "noPaid" || result.paid === null) {
   //             navigate("/pagamento");
   //          }
   //       } catch (error) {
   //          console.error("Erro ao verificar o status de pagamento:", error);
   //          navigate("/pagamento");
   //       } finally {
   //          setLoading(false); // Após a verificação, para o estado de carregamento
   //       }
   //    };

   //    userIsPaidValidate();
   // }, [navigate]);

   // Exibe um indicador de carregamento enquanto o status de pagamento está sendo verificado
   if (loading) return null; // Aguarda o carregamento

   return (
      <StyledContainer>
         <h1>Essa rota é privada, visível apenas para usuários assinantes.</h1>
      </StyledContainer>
   );
};

export default CourseList;


// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { StyledContainer } from "./styles";
// import { getPaymentStatusFromDatabase } from "../../services/api";

// const CourseList = () => {
//    const navigate = useNavigate(); // Correto para navegação programática

//    useEffect(() => {
//       const userToken = localStorage.getItem("token");

//       const userIsPaidValidate = async () => {
//          const result = await getPaymentStatusFromDatabase(userToken);
//          console.log(result);
//          if (result.paid === null) {
//             navigate("/pagamento");
//          }
//       };

//       userIsPaidValidate();
//    }, [navigate]);

//    return (
//       <StyledContainer>
//          <p>essa rota é privada</p>
//       </StyledContainer>
//    );
// };

// export default CourseList;