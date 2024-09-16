import { useQuery } from '@tanstack/react-query';
import { usersService } from './users';

export const useUserData = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: async () => await usersService.getUser(),
    enabled: false,
    retry: 2,
  });
};
