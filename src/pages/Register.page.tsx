import { useNavigate } from 'react-router-dom';
import { notifications } from '@mantine/notifications';
import { useAuth } from '@/contexts/Auth.context';
import AuthBaseForm from '../components/Forms/AuthBaseForm';

const RegisterPage = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (values: { email: string; password: string; username?: string }) => {
    console.log('Register:', values.email, values.username, values.password);

    register(
      { email: values.email, password: values.password, username: values.username ?? '' },
      {
        onSuccess: (data) => {
          notifications.show({
            title: 'Успех',
            message: 'Регистрация прошла успешно!',
            color: 'teal',
          });
          navigate('/');
        },
        onError: (error: Error) => {
          notifications.show({
            title: 'Ошибка',
            message: 'Ошибка регистрации. Пожалуйста, попробуйте еще раз.',
            color: 'red',
          });
        },
      }
    );
  };

  return <AuthBaseForm type="register" onSubmit={handleSubmit} showUsername={true} />;
};

export default RegisterPage;
