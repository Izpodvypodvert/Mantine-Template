import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Loader, Paper, Stack, Text } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useAuth } from '@/contexts/Auth.context';

const OAuthCallbackPage = () => {
  const navigate = useNavigate();
  const { handleLoginSuccess } = useAuth();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');

    if (token) {
      handleLoginSuccess(token).then(() => {
        navigate('/');
        notifications.show({
          title: 'Успех',
          message: 'Вы успешно вошли в систему!',
          color: 'teal',
        });
      });
    } else {
      navigate('/login');
      notifications.show({
        title: 'Ошибка',
        message: 'Не удалось авторизоваться. Пожалуйста, попробуйте еще раз.',
        color: 'red',
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

export default OAuthCallbackPage;
