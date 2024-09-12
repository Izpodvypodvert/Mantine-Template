import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { AuthProvider } from './contexts/Auth.context';
import { UserProvider } from './contexts/User.context';
import Router from './Router';
import { theme } from './theme';

const queryClient = new QueryClient();

const App = () => {
  return (
    <MantineProvider theme={theme}>
      <Notifications />
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <UserProvider>
            <Router />
          </UserProvider>
        </AuthProvider>
      </QueryClientProvider>
    </MantineProvider>
  );
};

export default App;
