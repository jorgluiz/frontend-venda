export const isValidName = (name) => {

  if (!name) return false;
  // Remove espaços extras no início e no final
  const trimmedName = name.trim();

  // Verifica o comprimento do nome
  if (trimmedName.length < 4 || trimmedName.length > 50) {
    return false;
  }

  // Expressão regular para validar o formato do nome
  // Permite letras (maiúsculas e minúsculas), espaços, apóstrofos e hífens
  const nameRegex = /^[a-zA-ZÀ-ÿ'’-]+( [a-zA-ZÀ-ÿ'’-]+)*$/;

  // Retorna true se o nome for válido, caso contrário, false
  return nameRegex.test(trimmedName);
};
