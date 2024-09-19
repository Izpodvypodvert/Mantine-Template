import React from 'react';
import { FaUser } from 'react-icons/fa';
import { GiProgression } from 'react-icons/gi';
import { ImProfile } from 'react-icons/im';
import { IoMdSettings } from 'react-icons/io';
import { TbLogout } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { ActionIcon, Button, Menu, rem, Space, useMantineTheme } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useAuth } from '@/contexts/Auth.context';

const ProfileMenu = () => {
  const [userMenuOpened, setUserMenuOpened] = React.useState(false);
  const theme = useMantineTheme();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    logout(undefined, {
      onSuccess: () => {
        setUserMenuOpened(false);
        notifications.show({
          title: 'Успех',
          message: 'Вы успешно вышли из системы!',
          color: 'teal',
        });
        navigate('/login');
      },
      onError: (error: Error) => {
        setUserMenuOpened(false);
        notifications.show({
          title: 'Ошибка',
          message: 'Ошибка при попытке выхода. Пожалуйста, попробуйте еще раз.',
          color: 'red',
        });
      },
    });
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
        <ActionIcon variant="transparent" size={'lg'}>
          <FaUser size={25} />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          component="a"
          href="/progress"
          leftSection={
            <GiProgression
              style={{ width: rem(16), height: rem(16) }}
              color={theme.colors.blue[6]}
            />
          }
        >
          Progress
        </Menu.Item>
        <Menu.Item
          component="a"
          href="/profile"
          leftSection={
            <ImProfile style={{ width: rem(16), height: rem(16) }} color={theme.colors.yellow[6]} />
          }
        >
          Profile
        </Menu.Item>
        <Menu.Item
          component="a"
          href="/settings"
          leftSection={
            <IoMdSettings
              style={{ width: rem(16), height: rem(16) }}
              color={theme.colors.green[6]}
            />
          }
        >
          Settings
        </Menu.Item>
        <Space h="lg" />
        <Menu.Divider />
        <Menu.Item
          component="button"
          onClick={handleLogout}
          color="red"
          leftSection={<TbLogout style={{ width: rem(14), height: rem(14) }} />}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ProfileMenu;
