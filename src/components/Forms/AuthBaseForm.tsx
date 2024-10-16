import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Anchor,
  Button,
  Container,
  Divider,
  Group,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { validateEmail, validatePassword } from '@/utils/validators';
import { GoogleButton } from '../Buttons/GoogleButton';
import classes from './BaseForm.module.css';

interface AuthBaseFormProps {
  type: 'login' | 'register';
  onSubmit: (values: { email: string; password: string; username?: string }) => void;
  showUsername?: boolean;
}

const AuthBaseForm = ({ type, onSubmit, showUsername }: AuthBaseFormProps) => {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      username: '',
    },
    validate:
      type === 'register'
        ? {
            email: validateEmail,
            password: validatePassword,
          }
        : {},
  });
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    window.location.href = `${import.meta.env.VITE_BASE_URL}/auth/google/login`;
  };

  return (
    <Container className={classes.content}>
      <Paper className={classes.paper}>
        <Text size="lg" fw={500}>
          Welcome to Mantine, {type} with
        </Text>

        <Group grow mb="md" mt="md">
          <GoogleButton radius="xl" onClick={handleGoogleLogin}>
            Google
          </GoogleButton>
        </Group>

        <Divider label="Or continue with email" labelPosition="center" my="lg" />

        <form
          onSubmit={form.onSubmit((values) => {
            onSubmit(values);
          })}
        >
          <Stack>
            {showUsername && (
              <TextInput
                label="Name"
                placeholder="Your name"
                value={form.values.username}
                onChange={(event) => form.setFieldValue('username', event.currentTarget.value)}
                radius="md"
              />
            )}

            <TextInput
              required
              label="Email"
              placeholder="hello@mantine.dev"
              value={form.values.email}
              onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
              error={form.errors.email}
              radius="md"
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              value={form.values.password}
              onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
              error={form.errors.password}
              radius="md"
            />
          </Stack>

          <Group justify="space-between" mt="xl">
            <Stack align="start">
              <Anchor
                component="button"
                type="button"
                c="dimmed"
                onClick={() => navigate(type === 'login' ? '/register' : '/login')}
                size="xs"
              >
                {type === 'register'
                  ? 'Already have an account? Login'
                  : "Don't have an account? Register"}
              </Anchor>
              <Anchor
                component="button"
                type="button"
                c="dimmed"
                onClick={() => navigate('/forgot-password')}
                size="xs"
              >
                Forgot password?
              </Anchor>
            </Stack>
            <Button type="submit" radius="xl">
              {type === 'login' ? 'Login' : 'Register'}
            </Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
};

export default AuthBaseForm;
