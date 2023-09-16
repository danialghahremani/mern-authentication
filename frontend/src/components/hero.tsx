import { Link, Button } from '@nextui-org/react';

const Hero = () => {
  return (
    <div>
      <h1>MERN Authentication</h1>
      <p>
        This is a boilerplate for MERN authentication that stores a JWT in an
        HTTP-Only cookie. It also uses Redux Toolkit and NextUI.
      </p>

      <Link href='/login'>Login</Link>
      <Button as={Link} href='signup' color='primary' variant='shadow'>
        Sign Up
      </Button>
    </div>
  );
};

export default Hero;
