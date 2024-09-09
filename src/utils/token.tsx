import Cookies from 'js-cookie';

export const setToken = (token: string) => {
  Cookies.set('token', token, { secure: true, sameSite: 'Strict' });
};

export const clearToken = () => {
  Cookies.remove('token');
};

export const getToken = () => {
  return Cookies.get('token');
};
