import React, { createContext, useContext, useEffect, useState } from 'react';
import { MutateOptions, useMutation } from '@tanstack/react-query';
import {
  LoginData,
  RegisterData,
  RegisterResponse,
  resetPasswordData,
} from '@/api/auth/auth.types';
import { useUserData } from '@/api/users/users.hooks';
import {
  clearTokenCookie,
  clearUserCookie,
  getUserCookie,
  setTokenCookie,
  setUserCookie,
} from '@/utils/cookies';
import { authService } from '../api/auth/auth';
import { User } from '../api/users/users.types';

interface AuthContextProps {
  user: User | null;

  isLoadingLogin: boolean;
  isErrorLogin: boolean;
  loginError: Error | null;
  login: (variables: LoginData, options?: MutateOptions<string, Error, LoginData, unknown>) => void;
  handleLoginSuccess: (data: any) => Promise<void>;
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
  resetPassword: (
    variables: resetPasswordData,
    options?: MutateOptions<void, Error, resetPasswordData, unknown>
  ) => void;
  forgotPassword: (
    variables: string,
    options?: MutateOptions<void, Error, string, unknown>
  ) => void;
  verifyEmail: (variables: string, options?: MutateOptions<void, Error, string, unknown>) => void;
  requestVerification: (
    variables: void,
    options?: MutateOptions<void, Error, void, unknown>
  ) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const { refetch: refetchUser } = useUserData();

  useEffect(() => {
    const storedUser = getUserCookie();
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLoginSuccess = async (data: any) => {
    setTokenCookie(data);
    const fetchedUser = (await refetchUser()).data ?? null;
    setUser(fetchedUser);
    setUserCookie(fetchedUser);
  };

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
      await handleLoginSuccess(data);
    },
    onError: (error: Error) => {
      console.log('Mutation failed:', error);
    },
    retry: false,
  });

  const { mutate: requestVerification } = useMutation({
    mutationFn: async () => {
      return await authService.requestVerification();
    },
    onSuccess: async (data, token) => {
      console.log('verifyEmail Mutation success:', data, token);
    },
    onError: (error: Error) => {
      console.log('verifyEmail Mutation failed:', error);
    },
    retry: false,
  });

  const { mutate: verifyEmail } = useMutation({
    mutationFn: async (token: string) => {
      return await authService.verifyEmail(token);
    },
    onSuccess: async (data, token) => {
      await handleLoginSuccess(token);
    },
    onError: (error: Error) => {
      console.log('verifyEmail Mutation failed:', error);
    },
    retry: false,
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
      console.log('Successful registration');
    },
    retry: false,
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
      clearTokenCookie();
      clearUserCookie();
    },
  });

  const { mutate: forgotPassword } = useMutation({
    mutationFn: async (email: string) => {
      return await authService.forgotPassword({ email: email });
    },
    onSuccess: () => {
      setUser(null);
      clearTokenCookie();
      clearUserCookie();
      console.log('Password reset email sent');
    },
  });

  const { mutate: resetPassword } = useMutation({
    mutationFn: async ({ token, password }: resetPasswordData) => {
      return await authService.resetPassword({ token, password });
    },
    onSuccess: () => {
      console.log('Reset password successful');
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
        handleLoginSuccess,
        isLoadingRegister,
        isErrorRegister,
        registerError,
        register,
        isLoadingLogout,
        isErrorLogout,
        logoutError,
        logout,
        forgotPassword,
        resetPassword,
        verifyEmail,
        requestVerification,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
