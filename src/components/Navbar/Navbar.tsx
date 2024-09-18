import { useState } from 'react';
import { BsInfoSquare } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';
import { GiArchiveRegister } from 'react-icons/gi';
import { IoLogIn } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { AppShell, Code, Group } from '@mantine/core';
import classes from './Navbar.module.css';

const data = [
  { link: '/', label: 'Main Page', icon: FaHome },
  { link: '/collection', label: 'Collection', icon: GiArchiveRegister },
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
        <a
          href="/about"
          className={classes.link}
          key={'About'}
          data-active={'About' === active || undefined}
          onClick={(event) => {
            setActive('About');
            toggle();
            navigate('/about');
            event.preventDefault();
          }}
        >
          <BsInfoSquare className={classes.linkIcon} />
          <span>About</span>
        </a>
      </div>
    </AppShell.Navbar>
  );
};

export default Navbar;
