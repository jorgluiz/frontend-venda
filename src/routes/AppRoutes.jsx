import { Routes, Route } from "react-router-dom";
import GridLayout from '../components/layout';
import NotFoundPage from "../pages/notFoundPage";
import Login from "../pages/pageLoginForm";
import Signup from "../pages/pageSignUpForm";
import PaymentService from "../pages/pagePaymentForm";
import PageCourseList from "../pages/pageCourseList";
import Navbar from "../components/hamburgerMenu";
import PaymentConfirmation from "../pages/pagePaymentConfirmation";

import Home from "../pages/pageHome";

import { PrivateRouteCourseList, PrivateRoutePaymentForm, AuthRedirectRouteSignIn, AuthRedirectRouteSignUp, PrivateRoutePaymentConfirmation } from "./AuthRedirectRoute";

const AppRoutes = () => {
   return (
      <Routes>
         {/* Página acessível por qualquer usuário */}
         <Route path="/" element={<GridLayout> <Home /> </GridLayout>} />

         {/* Página 404 e outras páginas públicas */}
         <Route path="nav" element={<Navbar />} />
         <Route path="confirmacao-pagamento" element={<PrivateRoutePaymentConfirmation element={<PaymentConfirmation />} />} />
         <Route path="*" element={<NotFoundPage />} />

         {/* Bloquear login e cadastro para usuários autenticados */}
         <Route path="conecte-se" element={<AuthRedirectRouteSignIn element={<Login />} />} />
         <Route path="users/sign_up" element={<AuthRedirectRouteSignUp element={<Signup />} />} />

         {/* Rotas privadas (só para usuários autenticados) */}
         <Route path="pagamento" element={<PrivateRoutePaymentForm element={<PaymentService />} />} />
         <Route path="cursos-lista" element={<PrivateRouteCourseList element={<PageCourseList />} />} />
      </Routes>
   );
};

export default AppRoutes;


// // sistema de rotas faz chaveamento entra as páginas, em função da URL
// import { Routes, Route } from "react-router-dom";
// import GridLayout from '../components/layout';
// import NotFoundPage from "../pages/notFoundPage";
// import Login from "../pages/pageLoginForm";
// import Signup from "../pages/pageSignUpForm";
// import PaymentService from "../pages/pagePaymentForm";
// import PageCourseList from "../pages/pageCourseList";
// import Navbar from "../components/hamburgerMenu";
// import PaymentConfirmation from "../pages/pagePaymentConfirmation";

// // import PrivateRoute from "./PrivateRoute";
// import { PrivateRouteCourseList, PrivateRoutePaymentForm, AuthRedirectRouteSignIn, AuthRedirectRouteSignUp } from "./AuthRedirectRoute";
// // import { AuthRedirectRouteSignUp } from "./AuthRedirectRoute";

// const AppRoutes = () => {
//    return (
//       <Routes>
//          <Route path="/" element={<GridLayout />} />
//          <Route path="nav" element={<Navbar />} />  {/* Página 404 */}
//          <Route path="confirmacao-pagamento" element={<PaymentConfirmation />} />  {/* Página 404 */}
//          {/* <Route path="conecte-se" element={<Login />} /> */}
//          {/* <Route path="users/sign_up" element={<Signup />} /> */}
//          <Route path="*" element={<NotFoundPage />} />  {/* Página 404 */}
//          <Route path="conecte-se" element={<AuthRedirectRouteSignIn element={<Login />} />} />
//          <Route path="users/sign_up" element={<AuthRedirectRouteSignUp element={<Signup />} />} />
//          {/* <Route path="pagamento" element={<PaymentService />}></Route> */}
//          {/* Rotas privadas */}
//          <Route path="pagamento" element={<PrivateRoutePaymentForm element={<PaymentService />} />} />
//          <Route path="cursos-lista" element={<PrivateRouteCourseList element={<PageCourseList />} />} />
//       </Routes>
//    );
// };

// export default AppRoutes;