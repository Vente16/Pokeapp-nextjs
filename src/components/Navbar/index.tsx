import Link from 'next/link';
import { Button, Navbar, Text } from '@nextui-org/react';
import styles from './styles.module.scss';
import { PokeLogo } from './constants';

const NavbarApp = () => {
  return (
    <Navbar
      isBordered
      variant="sticky"
      className={styles.container_nav}
      key="nav_1"
    >
      <Navbar.Brand>
        <Link href="/" passHref key="1">
          <PokeLogo />
          <Text b color="inherit" hideIn="xs">
            POKEAPP
          </Text>
        </Link>
      </Navbar.Brand>
      <Navbar.Content>
        <Link href="/favorites" passHref key="2">
          <Button color="primary">Favorites</Button>
        </Link>
      </Navbar.Content>
    </Navbar>
  );
};

export default NavbarApp;
