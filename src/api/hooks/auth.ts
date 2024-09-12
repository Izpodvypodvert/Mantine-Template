import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { notifications } from '@mantine/notifications';
import { clearToken, setToken } from '@/utils/token';
import { apiClient } from '../apiClient';
import { LoginData, RegisterData, RegisterResponse } from '../types/auth';

export const useLogin = () => {
  const navigate = useNavigate();

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
      navigate('/');
    },
    onError: (error) => {
      notifications.show({
        title: 'Ошибка',
        message: 'Неверное имя пользователя или пароль. Пожалуйста, попробуйте еще раз.',
        color: 'red',
      });
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
      notifications.show({
        title: 'Успех',
        message: 'Регистрация прошла успешно!',
        color: 'teal',
      });
      loginMutation.mutate({ email: variables.email, password: variables.password });
    },
    onError: (error) => {
      notifications.show({
        title: 'Ошибка',
        message: 'Ошибка регистрации. Пожалуйста, попробуйте еще раз.',
        color: 'red',
      });
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
      clearToken();
      notifications.show({
        title: 'Успех',
        message: 'Вы успешно вышли из системы!',
        color: 'teal',
      });
    },
    onError: (error) => {
      notifications.show({
        title: 'Ошибка',
        message: 'Ошибка выхода. Пожалуйста, попробуйте еще раз.',
        color: 'red',
      });
      console.error('Ошибка выхода:', error);
    },
  });
};
