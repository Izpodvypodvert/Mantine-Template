import Cookies from 'js-cookie';
import { User } from '@/api/users/users.types';

export const setTokenCookie = (token: string) => {
  Cookies.set('token', token, { secure: true, sameSite: 'Strict' });
};

export const clearTokenCookie = () => {
  Cookies.remove('token');
};

export const getTokenCookie = () => {
  return Cookies.get('token');
};

export const setUserCookie = (user: User | null) => {
  Cookies.set('user', JSON.stringify(user), { secure: true, sameSite: 'Strict' });
};

export const clearUserCookie = () => {
  Cookies.remove('user');
};

export const getUserCookie = () => {
  return Cookies.get('user');
};
