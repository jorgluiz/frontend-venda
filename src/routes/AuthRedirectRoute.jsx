import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/authContext';

// 2. Rota protegida com estado (AuthRedirectRouteSignIn):

// Esse método é mais apropriado para proteger múltiplas rotas em um nível mais alto da aplicação, garantindo que toda a navegação siga uma lógica centralizada.
// Usar rotas protegidas melhora a escalabilidade, já que você pode controlar várias rotas com a mesma lógica.

// Vantagem: Centraliza a lógica de proteção de rotas, tornando o código mais organizado e reutilizável em diferentes partes da aplicação.

// Conclusão: Para um projeto mais escalável e organizado, a abordagem de rotas protegidas usando estado é geralmente mais vantajosa.

// login
export const AuthRedirectRouteSignIn = ({ element }) => {
   const { isAuthenticated, loading } = useContext(AuthContext);

   if (loading) return null; // Aguarda o carregamento

   return isAuthenticated ? <Navigate to="/" /> : element;
};

// register
export const AuthRedirectRouteSignUp = ({ element }) => {
   const { isAuthenticated, loading } = useContext(AuthContext);

   if (loading) return null; // Aguarda o carregamento

   return isAuthenticated ? <Navigate to="/" /> : element;
};

// payment form
export const PrivateRoutePaymentForm = ({ element }) => {
   const { isAuthenticated, loading } = useContext(AuthContext);

   if (loading) return null; // Aguarda o carregamento

   // Se autenticado, renderiza o componente solicitado, caso contrário redireciona
   return isAuthenticated ? element : <Navigate to="/conecte-se" />;
};

// list course 
export const PrivateRouteCourseList = ({ element }) => {
   const { isAuthenticated, hasPaid, loading } = useContext(AuthContext);
   // console.log(isAuthenticated, "isAuthenticated");
   // console.log(hasPaid, "hasPaid");

   // Verifica se a autenticação está carregando
   if (loading) return null; // Aguarda o carregamento

   // O usuário precisa estar autenticado e ter pago
   return isAuthenticated && hasPaid ? element : <Navigate to="/pagamento" />;
};

export const PrivateRoutePaymentConfirmation = ({ element }) => {
   const { isAuthenticated, hasPaid, loading } = useContext(AuthContext);
   // console.log(isAuthenticated, "isAuthenticated");
   // console.log(hasPaid, "hasPaid");

   // Verifica se a autenticação está carregando
   if (loading) return null; // Aguarda o carregamento
   // O usuário precisa estar autenticado e ter pago
   return isAuthenticated ? element : <Navigate to="/conecte-se" />;
};

// prop-typesmódulo ou definir todos os tipos de prop para um determinado componente.
// AuthRedirectRouteSignIn.propTypes = {
//    children: PropTypes.node
// };

//   referencia: https://bobbyhadz.com/blog/react-eslint-error-missing-in-props-validation

// function MyComponent() {}

// MyComponent.propTypes = {
//   // Você pode declarar que um prop é um primitivo JS específico.
//   // Por padrão, todos são opcionais.
//   optionalArray: PropTypes.array,
//   optionalBigInt: PropTypes.bigint,
//   optionalBool: PropTypes.bool,
//   optionalFunc: PropTypes.func,
//   optionalNumber: PropTypes.number,
//   optionalObject: PropTypes.object,
//   optionalString: PropTypes.string,
//   optionalSymbol: PropTypes.symbol,
// }