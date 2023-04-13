import React from 'react';
import NavButton from '@/components/navButton';
import HeadTitle from '@/components/headTitle';

import TweetItem from '@/components/tweetItem';
import NavBox from '@/components/navBox';
import LongBoard from '@/components/longBoard';

export default () => {
  return (
    <>
      <NavBox>
        <NavButton canGoBack={true} />
        <HeadTitle
          firstLine='Here, '
          boldText=' Your Posts'
          secondLine='Your history.'
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
    </>
  );
};
