import type { NextPage } from 'next';
import React from 'react';
import HeadTitle from '../components/headTitle';
import NavBox from '../components/navBox';
import Button from '../components/button';
import BigBoard from '../components/bigBoard';
import NavButton from '../components/navButton';

const DetailTweet: NextPage = () => {
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
          <div className=' flex items-center space-x-3 '>
            <div className='w-16 h-16 bg-slate-500 rounded-full' />
            <div className='flex flex-col items-center'>
              <div className='text-2xl font-bold text-myText-dark'>Name</div>
              <div className='text-xs text-myText-light'>@User Name</div>
            </div>
          </div>
          <div className='px-2 flex justify-between mt-10 mb-20 text-myText-medium text-sm '>
            <div className='flex flex-col items-center space-y-2'>
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
            </div>
            <div className='flex flex-col items-center space-y-2'>
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
            </div>
            <div className='flex flex-col items-center space-y-2'>
              <button className='w-16 h-16 bg-banana-graDark rounded-full'>
                <svg
                  className='h-12 w-12'
                  stroke='currentColor'
                  version='1.1'
                  viewBox='-110 0 700 500'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='m452.99 296.5-78.246 78.25c-13.664 13.672-35.828 13.672-49.492 0l-78.246-78.25-138.59 138.59c-2.2266 2.2266-3.418 5.2148-3.418 8.2461 0 6.4414 5.2266 11.668 11.668 11.668h466.66c6.4414 0 11.668-5.2266 11.668-11.668 0-3.0312-1.1914-6.0195-3.418-8.2461z'
                    fillRule='evenodd'
                  />
                  <path d='m469.5 280 125.5 125.5v-251z' fillRule='evenodd' />
                  <path
                    d='m105 405.5 125.5-125.5-125.5-125.5z'
                    fillRule='evenodd'
                  />
                  <path
                    d='m595 116.67c0 3.0312-1.1914 6.0195-3.418 8.2461 0 0-233.33 233.34-233.33 233.34-4.5508 4.5586-11.949 4.5586-16.5 0 0 0-233.33-233.34-233.33-233.34-2.2266-2.2266-3.418-5.2148-3.418-8.2461 0-6.4414 5.2266-11.668 11.668-11.668h466.66c6.4414 0 11.668 5.2266 11.668 11.668z'
                    fillRule='evenodd'
                  />
                </svg>
              </button>
              <span>Messages</span>
            </div>
          </div>
          <Button text='Edit Profile' />
        </div>
      </BigBoard>
    </>
  );
};

export default DetailTweet;
