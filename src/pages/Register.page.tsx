import { useRegister } from '@/api/hooks/auth';
import AuthBaseForm from '../components/Forms/AuthBaseForm';

const RegisterPage = () => {
  const registerMutation = useRegister();

  const handleSubmit = (values: { email: string; password: string; username?: string }) => {
    console.log('Register:', values.email, values.username, values.password);

    registerMutation.mutate(
      {
        email: values.email,
        password: values.password,
        username: values.username ?? '',
      },
      {
        onSuccess: (userData) => {
          console.log(userData);
          // TODO: Redirect to home page or login page
          // TODO: Add user data to local storage or user context
        },

        onError: (error) => {
          console.log('Register error', error);
        },
      }
    );
  };

  return <AuthBaseForm type="register" onSubmit={handleSubmit} showUsername={true} />;
};

export default RegisterPage;
