import CheckEmailMessage from '@/components/CheckEmailMessage/CheckEmailMessage';

const CheckEmailPage = () => {
  return (
    <CheckEmailMessage
      title="Проверьте свою почту."
      message="Мы отправили вам ссылку на сброс пароля. Перейдите по ссылке из письма для восстановления доступа."
    />
  );
};

export default CheckEmailPage;
