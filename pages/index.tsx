import React from 'react';
import NavButton from './components/navButton';
import HeadTitle from './components/headTitle';
import FloatBtn from './components/floatBtn';
import TweetItem from './components/tweetItem';
import NavBox from './components/navBox';
import { motion } from 'framer-motion';

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
      <motion.div
        className='overflow-auto h-[655px] bg-gray-100 rounded-t-3xl py-4 space-y-4'
        initial={{ opacity: 0, y: '100%' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          ease: 'easeOut',
          type: 'spring',
          stiffness: 260,
          damping: 23,
        }}
      >
        {[1, 1, 1, 1, 1].map((_, i) => (
          <TweetItem
            key={i}
            name='Morumbi'
            username='@banana eater'
            time='10min'
            message='After logging in, in the Home Page, the user should see all the Tweets on the database, the user should also be able to POST a Tweet.'
          />
        ))}
      </motion.div>
      <div className='relative'>
        <FloatBtn />
      </div>
    </>
  );
};
