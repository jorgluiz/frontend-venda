export const validateCPF = (cpf) => {
   const cpfPattern = /^\d{11}$/;
   const invalidSequences = [
      "00000000000",
      "11111111111",
      "22222222222",
      "33333333333",
      "44444444444",
      "55555555555",
      "66666666666",
      "77777777777",
      "88888888888",
      "99999999999",
      "12345678901"
   ];

   if (!cpfPattern.test(cpf) || invalidSequences.includes(cpf)) {
      return false;
   }

   return true;
};
