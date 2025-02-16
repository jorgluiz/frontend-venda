export const isValidPassword = (password) => {


   // Verifica se a senha tem entre 8 e 20 caracteres
   if (password.length < 8 || password.length >= 20) {
      return false;
   }

   if (/(\d)\1{2,}/.test(password)) {
      return false;
   }

   // Verifica se a senha não contém espaços
   if (/\s/.test(password)) {
      return false;
   }

   // Verifica se a senha contém a sequência "1234567890" ou qualquer parte consecutiva dela
   if (/1234567890/.test(password)) {
      return false;
   }

   // Verifica se a senha contém uma sequência de 4 ou mais números consecutivos
   if (/0123|1234|2345|3456|4567|5678|6789/.test(password)) {
      return false;
   }

   // Caso a senha passe por todas as verificações
   return true;

};