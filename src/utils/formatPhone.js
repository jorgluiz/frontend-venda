export const formatPhoneNumber = (input) => {
   input = input.replace(/\D/g, ''); // Remove tudo que não for número
   if (input.length > 11) input = input.slice(0, 11); // Limita a 11 dígitos (DDD + número)

   // Formata o telefone com DDD (xx) xxxx-xxxx
   if (input.length >= 11) {
      input = `(${input.slice(0, 2)}) ${input.slice(2, 7)}-${input.slice(7, 11)}`;
   } else if (input.length > 6) {
      input = `(${input.slice(0, 2)}) ${input.slice(2, 6)}-${input.slice(6)}`;
   } else if (input.length > 2) {
      input = `(${input.slice(0, 2)}) ${input.slice(2)}`;
   }

   return input;
};


export const validatePhone = (phone) => {
   const phonePattern = /^\(?\d{2}\)?\s?9\d{4}-?\d{4}$/;
   return phonePattern.test(phone);
};