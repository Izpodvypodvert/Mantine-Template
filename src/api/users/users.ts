import { apiClient } from '../apiClient';
import { User } from './users.types';

export const getUser = async () => {
  const response = await apiClient.get<User>('/users/me');
  return response.data;
};

export const usersService = {
  getUser,
};
