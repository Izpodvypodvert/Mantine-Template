import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { validatePassword } from '@/utils/validators';
import classes from './BaseForm.module.css';

interface ResetPasswordFormProps {
  onSubmit: (values: { password: string; token: string }) => void;
}

const ResetPasswordForm = ({ onSubmit }: ResetPasswordFormProps) => {
  const form = useForm({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validate: {
      password: validatePassword,
      confirmPassword: (value, values) =>
        value !== values.password ? 'Passwords do not match' : null,
    },
  });
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token');

  return (
    <Container className={classes.content}>
      <Paper className={classes.paper}>
        <Text size="lg" fw={500}>
          Sumbit new password
        </Text>

        <Divider my="lg" />

        <form
          onSubmit={form.onSubmit((values) => {
            onSubmit({ password: values.password, token: token as string });
          })}
        >
          <PasswordInput
            required
            label="New Password"
            placeholder="New password"
            value={form.values.password}
            onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
            error={form.errors.password}
            radius="md"
          />
          <PasswordInput
            required
            label="Confirm Password"
            placeholder="Confirm new password"
            value={form.values.confirmPassword}
            onChange={(event) => form.setFieldValue('confirmPassword', event.currentTarget.value)}
            error={form.errors.confirmPassword}
            radius="md"
            mt="md"
          />

          <Group justify="space-between" mt="xl">
            <Stack align="start">
              <Anchor
                component="button"
                type="button"
                c="dimmed"
                onClick={() => navigate('/login')}
                size="xs"
              >
                Cancel
              </Anchor>
            </Stack>
            <Button type="submit" radius="xl">
              Submit
            </Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
};

export default ResetPasswordForm;
