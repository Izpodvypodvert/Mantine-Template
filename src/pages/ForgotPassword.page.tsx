import { useNavigate } from 'react-router-dom';
import { notifications } from '@mantine/notifications';
import ForgotPasswordForm from '@/components/Forms/ForgotPasswordForm';
import { useAuth } from '@/contexts/Auth.context';

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const { forgotPassword } = useAuth();

  const handleSubmit = (values: { email: string }) => {
    forgotPassword(values.email, {
      onSuccess: (data) => {
        notifications.show({
          title: 'Успех',
          message: 'Вам отправлено письмо для восстановления пароля!',
          color: 'teal',
        });
        navigate('/check-email');
      },
      onError: (error: Error) => {
        notifications.show({
          title: 'Ошибка',
          message: 'Что-то пошло не так. Пожалуйста, попробуйте еще раз.',
          color: 'red',
        });
      },
    });
  };
  return <ForgotPasswordForm onSubmit={handleSubmit} />;
};

export default ForgotPasswordPage;
