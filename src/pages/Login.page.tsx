import { useLogin } from '@/api/hooks/auth';
import AuthBaseForm from '@/components/Forms/AuthBaseForm';

const LoginPage = () => {
  const loginMutation = useLogin();

  const handleSubmit = (values: { email: string; password: string }) => {
    console.log('Login:', values.email, values.password);

    loginMutation.mutate({
      email: values.email,
      password: values.password,
    });
  };

  return <AuthBaseForm type="login" onSubmit={handleSubmit} showUsername={false} />;
};

export default LoginPage;
