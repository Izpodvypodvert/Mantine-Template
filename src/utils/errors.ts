import { AxiosError } from 'axios';

export interface FastAPIError {
  detail: string;
}

export const getErrorMessage = (error: Error): string => {
  const errorMessage = 'Произошла ошибка.';
  if ((error as AxiosError).isAxiosError) {
    const axiosError = error as AxiosError<FastAPIError>;
    return axiosError.response?.data?.detail || errorMessage;
  }
  return errorMessage;
};
