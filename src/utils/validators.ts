export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return 'Неверный формат электронной почты';
  }
  if (email.length < 5) {
    return 'Адрес электронной почты должен содержать не менее 5 символов';
  }

  return null;
};

export const validatePassword = (password: string) => {
  if (password.length < 8) {
    return 'Пароль должен содержать не менее 8 символов';
  }

  if (!/\d/.test(password)) {
    return 'Пароль должен содержать хотя бы одну цифру';
  }

  if (!/[a-z]/.test(password)) {
    return 'Пароль должен содержать хотя бы одну строчную букву';
  }

  if (!/[A-Z]/.test(password)) {
    return 'Пароль должен содержать хотя бы одну заглавную букву';
  }
  return null;
};
