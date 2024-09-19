import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { IoEnterOutline } from 'react-icons/io5';
import { ActionIcon, AppShell, Burger, Button, Flex, ThemeIcon } from '@mantine/core';
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
        <Flex justify="space-between" align="center" style={{ padding: '5px 10px', gap: '10px' }}>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <ActionIcon size={45} variant="transparent" component="a" href="/">
            <img src="./src/favicon.png" alt="Logo" width={45} height={45} />
          </ActionIcon>
        </Flex>
        <Flex justify="space-between" style={{ padding: '5px 10px', gap: '10px' }}>
          {user ? (
            <ProfileMenu />
          ) : (
            <ActionIcon component="a" href="/login" variant="transparent" size={'lg'}>
              <IoEnterOutline size={40} />
            </ActionIcon>
          )}

          <ActionIcon variant="transparent" onClick={toggleColorScheme} size={'lg'}>
            {computedColorScheme === 'light' ? (
              <FaMoon color="purple" size={25} />
            ) : (
              <FaSun color="yellow" size={25} />
            )}
          </ActionIcon>
        </Flex>
      </Flex>
    </AppShell.Header>
  );
};

export default Header;
