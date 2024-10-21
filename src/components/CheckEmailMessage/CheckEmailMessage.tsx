import { Container, Text, Title } from '@mantine/core';

interface CheckEmailMessageProps {
  title: string;
  message: string;
}

const CheckEmailMessage = ({ title, message }: CheckEmailMessageProps) => {
  return (
    <Container>
      <Title size="lg" mt={50} mb={10}>
        {title}
      </Title>
      <Text>{message}</Text>
    </Container>
  );
};

export default CheckEmailMessage;
