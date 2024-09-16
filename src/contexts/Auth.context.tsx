import React, { createContext, useContext, useEffect, useState } from 'react';
import { MutateOptions, useMutation } from '@tanstack/react-query';
import { useUserData } from '@/api/hooks/users';
import { LoginData, RegisterData, RegisterResponse } from '@/api/types/auth';
import { clearToken, setToken } from '@/utils/token';
import { authService } from '../api/hooks/auth2';
import { User } from '../api/types/users';

interface AuthContextProps {
  user: User | null;

  isLoadingLogin: boolean;
  isErrorLogin: boolean;
  loginError: Error | null;
  login: (variables: LoginData, options?: MutateOptions<string, Error, LoginData, unknown>) => void;
  isLoadingRegister: boolean;
  isErrorRegister: boolean;
  registerError: Error | null;
  register: (
    variables: RegisterData,
    options?: MutateOptions<RegisterResponse, Error, RegisterData, unknown>
  ) => void;

  isLoadingLogout: boolean;
  isErrorLogout: boolean;
  logoutError: Error | null;
  logout: (variables: void, options?: MutateOptions<void, Error, void, unknown>) => void;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,

  isLoadingLogin: false,
  isErrorLogin: false,
  loginError: null,
  login: () => {},

  isLoadingRegister: false,
  isErrorRegister: false,
  registerError: null,
  register: () => {},

  isLoadingLogout: false,
  isErrorLogout: false,
  logoutError: null,
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const { refetch: refetchUser } = useUserData();

  const {
    mutate: login,
    isPending: isLoadingLogin,
    isError: isErrorLogin,
    error: loginError,
  } = useMutation({
    mutationFn: async ({ email, password }: LoginData) => {
      return await authService.login({ email, password });
    },
    onSuccess: async (data) => {
      setToken(data);
      setUser((await refetchUser()).data ?? null);
    },
    onError: (error: Error) => {
      console.log('Mutation failed:', error);
    },
  });

  const {
    mutate: register,
    isPending: isLoadingRegister,
    isError: isErrorRegister,
    error: registerError,
  } = useMutation({
    mutationFn: async ({ username, email, password }: RegisterData) => {
      return await authService.register({ username, email, password });
    },
    onSuccess: (data, variables) => {
      console.log('Registration successful:', data);
      login({ email: variables.email, password: variables.password });
    },
  });

  const {
    mutate: logout,
    isPending: isLoadingLogout,
    isError: isErrorLogout,
    error: logoutError,
  } = useMutation({
    mutationFn: async () => {
      return await authService.logout();
    },
    onSuccess: () => {
      setUser(null);
      clearToken();
    },
  });

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoadingLogin,
        isErrorLogin,
        loginError,
        login,
        isLoadingRegister,
        isErrorRegister,
        registerError,
        register,
        isLoadingLogout,
        isErrorLogout,
        logoutError,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
