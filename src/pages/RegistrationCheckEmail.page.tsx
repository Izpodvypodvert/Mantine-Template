import CheckEmailMessage from '@/components/CheckEmailMessage/CheckEmailMessage';

const RegistrationCheckEmailPage = () => {
  return (
    <CheckEmailMessage
      title="Проверьте свою почту."
      message="Перейдите по ссылке в письме, чтобы завершить регистрацию."
    />
  );
};

export default RegistrationCheckEmailPage;
