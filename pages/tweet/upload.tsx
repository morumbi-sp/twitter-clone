import type { NextPage } from 'next';
import React, { useEffect } from 'react';
import HeadTitle from '../../components/headTitle';
import NavBox from '../../components/navBox';
import BigBoard from '../../components/bigBoard';
import NavButton from '../../components/navButton';
import TextArea from '../../components/textArea';
import Button from '../../components/button';
import Link from 'next/link';
import useMutation from '../../lib/client/useMutation';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface CreateTweetForm {
  message: string;
}

interface CreateTweetResponse {
  ok: boolean;
}

const UploadTweet: NextPage = () => {
  const [postBanana, { data, loading }] =
    useMutation<CreateTweetResponse>('/api/tweet/upload');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTweetForm>();

  const onValid = (data: CreateTweetForm) => {
    if (loading) return;
    postBanana(data);
  };

  const router = useRouter();
  useEffect(() => {
    if (data?.ok) {
      router.push('/');
    }
  }, [data, router]);
  return (
    <div className=''>
      <NavBox>
        <NavButton canGoBack={true} />
        <HeadTitle
          firstLine='Throw '
          boldText='Your Banana.'
          secondLine='Somebody might Love it!'
        />
      </NavBox>
      <BigBoard>
        <form
          className='w-full px-7 pt-2 pb-6 space-y-12'
          onSubmit={handleSubmit(onValid)}
        >
          <TextArea
            register={register('message', {
              required: 'write down the message to throw.',
            })}
            title='Write Banana'
            id='banana'
            error={errors.message}
          />
          <Button text='Throw it!' key='post' />
        </form>
        <Link href='/'>
          <div className='text-center text-myText-medium cursor-pointer pb-4'>
            CANCEL
          </div>
        </Link>
      </BigBoard>
    </div>
  );
};

export default UploadTweet;
