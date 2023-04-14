import type { NextApiHandler, NextApiRequest, NextPage } from 'next';
import React from 'react';
import HeadTitle from '@/components/headTitle';
import NavBox from '@/components/navBox';
import Button from '@/components/button';
import BigBoard from '@/components/bigBoard';
import NavButton from '@/components/navButton';
import Link from 'next/link';
import { motion } from 'framer-motion';
import useUser from '@/lib/client/useUser';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { NextRequest } from 'next/server';

const DetailTweet: NextPage = () => {
  const { user } = useUser();
  const router = useRouter();

  const handleLogout = () => {
    router.push('/log-in');
  };

  return (
    <>
      <NavBox>
        <NavButton canGoBack={true} />
        <HeadTitle
          firstLine='Check your '
          boldText='History'
          secondLine='And change it.'
        />
      </NavBox>
      <BigBoard top='wide'>
        <div className='w-full px-5 pb-2 pt-2'>
          <div className='flex flex-col items-center'>
            <img
              src={`/${user?.avatar}.png`}
              className='w-20 h-20 rounded-full  border-accent border mt-5'
            />
          </div>
          <div className='flex flex-col items-center mt-3'>
            <div className='text-2xl font-bold text-myText-dark'>
              {user?.userName}
            </div>
            <div className='text-xs text-myText-light'>{user?.userNick}</div>
          </div>

          <div className='px-2 flex justify-around mt-10 mb-20 text-myText-medium text-sm '>
            <Link href='/profile/my-posts'>
              <motion.div
                className='flex flex-col items-center space-y-2'
                whileHover={{ scale: 1.1 }}
              >
                <button className='w-16 h-16 bg-banana-graDark rounded-full flex items-center justify-center'>
                  <svg
                    className='h-12 w-12'
                    stroke='currentColor'
                    version='1.1'
                    viewBox='70 0 600 570'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='m573.07 448.47c-14.469 0.92969-42.93 34.996-70 17.73-27.07-17.266-40.137-63-40.137-63s11.195 15.863 36.863 8.3984c25.672-7.4648 31.762-61.164 30.363-80.93-1.2227-17.23-3.4375-14.035-18.375 1.832-14.668 15.578-35.941 45.711-56.594 40.152 0.82812 6.9102 1.5586 12.242 1.5586 12.242-4.082-10.266-6.0039-45.422-6.0039-45.422-2.6953-29.488-5.918-72.672-5.0742-103.33 1.3984-50.863-12.141-87.266-27.07-94.266-14.93-7-22.859-13.535-23.328-42s1.8633-42-13.535-42c-15.398 0-21 2.3359-19.602 10.266 1.3984 7.9297 3.2656 14.465 3.2656 14.465s10.266 36.871-2.8008 56.934c-13.066 20.066-32.664 31.734-31.266 99.863 1.4062 68.133 11.664 179.66-77.473 189-89.137 9.3359-105-25.672-119.46-35-14.465-9.3281-21.465 7-21.465 7s9.8008 0 25.664 21.934c15.863 21.934 53.199 57.863 131.6 42 78.398-15.863 86.336-74.199 86.336-74.199 0 0.003907 22.395 104.54 111.07 109.2 53.199 5.1367 81.574-11.547 94.852-24.035 12.125-11.402 23.684-18.895 27.883-14.23 0 0-2.7969-13.531-17.266-12.602zm-46.496-125.23c2.4062 2.9609 1.9258 14.863 1.9258 14.863-3.7578-5.9258-14.348-3.8516-14.348-3.8516 0-0.003906 9.2188-14.961 12.422-11.012zm-397.66 84.973c-3.6719-6.4844-13.184-8.8125-13.184-8.8125s3.9648-7.043 10.383-7.5156c6.418-0.46875 12.254 6.7656 12.254 6.7656-6.0703-0.23828-9.4531 9.5625-9.4531 9.5625zm435.89 61.488c4.6367-8.5742 0.78906-16.801 0.78906-16.801 14.09-9.1016 22.137 5.0742 22.137 5.0742-8.3086-3.582-22.926 11.727-22.926 11.727z' />
                  </svg>
                </button>
                <span>My Posts</span>
              </motion.div>
            </Link>
            <Link href='/profile/liked-posts'>
              <motion.div
                className='flex flex-col items-center space-y-2'
                whileHover={{ scale: 1.1 }}
              >
                <button className='w-16 h-16 bg-banana-graDark rounded-full flex items-center justify-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 21'
                    strokeWidth='1'
                    className='h-10 w-10'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                    />
                  </svg>
                </button>
                <span>Likes</span>
              </motion.div>
            </Link>

            <motion.div
              className='flex flex-col items-center space-y-2'
              whileHover={{ scale: 1.1 }}
            >
              <button
                className='w-16 h-16 bg-banana-graDark rounded-full flex items-center justify-center'
                onClick={handleLogout}
              >
                <svg
                  className='h-11 w-11'
                  stroke='currentColor'
                  version='1.1'
                  viewBox='0 0 700 550'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='m298.59 8.8281c-55.707 13.676-111.44 27.258-167.19 40.742-4.8438 1.1797-5.0742 4.0234-5.0742 7.875-0.10156 58.246-0.24609 116.5-0.42578 174.75-0.16016 84.367-0.32422 168.73-0.49219 253.07 0 5.0625 1.1602 7.5703 6.332 9.3086 62.855 21.086 125.66 42.332 188.41 63.734 1.6953 0.57031 3.4453 0.97266 6.0039 1.6836 0.21875-4.0703 0.55859-7.6562 0.58984-11.188 0.59766-60.434 1.1758-120.87 1.7383-181.3 1.0664-102.61 2.1602-205.21 3.2812-307.82 0.21875-19.895 0.61328-39.781 0.92969-59.676h-1.0938c-10.98 2.9375-21.938 6.0977-33.008 8.8242zm9.9297 286.91c-5.3906 5.4688-13.234 5.1094-18.035-1.1719-5.5469-7.2305-6.3125-15.312-2.7461-23.648 2.2539-5.25 5.8633-9.1875 13.891-9.5391 1.5 0.84375 4.7031 1.9023 6.8906 4.0156 7.6562 7.3281 7.4375 22.836 0 30.328z' />
                  <path d='m432.86 64.434c4.8789 0 6.6289 1.1602 6.5625 6.3672-0.24219 33.227-0.078125 66.469-0.078125 99.707v11.223c8.75 0 17.621 0.14062 26.25-0.24219 0.83203 0 2.1875-3.3594 2.1875-5.1719 0.16406-20.629 0.12109-41.266 0.12109-61.895v-72.312c0-3.2812 0-5.8633-4.7461-5.8281-33.227 0.1875-66.469 0.097656-99.695 0.12109v-0.003906c-0.94141 0.042968-1.8789 0.13281-2.8125 0.27344v27.859h6.5625c21.844 0 43.719 0.13281 65.648-0.097656z' />
                  <path d='m462.03 378.44c-7.4141 0.29688-15.008 0.078125-22.664 0.078125l0.003906 99.453h-83.125v28.754c2.1875 0.097656 3.3477 0.27344 4.9453 0.27344 33.566 0 67.102-0.097656 100.62 0.13281 4.9531 0 6.1016-1.5078 6.082-6.168-0.15234-38.863-0.15234-77.727 0-116.58 0.09375-4.5977-1.3711-6.0742-5.8672-5.9414z' />
                  <path d='m574.9 280-113.34-65.449v43.574h-77.656v43.75h77.656v43.574z' />
                </svg>
              </button>
              <span>Log Out</span>
            </motion.div>
          </div>
          <Link href='profile/edit'>
            <div>
              <Button text='Edit Profile' />
            </div>
          </Link>
        </div>
      </BigBoard>
    </>
  );
};

export default DetailTweet;
