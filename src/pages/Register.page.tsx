import AuthBaseForm from '../components/Forms/AuthBaseForm';

const RegisterPage = () => {
  const handleSubmit = (values: { email: string; password: string; username?: string }) => {
    console.log('Register:', values.email, values.username, values.password);
  };

  return <AuthBaseForm type="register" onSubmit={handleSubmit} showUsername={true} />;
};

export default RegisterPage;
