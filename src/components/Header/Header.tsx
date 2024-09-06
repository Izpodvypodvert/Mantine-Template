import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import {
  AppShell,
  Burger,
  Button,
  Flex,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';

const Header = ({ opened, toggle }: { opened: boolean; toggle: () => void }) => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light');
  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light');
  };

  return (
    <AppShell.Header>
      <Flex justify="space-between" align="center" style={{ padding: '10px 20px' }}>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <div>Logo</div>
        <Button size="sm" variant="link" onClick={toggleColorScheme}>
          {computedColorScheme === 'light' ? <FaMoon /> : <FaSun />}
        </Button>
      </Flex>
    </AppShell.Header>
  );
};

export default Header;
