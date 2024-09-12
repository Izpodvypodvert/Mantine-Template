import React from 'react';
import { FaMoon, FaUser } from 'react-icons/fa';
import { Button, Menu, rem, Space, useMantineTheme } from '@mantine/core';
import { useLogout } from '@/api/hooks/auth';

const ProfileMenu = () => {
  const [userMenuOpened, setUserMenuOpened] = React.useState(false);
  const theme = useMantineTheme();
  const logoutMutation = useLogout();

  const Logout = () => {
    logoutMutation.mutate();
  };

  return (
    <Menu
      width={200}
      transitionProps={{ transition: 'rotate-right', duration: 200 }}
      position="bottom"
      onClose={() => setUserMenuOpened(false)}
      onOpen={() => setUserMenuOpened(true)}
      withinPortal
      offset={20}
    >
      <Menu.Target>
        <Button size="sm">
          <FaUser />
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          component="a"
          href="/progress"
          leftSection={
            <FaMoon style={{ width: rem(16), height: rem(16) }} color={theme.colors.blue[6]} />
          }
        >
          Progress
        </Menu.Item>
        <Menu.Item
          component="a"
          href="/profile"
          leftSection={
            <FaMoon style={{ width: rem(16), height: rem(16) }} color={theme.colors.yellow[6]} />
          }
        >
          Profile
        </Menu.Item>
        <Menu.Item
          component="a"
          href="/settings"
          leftSection={
            <FaMoon style={{ width: rem(16), height: rem(16) }} color={theme.colors.green[6]} />
          }
        >
          Settings
        </Menu.Item>
        <Space h="lg" />
        <Menu.Divider />
        <Menu.Item
          component="button"
          onClick={Logout}
          color="red"
          leftSection={<FaMoon style={{ width: rem(14), height: rem(14) }} />}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ProfileMenu;
