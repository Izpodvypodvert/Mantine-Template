import { useNavigate } from 'react-router-dom';
import { notifications } from '@mantine/notifications';
import AuthBaseForm from '@/components/Forms/AuthBaseForm';
import { useAuth } from '@/contexts/Auth.context';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (values: { email: string; password: string }) => {
    console.log('Login:', values.email, values.password);

    login(
      { email: values.email, password: values.password },
      {
        onSuccess: (data) => {
          notifications.show({
            title: 'Успех',
            message: 'Вы успешно вошли в систему!',
            color: 'teal',
          });
          navigate('/');
        },
        onError: (error: Error) => {
          notifications.show({
            title: 'Ошибка',
            message: 'Неверное имя пользователя или пароль. Пожалуйста, попробуйте еще раз.',
            color: 'red',
          });
        },
      }
    );
  };

  return <AuthBaseForm type="login" onSubmit={handleSubmit} showUsername={false} />;
};

export default LoginPage;
