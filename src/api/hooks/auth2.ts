import { apiClient } from '../apiClient';
import { LoginData, RegisterData, RegisterResponse } from '../types/auth';

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

export const authService = {
  login,
  register,
  logout,
};
