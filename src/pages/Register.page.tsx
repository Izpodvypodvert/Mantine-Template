import { useNavigate } from 'react-router-dom';
import { notifications } from '@mantine/notifications';
import { useAuth } from '@/contexts/Auth.context';
import { getErrorMessage } from '@/utils/errors';
import AuthBaseForm from '../components/Forms/AuthBaseForm';

const RegisterPage = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (values: { email: string; password: string; username?: string }) => {
    register(
      { email: values.email, password: values.password, username: values.username ?? '' },
      {
        onSuccess: (data) => {
          notifications.show({
            title: 'Успех',
            message: 'Регистрация прошла успешно!',
            color: 'teal',
          });
          navigate('/check-email-registration');
        },
        onError: (error: Error) => {
          const errorMessage = getErrorMessage(error);
          notifications.show({
            title: 'Ошибка',
            message: `${errorMessage}.`,
            color: 'red',
          });
        },
      }
    );
  };

  return <AuthBaseForm type="register" onSubmit={handleSubmit} showUsername={true} />;
};

export default RegisterPage;
