import type { NextPage } from 'next';
import React from 'react';
import HeadTitle from '../components/headTitle';
import NavBox from '../components/navBox';
import Input from '../components/input';
import Button from '../components/button';
import BigBoard from '../components/bigBoard';
import Link from 'next/link';
import useMutation from '../lib/client/useMutation';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface ConfirmUserForm {
  username: string;
  password: string;
}

const Login: NextPage = () => {
  const [confirmUser, { data, loading }] = useMutation('/api/users/confirm');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ConfirmUserForm>();
  const onValid = ({ username, password }: ConfirmUserForm) => {
    confirmUser({ username, password });
  };

  const router = useRouter();
  useEffect(() => {
    if (data.ok) {
      router.push('/');
    }
  }, [data, router]);
  return (
    <div className=''>
      <NavBox>
        <HeadTitle
          firstLine='Welcome!'
          boldText='Log In'
          secondLine='to Continue.'
        />
      </NavBox>
      <BigBoard>
        <div className='w-16 h-16 bg-banana-graDark rounded-full mt-5'>
          <svg
            className='h-16 w-16 fill-white'
            version='1.1'
            viewBox='0 0 700 550'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='m526.53 154.8c-9.6602 0-18.742 2.3438-26.797 6.4414-34-45.742-88.258-75.566-149.51-75.566-60.758 0-114.64 29.289-148.74 74.328-8.3516-4.4961-17.859-7.0703-28.008-7.0703-32.707 0-59.285 26.5-59.285 59.285 0 29.359 21.441 53.719 49.484 58.406-0.011719 0.53516-0.085937 1.0469-0.085937 1.582 0 76.973 47.957 146.62 119.64 174.11 36.969 37.41 96.992 37.238 133.69 0.10156 71.605-27.359 119.63-96.988 119.73-173.97 27.891-4.8164 49.172-29.105 49.172-58.359-0.003906-32.785-26.582-59.285-59.289-59.285zm-99.434 185.62c-6.4805 1.6133-10.484 7.1328-8.2461 13.848 3.2578 8.2461 4.8867 17.004 4.8867 26.168 0 40.625-32.988 73.512-73.613 73.512s-73.715-32.887-73.715-73.512c0-8.9609 1.7305-17.719 4.9883-26.27 2.0039-6.0078-0.87109-11.91-8.2461-13.746-36.656-4.4805-64.246-35.84-64.246-73.004 0-40.625 32.988-73.715 73.512-73.715 23.824 0 45.512 11.098 59.562 30.34 2.9688 4.957 11.953 5.9297 16.395 0 13.746-18.938 35.941-30.34 59.258-30.34 40.727 0 73.715 33.09 73.715 73.715 0 37.062-27.594 68.422-64.25 73.004z' />
            <path d='m295.34 267.45c0 14.082-9.3398 25.496-20.867 25.496-11.523 0-20.867-11.414-20.867-25.496s9.3438-25.496 20.867-25.496c11.527 0 20.867 11.414 20.867 25.496' />
            <path d='m446.71 267.45c0 14.082-9.3398 25.496-20.867 25.496-11.523 0-20.867-11.414-20.867-25.496s9.3438-25.496 20.867-25.496c11.527 0 20.867 11.414 20.867 25.496' />
            <path d='m390.18 384.26c-5.6211 0-10.184 4.5586-10.184 10.184 0 5.4336-4.418 9.8555-9.8555 9.8555-5.4297 0-9.8477-4.418-9.8477-9.8555v-31.637c18.129-3.2422 31.258-14.875 31.258-29.23 0-5.6211-4.5586-10.184-10.184-10.184-5.6211 0-10.184 4.5586-10.184 10.184 0 3.4766-8 9.8555-21.074 9.8555s-21.074-6.3789-21.074-9.8555c0-5.6211-4.5586-10.184-10.184-10.184-5.6211 0-10.184 4.5586-10.184 10.184 0 14.355 13.129 25.988 31.258 29.23v31.637c0 5.4336-4.418 9.8555-9.8477 9.8555-5.4297 0-9.8477-4.418-9.8477-9.8555 0-5.6211-4.5586-10.184-10.184-10.184-5.6211 0-10.184 4.5586-10.184 10.184 0 16.66 13.551 30.219 30.211 30.219 7.7148 0 14.688-2.9922 20.031-7.7695 5.3438 4.7734 12.316 7.7695 20.031 7.7695 16.66 0 30.219-13.559 30.219-30.219 0.003906-5.625-4.5547-10.184-10.176-10.184z' />
          </svg>
        </div>
        <form
          className='w-full px-7 pt-2 pb-8 space-y-8'
          onSubmit={handleSubmit(onValid)}
        >
          <div className='space-y-6'>
            <Input
              register={register('username', {
                required: 'username is required',
                minLength: { value: 3, message: 'input more than 2 chars' },
              })}
              error={errors.username}
              title='User Name'
              id='username'
              type='text'
            />
            <Input
              register={register('password', {
                required: 'password is required',
                minLength: { value: 4, message: 'input more than 4 chars' },
              })}
              error={errors.password}
              title='Password'
              id='password'
              type='password'
            />
          </div>
          <div className='space-y-5 pt-5'>
            <Button text='Log in' />
            <div className='border-b h-0 '>
              <div className=' text-gray-400 text-sm relative -top-2.5 w-10 text-center mx-auto bg-gray-100'>
                or
              </div>
            </div>
            <Link href='/create-account'>
              <div>
                <Button text='Sign up' theme='light' />
              </div>
            </Link>
          </div>
        </form>
      </BigBoard>
    </div>
  );
};

export default Login;
