import React from 'react';
import { FaMoon, FaSun, FaUser } from 'react-icons/fa';
import {
  AppShell,
  Burger,
  Button,
  Flex,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import { useUser } from '@/contexts/User.context';
import ProfileMenu from '../ProfileMenu/ProfileMenu';

const Header = ({ opened, toggle }: { opened: boolean; toggle: () => void }) => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light');
  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light');
  };
  const { user } = useUser();

  return (
    <AppShell.Header>
      <Flex justify="space-between" align="center" style={{ padding: '5px 10px' }}>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <div>Logo</div>
        <Flex justify="space-between" style={{ padding: '5px 10px', gap: '10px' }}>
          <ProfileMenu />
          <Button size="sm" variant="link" onClick={toggleColorScheme}>
            {computedColorScheme === 'light' ? <FaMoon /> : <FaSun />}
          </Button>
        </Flex>
      </Flex>
    </AppShell.Header>
  );
};

export default Header;
