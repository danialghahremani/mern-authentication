import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react';

const Header = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <p className='font-bold text-inherit'>Mern Auth</p>
      </NavbarBrand>

      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
          <Link href='/login'>Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} href='signup' color='primary' variant='shadow'>
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
