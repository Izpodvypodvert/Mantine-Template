import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '../apiClient';
import { LoginData, RegisterData, RegisterResponse } from '../types/auth';

export const useLogin = () => {
  return useMutation({
    mutationFn: async (data: LoginData) => {
      const params = new URLSearchParams();
      params.append('username', data.email);
      params.append('password', data.password);

      const response = await apiClient.post('/auth/jwt/login', params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      return response.data;
    },
    onError: (error) => {
      console.error('Ошибка входа:', error);
    },
  });
};

export const useRegister = () => {
  const loginMutation = useLogin();

  return useMutation({
    mutationFn: async (data: RegisterData) => {
      const response = await apiClient.post<RegisterResponse>('/auth/register', data);
      return response.data;
    },
    onSuccess: (data, variables) => {
      loginMutation.mutate({ email: variables.email, password: variables.password });
    },
    onError: (error) => {
      console.error('Ошибка регистрации:', error);
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      await apiClient.post('/auth/jwt/logout');
    },
    onSuccess: () => {
      queryClient.clear();
    },
    onError: (error) => {
      console.error('Ошибка выхода:', error);
    },
  });
};
