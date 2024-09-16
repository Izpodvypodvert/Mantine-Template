import { apiClient } from '../apiClient';
import { User } from './users.types';

export const getUser = async () => {
  const response = await apiClient.get<User>('/users/me');
  console.log('Response useUserData:', response.data);
  return response.data;
};

export const usersService = {
  getUser,
};
