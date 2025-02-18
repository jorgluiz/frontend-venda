// 📌 O que foi melhorado?
// ✔️ Mantivemos a verificação do padrão (11 dígitos numéricos).
// ✔️ Bloqueamos sequências inválidas.
// ✔️ Adicionamos a verificação do dígito verificador para evitar CPFs falsos.

export const validateCPF = (cpf) => {
  // Remove caracteres não numéricos
  cpf = cpf.replace(/\D/g, "");

  // Padrão: 11 dígitos e não pode estar na lista de CPFs inválidos
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

  // Validação do dígito verificador
  let soma = 0;
  let resto;

  for (let i = 1; i <= 9; i++) soma += parseInt(cpf[i - 1]) * (11 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf[9])) return false;

  soma = 0;
  for (let i = 1; i <= 10; i++) soma += parseInt(cpf[i - 1]) * (12 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf[10])) return false;

  return true;
};
