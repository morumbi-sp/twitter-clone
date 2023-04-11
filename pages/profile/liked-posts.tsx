import React from 'react';
import NavButton from './../components/navButton';
import HeadTitle from './../components/headTitle';

import TweetItem from './../components/tweetItem';
import NavBox from './../components/navBox';

export default () => {
  return (
    <>
      <NavBox>
        <NavButton canGoBack={true} />
        <HeadTitle
          firstLine='your '
          boldText='liked Posts'
          secondLine='Check these again.'
        />
      </NavBox>
      <div className='fixed w-full top-[185px] overflow-auto bottom-0 bg-gray-100 rounded-t-3xl py-4 space-y-4'>
        {[1, 1, 1, 1, 1].map((_, i) => (
          <TweetItem
            key={i}
            name='Morumbi'
            username='@banana eater'
            time='10min'
            message='After logging in, in the Home Page, the user should see all the Tweets on the database, the user should also be able to POST a Tweet.'
          />
        ))}
      </div>
    </>
  );
};
