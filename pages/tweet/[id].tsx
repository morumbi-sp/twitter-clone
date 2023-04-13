import type { NextPage } from 'next';
import React from 'react';
import HeadTitle from '../../components/headTitle';
import NavBox from '../../components/navBox';
import Button from '../../components/button';
import BigBoard from '../../components/bigBoard';
import NavButton from '../../components/navButton';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { BananaWithUser } from '..';

interface BananaResponse {
  ok: boolean;
  banana: BananaWithUser;
  isLiked: boolean;
}

const DetailBanana: NextPage = () => {
  const router = useRouter();
  const { data, mutate } = useSWR<BananaResponse>(
    `/api/tweet/${router.query.id}`
  );
  return (
    <>
      <NavBox>
        <NavButton canGoBack={true} />
        <HeadTitle
          firstLine='Check it, '
          boldText='Like it,'
          secondLine='Send a message.'
        />
      </NavBox>
      <BigBoard top='wide'>
        <div className='px-5 flex flex-col items-center space-y-4'>
          <div className='w-20 h-20 bg-slate-500 rounded-full mt-5' />
          <div className='flex flex-col items-center'>
            <div className='text-2xl font-bold text-myText-dark'>
              {data?.banana?.user?.userName}
            </div>
            <div className='text-xs text-myText-light'>
              {data?.banana?.user?.userNick}
            </div>
          </div>
          <div className='text-dark text-[15px]'>{data?.banana?.message}</div>

          <div className='pb-4 pt-4 flex justify-between items-center w-full space-x-4'>
            <Button text='Send Message'></Button>

            <button className='pr-1 fill-transparent stroke-dark'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                strokeWidth='1'
                className='h-9 w-9'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                />
              </svg>
            </button>
          </div>
        </div>
      </BigBoard>
    </>
  );
};

export default DetailBanana;
