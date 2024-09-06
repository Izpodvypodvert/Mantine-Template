import AuthBaseForm from '@/components/Forms/AuthBaseForm';

const LoginPage = () => {
  const handleSubmit = (values: { email: string; password: string }) => {
    console.log('Login:', values.email, values.password);
  };

  return <AuthBaseForm type="login" onSubmit={handleSubmit} showUsername={false} />;
};

export default LoginPage;
