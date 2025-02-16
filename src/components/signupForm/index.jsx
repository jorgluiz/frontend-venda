import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledContainer, ContainerForm, Form, Input, PrimaryButton, H2, LinkSignup } from './styles';
import { registerUser } from '../../services/api';
import { isValidEmail } from '../../utils/formatEmail';
import { isValidPassword } from '../../utils/formatPassword';
import { isValidName } from '../../utils/formatName';

const SignUpForm = () => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [showPassword, setShowPassword] = useState(false); // Estado para alternar visibilidade da senha
   const [errorFields, setErrorFields] = useState({
      name: '',
      email: '',
      password: '',
      message: '',
   });
   const navigate = useNavigate();

   const validateForm = () => {
      if (!isValidName(name)) return { field: 'name', message: 'O nome é inválido.' };
      if (!isValidEmail(email)) return { field: 'email', message: 'Insira um endereço de email válido example@example.com' };
      if (!isValidPassword(password)) return { field: 'password', message: 'A senha deve ter 8 caracteres.' };
      return null;
   };

   const handleSubmit = async (event) => {
      event.preventDefault();
      setErrorFields({ name: '', email: '', password: '', message: '' });

      const validationError = validateForm();
      if (validationError) {
         setErrorFields((prev) => ({ ...prev, [validationError.field]: validationError.message }));
         return;
      }

      try {
         const response = await registerUser({ name, email, password });

         if (response.success === 'Registration successful') {
            navigate('/conecte-se');
         } else {
            switch (response.message) {
               case 'The characters exceeded the limit email':
                  setErrorFields((prev) => ({ ...prev, email: 'O email excedeu o limite de caracteres permitido.' }));
                  break;
               case 'The characters exceeded the limit name':
                  setErrorFields((prev) => ({ ...prev, name: 'O nome excedeu o limite de caracteres permitido.' }));
                  break;
               case 'Password must contain between 6 and 100 characters':
                  setErrorFields((prev) => ({ ...prev, password: 'A senha deve conter entre 8 caracteres.' }));
                  break;
               case 'Email is already in use.':
               case 'Email already registered':
                  setErrorFields((prev) => ({ ...prev, email: 'Este email já está cadastrado. Tente outro.' }));
                  break;
               case 'Email cannot start with numbers':
                  setErrorFields((prev) => ({ ...prev, email: 'Email não pode iniciar com números.' }));
                  break;
               default:
                  setErrorFields((prev) => ({ ...prev, message: 'Ocorreu um erro inesperado. Tente novamente mais tarde.' }));
                  break;
            }
         }
      } catch (error) {
         setErrorFields((prev) => ({ ...prev, message: 'Falha ao conectar ao servidor. Verifique sua conexão com a internet.' }));
      }
   };

   return (
      <StyledContainer>
         <ContainerForm>
            <H2>Criar nova conta</H2>
            <Form onSubmit={handleSubmit}>
               <label>Nome:</label>
               <Input
                  // nameToggle={nameToggle}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nome *"
               />
               {errorFields.name && <p style={{ color: 'red' }}>{errorFields.name}</p>}

               <label>Email:</label>
               <Input
                  // emailToggle={emailToggle}
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail *"
               />
               {errorFields.email && <p style={{ color: 'red' }}>{errorFields.email}</p>}

               <label>Senha:</label>
               <div style={{ position: 'relative' }}>
                  <Input
                     type={showPassword ? 'text' : 'password'}
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     placeholder="Senha *"
                  />
                  <button
                     type="button"
                     onClick={() => setShowPassword((prev) => !prev)}
                     style={{
                        position: 'absolute',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                     }}
                  >
                     {showPassword ? '🙈' : '👁️'}
                  </button>
               </div>
               {errorFields.password && <p style={{ color: 'red' }}>{errorFields.password}</p>}

               {errorFields.message && <p style={{ color: 'red' }}>{errorFields.message}</p>}

               <PrimaryButton type="submit">Cadastrar-se</PrimaryButton>
            </Form>
            <LinkSignup to="/conecte-se">Já possuo uma conta!</LinkSignup>
         </ContainerForm>
      </StyledContainer>

   );
};

export default SignUpForm;