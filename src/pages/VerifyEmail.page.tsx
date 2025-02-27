import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Loader, Paper, Stack, Text } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useAuth } from '@/contexts/Auth.context';

const VerifyEmailPage = () => {
  const navigate = useNavigate();
  const { verifyEmail } = useAuth();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');

    if (token) {
      verifyEmail(token, {
        onSuccess: () => {
          navigate('/login');
          notifications.show({
            title: 'Успех',
            message: 'Вы успешно подтвердили почту!',
            color: 'teal',
          });
        },
        onError: (error: Error) => {
          navigate('/register');
          notifications.show({
            title: 'Ошибка',
            message: 'Не удалось подтвердить почту. Пожалуйста, попробуйте еще раз.',
            color: 'red',
          });
        },
      });
    }
  }, []);

  return (
    <Container size="xs" my={40}>
      <Paper shadow="md" radius="md" p="lg" withBorder>
        <Stack align="center" justify="center" gap="md">
          <Loader size="lg" variant="dots" />
          <Text size="xl">Обработка входа...</Text>
          <Text c="dimmed">Пожалуйста, подождите, пока мы завершаем процесс авторизации.</Text>
        </Stack>
      </Paper>
    </Container>
  );
};

export default VerifyEmailPage;
