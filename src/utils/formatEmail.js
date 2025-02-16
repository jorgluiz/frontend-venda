export const isValidEmail = (email) => {



   // Verifica se há espaços no email
   if (/\s/.test(email)) {
      return false;
   }

   // Verifica se o email começa com números
   if (/^\d/.test(email)) {
      return false;
   }

   // Expressão regular para verificar o formato de email
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!emailRegex.test(email)) {
      return false;
   }

   // Lista de domínios permitidos
   const validDomains = ['hotmail.com', 'hotmail.com.br', 'gmail.com', 'gmail.com.br', 'yahoo.com', 'yahoo.com.br', 'outlook.com', 'outlook.com.br'];

   // Extrai o domínio do email e converte para minúsculas
   const emailDomain = email.split('@')[1].toLowerCase();

   // Verifica se o domínio faz parte da lista permitida
   return validDomains.includes(emailDomain);
};


// export const isValidEmail = (email) => {
//    // Expressão regular para verificar o formato de email
//    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//    if (!emailRegex.test(email)) {
//       return false;
//    }

//    // Lista de domínios permitidos
//    const validDomains = ['hotmail.com', 'hotmail.com.br', 'gmail.com', 'gmail.com.br', 'yahoo.com', 'yahoo.com.br', 'outlook.com', 'outlook.com.br'];

//    // Extrai o domínio do email
//    const emailDomain = email.split('@')[1];

//    // Verifica se o domínio faz parte da lista permitida
//    return validDomains.includes(emailDomain);
// };