import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { AppShell, Burger, Button, Flex, ThemeIcon } from '@mantine/core';
import { useAuth } from '@/contexts/Auth.context';
import { useToggleColorScheme } from '@/hooks/useToggleColorScheme';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import classes from './Header.module.css';

const Header = ({ opened, toggle }: { opened: boolean; toggle: () => void }) => {
  const { user } = useAuth();
  const { computedColorScheme, toggleColorScheme } = useToggleColorScheme();

  return (
    <AppShell.Header className={classes.header}>
      <Flex justify="space-between" align="center" style={{ padding: '5px 10px' }}>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <ThemeIcon size={45} color="transparent">
          <img src="./src/favicon.png" alt="Logo" width={45} height={45} />
        </ThemeIcon>
        <Flex justify="space-between" style={{ padding: '5px 10px', gap: '10px' }}>
          {user ? (
            <ProfileMenu />
          ) : (
            <Button component="a" href="/login">
              Войти
            </Button>
          )}
          <Button size="sm" variant="link" onClick={toggleColorScheme}>
            {computedColorScheme === 'light' ? <FaMoon /> : <FaSun />}
          </Button>
        </Flex>
      </Flex>
    </AppShell.Header>
  );
};

export default Header;
