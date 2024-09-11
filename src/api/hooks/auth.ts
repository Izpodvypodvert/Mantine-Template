import { useMutation, useQueryClient } from '@tanstack/react-query';
import { clearToken, setToken } from '@/utils/token';
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
    onSuccess: (data) => {
      setToken(data.access_token);
      console.log(data.access_token);
    },
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: async (data: RegisterData) => {
      const response = await apiClient.post<RegisterResponse>('/auth/register', data);
      return response.data;
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
      clearToken();
    },
  });
};
