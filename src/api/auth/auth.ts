import { apiClient } from '../apiClient';
import { LoginData, RegisterData, RegisterResponse, resetPasswordData } from './auth.types';

const login = async (data: LoginData): Promise<string> => {
  const params = new URLSearchParams();
  params.append('username', data.email);
  params.append('password', data.password);

  const response = await apiClient.post('/auth/jwt/login', params, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  return response.data.access_token;
};

const register = async (data: RegisterData) => {
  const response = await apiClient.post<RegisterResponse>('/auth/register', data);
  return response.data;
};

const logout = async () => {
  await apiClient.post('/auth/jwt/logout');
};

const forgotPassword = async (data: { email: string }) => {
  await apiClient.post('/auth/forgot-password', data);
};

const resetPassword = async (data: resetPasswordData) => {
  await apiClient.post('/auth/reset-password', data);
};

const verifyEmail = async (token: string) => {
  await apiClient.post('/auth/verify-email', { token });
};

const requestVerification = async () => {
  await apiClient.post('/auth/request-verification');
};

export const authService = {
  login,
  register,
  logout,
  forgotPassword,
  resetPassword,
  verifyEmail,
  requestVerification,
};
