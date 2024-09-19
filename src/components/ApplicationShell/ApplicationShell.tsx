import { Outlet } from 'react-router-dom';
import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import classes from './ApplicationShell.module.css';

const ApplicationShell = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 250,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <Header opened={opened} toggle={toggle} />
      <Navbar toggle={toggle} />

      <AppShell.Main className={classes.main_content}>
        <Outlet />
      </AppShell.Main>
      <AppShell.Footer className={classes.footer}>Footer 😶‍🌫️😶‍🌫️😶‍🌫️😶‍🌫️😶‍🌫️😶‍🌫️😶‍🌫️</AppShell.Footer>
    </AppShell>
  );
};

export default ApplicationShell;
