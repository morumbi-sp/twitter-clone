import React from 'react';
import NavButton from '../components/navButton';
import HeadTitle from '../components/headTitle';
import FloatBtn from '../components/floatBtn';
import TweetItem from '../components/tweetItem';
import NavBox from '../components/navBox';
import LongBoard from '../components/longBoard';
import Link from 'next/link';

export default () => {
  return (
    <>
      <NavBox>
        <NavButton />
        <HeadTitle
          firstLine='Hello,'
          boldText='Morumbi'
          secondLine='Here are bananas for you.'
        />
      </NavBox>
      <LongBoard>
        {[1, 1, 1, 1, 1].map((_, i) => (
          <TweetItem
            key={i}
            name='Morumbi'
            username='@banana eater'
            time='10min'
            message='After logging in, in the Home Page, the user should see all the Tweets on the database, the user should also be able to POST a Tweet.'
          />
        ))}
      </LongBoard>
      <Link href='/tweet/upload'>
        <div className='relative'>
          <FloatBtn />
        </div>
      </Link>
    </>
  );
};
