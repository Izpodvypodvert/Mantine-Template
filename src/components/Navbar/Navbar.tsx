import { useState } from 'react';
import { CiLogout } from 'react-icons/ci';
import { FaHome } from 'react-icons/fa';
import { GiArchiveRegister } from 'react-icons/gi';
import { HiOutlineSwitchHorizontal } from 'react-icons/hi';
import { IoLogIn } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { AppShell, Code, Group } from '@mantine/core';
import classes from './Navbar.module.css';

const data = [
  { link: '/', label: 'Main Page', icon: FaHome },
  { link: '/login', label: 'Login', icon: IoLogIn },
  { link: '/register', label: 'Register', icon: GiArchiveRegister },
];

const Navbar = ({ toggle }: { toggle: () => void }) => {
  const [active, setActive] = useState('Main Page');
  const navigate = useNavigate();

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        setActive(item.label);
        toggle();
        navigate(item.link);
        event.preventDefault();
      }}
    >
      <item.icon className={classes.linkIcon} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <AppShell.Navbar className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <Code fw={700}>v3.1.2</Code>
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <HiOutlineSwitchHorizontal className={classes.linkIcon} />
          <span>Change account</span>
        </a>

        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <CiLogout className={classes.linkIcon} />
          <span>Logout</span>
        </a>
      </div>
    </AppShell.Navbar>
  );
};

export default Navbar;
