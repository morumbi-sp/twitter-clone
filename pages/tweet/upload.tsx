import type { NextPage } from 'next';
import React from 'react';
import HeadTitle from '../../components/headTitle';
import NavBox from '../../components/navBox';
import BigBoard from '../../components/bigBoard';
import NavButton from '../../components/navButton';
import TextArea from '../../components/textArea';
import Button from '../../components/button';
import Link from 'next/link';

const UploadTweet: NextPage = () => {
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
        <form className='w-full px-7 pt-2 pb-6 space-y-12'>
          <TextArea title='Write Banana' id='banana' />
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
