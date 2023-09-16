import { ChangeEvent, useState } from 'react';
import { Input, Button, Link } from '@nextui-org/react';
import { IconEyeOff, IconEye } from '@tabler/icons-react';

const LoginForm = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleToggleVisibility = () => setIsPasswordVisible(!isPasswordVisible);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log('form :>> ', form);
  };

  return (
    <div className='container max-w-screen-sm mx-auto mt-20'>
      <div className='flex w-full flex-wrap md:flex-nowrap gap-4 flex-col'>
        <Input
          type='email'
          name='email'
          label='Email'
          variant='bordered'
          autoComplete=''
          onChange={handleChange}
        />
        <Input
          type={isPasswordVisible ? 'text' : 'password'}
          name='password'
          label='Password'
          variant='bordered'
          endContent={
            <button
              className='focus:outline-none'
              type='button'
              onClick={handleToggleVisibility}
            >
              {isPasswordVisible ? (
                <IconEyeOff className='text-2xl text-default-400 pointer-events-none' />
              ) : (
                <IconEye className='text-2xl text-default-400 pointer-events-none' />
              )}
            </button>
          }
          onChange={handleChange}
        />
        <Button color='primary' variant='shadow' onClick={handleSubmit}>
          Login
        </Button>

        <div>
          New customer? <Link href='/signup'>Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
