import React from 'react';
import NavButton from '@/components/navButton';
import HeadTitle from '@/components/headTitle';

import TweetItem from '@/components/tweetItem';
import NavBox from '@/components/navBox';
import LongBoard from '@/components/longBoard';
import useSWR from 'swr';
import { BananasResponse } from '@/pages';

export default () => {
  const { data } = useSWR<BananasResponse>('/api/users/myPosts');
  console.log(data);
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
        {data?.bananas
          ?.slice()
          .reverse()
          .map((banana) => (
            <TweetItem
              key={banana.id}
              name={banana.user.userName}
              username={banana.user.userNick}
              time={banana.createdAt.toString()}
              message={banana.message}
              id={banana.id}
              avatar={banana.user.avatar}
            />
          ))}
      </LongBoard>
    </>
  );
};
