import { useState, useContext } from 'react';
import { StyledContainer, ContainerForm, Form, Input, PrimaryButton, H2, LinkSignup } from './styles';
import { AuthContext } from '../../contexts/authContext';
import { loginUser } from '../../services/api';
import { isValidEmail } from '../../utils/formatEmail';
import { isValidPassword } from '../../utils/formatPassword';

const LoginForm = () => {
   const { signinContexts } = useContext(AuthContext);
   const [email, setEmail] = useState('');
   console.log(email);
   const [password, setPassword] = useState('');
   console.log(password);
   const [errorFields, setErrorFields] = useState({
      email: '',
      password: '',
      message: '',
   });

   const handleLoginResponse = (authResponse) => {
      if (authResponse.message === 'user does not exist') {
         setErrorFields((prev) => ({ ...prev, email: 'Essa conta não existe.' }));
         return false;
      }
      if (authResponse.message === 'blocked user') {
         setErrorFields((prev) => ({ ...prev, email: 'Usuário bloqueado.' }));
         return false;
      }
      if (authResponse.error === 'Invalid email or password') {
         setErrorFields((prev) => ({ ...prev, password: 'Email ou senha inválidos.' }));
         return false;
      }
      if (authResponse.error === 'Request failed with status code 429') {
         setErrorFields((prev) => ({ ...prev, email: 'Usuário bloqueado após múltiplas tentativas!' }));
         return false;
      }
      return true;
   };

   // essa validação é do frontend
   const validateForm = () => {
      if (!isValidEmail(email)) return { field: 'email', message: 'Por favor, insira um email válido com um domínio permitido example@example.com' };
      if (!isValidPassword(password)) return { field: 'password', message: 'A senha deve ter 8 caracteres.' };
      return null;
   };

   const handleSubmit = async (event) => {
      event.preventDefault();
      setErrorFields({ email: '', password: '', message: '' });

      const validationError = validateForm();
      if (validationError) {
         setErrorFields((prev) => ({ ...prev, [validationError.field]: validationError.message }));
         return;
      }

      try {
         // authResponse é response que vem do backend 
         const authResponse = await loginUser({ email, password });
         console.log(authResponse, 'authResponse authResponse authResponse authResponse');

         if (!handleLoginResponse(authResponse)) return;

         // Chama signinContexts somente se a autenticação for bem-sucedida
         signinContexts({ userToken: authResponse });
      } catch (error) {
         setErrorFields((prev) => ({
            ...prev,
            message: 'Falha ao conectar ao servidor. Verifique sua conexão com a internet.',
         }));
      }
   };

   return (
      <StyledContainer>
         <ContainerForm>
            <H2>Bem-vindo!</H2>
            <Form onSubmit={handleSubmit}>
               <label>Email:</label>
               <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value.toLowerCase())}
                  placeholder="E-mail"
               // required
               />
               <div>
                  {errorFields.email && <p style={{ color: 'red' }}>{errorFields.email}</p>}
               </div>
               <label>Senha:</label>
               <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Senha"
               // required
               />
               {errorFields.password && <p style={{ color: 'red' }}>{errorFields.password}</p>}

               {errorFields.message && <p style={{ color: 'red' }}>{errorFields.message}</p>}
               <PrimaryButton type="submit">Entrar</PrimaryButton >
            </Form>
            <LinkSignup to="/users/sign_up">CRIAR UMA NOVA CONTA AQUI</LinkSignup>
         </ContainerForm>
      </StyledContainer>
   );
};

export default LoginForm;