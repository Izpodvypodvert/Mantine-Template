import { Container, Text, Title } from '@mantine/core';

const CheckEmailPage = () => {
  return (
    <Container>
      <Title size="lg" mt={50} mb={10}>
        Проверьте свою почту.
      </Title>
      <Text>
        Мы отправили вам ссылку на сброс пароля. Перейдите по ссылке из письма для восстановления
        доступа.
      </Text>
    </Container>
  );
};

export default CheckEmailPage;
