import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Anchor,
  Button,
  Container,
  Divider,
  Group,
  Paper,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { validateEmail } from '@/utils/validators';
import classes from './BaseForm.module.css';

interface ForgotPasswordFormProps {
  onSubmit: (values: { email: string }) => void;
}

const ForgotPasswordForm = ({ onSubmit }: ForgotPasswordFormProps) => {
  const form = useForm({
    initialValues: {
      email: '',
    },
    validate: {
      email: validateEmail,
    },
  });
  const navigate = useNavigate();

  return (
    <Container className={classes.content}>
      <Paper className={classes.paper}>
        <Text size="lg" fw={500}>
          Recover password
        </Text>

        <Divider my="lg" />

        <form
          onSubmit={form.onSubmit((values) => {
            onSubmit(values);
          })}
        >
          <TextInput
            required
            label="Email"
            placeholder="hello@mantine.dev"
            value={form.values.email}
            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
            error={form.errors.email}
            radius="md"
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
              Recover
            </Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
};

export default ForgotPasswordForm;
