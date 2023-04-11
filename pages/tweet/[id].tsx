import type { NextPage } from 'next';
import React from 'react';
import HeadTitle from './../components/headTitle';
import NavBox from './../components/navBox';
import Input from './../components/input';
import Button from './../components/button';
import BigBoard from './../components/bigBoard';
import NavButton from '../components/navButton';

const DetailTweet: NextPage = () => {
  return (
    <>
      <NavBox>
        <NavButton />
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
            <div className='text-2xl font-bold text-myText-dark'>Name</div>
            <div className='text-sm text-myText-light'>@User Name</div>
          </div>
          <div className=''>
            'After logging in, in the Home Page, the user should see all the
            Tweets on the database, the user should also be able to POST a
            Tweet.'
          </div>
          <div className='bg-slate-400 rounded-xl w-full h-36'>IMAGE</div>
          <div className='pb-4 pt-4 flex justify-between items-center w-full px-10'>
            <button
            //   onClick={onFavClick}
            //   className={classSwitch(
            //     'rounded-md p-3  transition-all  hover:shadow-sm',
            //     data?.isLiked
            //       ? 'text-red-500 hover:bg-red-100 hover:text-red-600'
            //       : 'text-gray-400 hover:bg-gray-100 hover:text-gray-500 '
            //   )}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                // fill={data?.isLiked ? 'currentColor' : 'none'}
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='currentColor'
                className='h-10 w-10'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                />
              </svg>
            </button>
            <button>
              <svg
                className='h-12 w-12'
                stroke='currentColor'
                version='1.1'
                viewBox='0 0 700 600'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='m70.066 232.35 107.84 71.523 439.27-272.41z' />
                <path d='m301.3 396.42-42.777 132.11 102.78-92.297-59.27-39.332z' />
                <path d='m295.14 386.97c0.066407-0.097656 0.34375-0.48438 0.4375-0.58594l320.11-343.88-432.75 268.55 66.324 217 45.34-140c0.15234-0.375 0.33203-0.74219 0.53516-1.0938z' />
                <path d='m315.38 395.02 149.46 99.855 165.1-454.81-324.37 348.44z' />
              </svg>
            </button>
          </div>
        </div>
      </BigBoard>
    </>
  );
};

export default DetailTweet;
