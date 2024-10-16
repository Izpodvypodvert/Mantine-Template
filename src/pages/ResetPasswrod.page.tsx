import { useNavigate } from 'react-router-dom';
import { notifications } from '@mantine/notifications';
import ResetPasswordForm from '@/components/Forms/ResetPasswordForm';
import { useAuth } from '@/contexts/Auth.context';

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const { resetPassword } = useAuth();

  const handleSubmit = (values: { token: string; password: string }) => {
    resetPassword(
      { token: values.token, password: values.password },
      {
        onSuccess: (data) => {
          notifications.show({
            title: 'Успех',
            message: 'Вы успешно поменяли пароль!',
            color: 'teal',
          });
          navigate('/login');
        },
        onError: (error: Error) => {
          notifications.show({
            title: 'Ошибка',
            message: 'Что-то пошло не так. Пожалуйста, попробуйте еще раз.',
            color: 'red',
          });
        },
      }
    );
  };
  return <ResetPasswordForm onSubmit={handleSubmit} />;
};

export default ResetPasswordPage;
