import React from 'react';
import NavButton from '@/components/navButton';
import HeadTitle from '@/components/headTitle';

import TweetItem from '@/components/tweetItem';
import NavBox from '@/components/navBox';
import LongBoard from '@/components/longBoard';
import useSWR from 'swr';

export default () => {
  const { data } = useSWR('/api/users/likes');
  console.log(data);
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
      <LongBoard>
        {data?.likes?.map((like) => (
          <TweetItem
            key={like.id}
            name={like.banana.user.userName}
            username={like.banana.user.userNick}
            time={like.banana.createdAt.toString()}
            message={like.banana.message}
            id={like.id}
            avatar={like.banana.user.avatar}
          />
        ))}
      </LongBoard>
    </>
  );
};
