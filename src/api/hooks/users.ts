import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../apiClient';
import { User } from '../types/users';

export const useUserData = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const response = await apiClient.get<User>('/users/me');
      console.log('Response useUserData:', response.data);
      return response.data;
    },
    enabled: false,
    retry: 2,
  });
};
