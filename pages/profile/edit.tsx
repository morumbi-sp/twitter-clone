import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import HeadTitle from '@/components/headTitle';
import NavBox from '@/components/navBox';
import Input from '@/components/input';
import Button from '@/components/button';
import BigBoard from '@/components/bigBoard';
import Link from 'next/link';
import useUser from '@/lib/client/useUser';
import { useForm } from 'react-hook-form';
import useMutation from '@/lib/client/useMutation';
import { useRouter } from 'next/router';
import useSWR from 'swr';

interface EditProfileForm {
  username: string;
  userNick: string;
  email?: string;
  avatar: number;
}

const CreateAccount: NextPage = () => {
  const { user } = useUser();
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<EditProfileForm>();
  const [editProfile, { data, loading }] = useMutation('/api/users/me');

  const onValid = ({ username, userNick, email, avatar }: EditProfileForm) => {
    if (loading) return;
    editProfile({ username, userNick, email, avatar });
  };

  useEffect(() => {
    if (user?.userName) setValue('username', user.userName);
    if (user?.userNick) setValue('userNick', user.userNick);
    if (user?.email) setValue('email', user.email);
  }, [setValue, user]);

  useEffect(() => {
    if (data?.error) {
      setError('username', {
        type: 'custom',
        message: data.error,
      });
      setError('email', {
        type: 'custom',
        message: data.error,
      });
    }
  }, [data]);

  const router = useRouter();
  useEffect(() => {
    if (data?.ok) {
      router.push('/profile');
    }
  }, [data, router]);

  const [editAvatar] = useMutation('/api/users/avatar');

  // const { data: newAvatardata, mutate } = useSWR('/api/users/avatar');

  const [newAvatar, setNewAvatar] = useState(0);

  const onChangeAvatar = () => {
    const avatarNumber = Math.floor(Math.random() * 7) + 1;
    setNewAvatar(avatarNumber);
    editAvatar({ avatarNumber });
  };

  return (
    <>
      <NavBox>
        <HeadTitle
          firstLine='Want '
          boldText='Edit Account ?'
          secondLine='Fill this form.'
        />
      </NavBox>
      <BigBoard theme='dark'>
        <div className='w-full px-7 flex items-center  mt-5 space-x-7'>
          <img
            src={newAvatar ? `/${newAvatar}.png` : `/${user?.avatar}.png`}
            className='w-16 h-16 rounded-full border-banana border'
          />

          <button
            className='px-3 rounded-lg text-banana-graDark  py-1.5 text-xs border-2  border-banana-graDark hover:bg-banana-graDark hover:text-white'
            onClick={onChangeAvatar}
          >
            Change Avatar
          </button>
        </div>
        <form
          className='w-full px-7 pt-2 pb-4 space-y-10'
          onSubmit={handleSubmit(onValid)}
        >
          <div className='space-y-6'>
            <Input
              title='User Name'
              id='username'
              type='text'
              register={register('username', {
                required: 'username is required',
                minLength: { value: 3, message: 'input more than 2 chars' },
              })}
              error={errors.username}
            />
            <Input
              title='User ID'
              id='userNick'
              type='text'
              register={register('userNick', {
                required: 'user id is required',
                minLength: { value: 3, message: 'input more than 2 chars' },
                validate: (value) =>
                  value.charAt(0) === '@' || 'user id should start with @',
              })}
              error={errors.userNick}
            />
            <Input
              title='Email'
              id='email'
              type='email'
              register={register('email')}
              error={errors.email}
            />
          </div>
          <div className='space-y-5 pt-5'>
            <Button text='Confirm' />
            <Link href='/profile'>
              <div className='text-center text-banana-graDark pt-8 cursor-pointer'>
                CANCEL
              </div>
            </Link>
          </div>
        </form>
      </BigBoard>
    </>
  );
};

export default CreateAccount;
