import React from 'react';
import HeadTitle from '@/components/headTitle';
import FloatBtn from '@/components/floatBtn';
import TweetItem from '@/components/tweetItem';
import NavBox from '@/components/navBox';
import LongBoard from '@/components/longBoard';
import Link from 'next/link';
import useUser from '@/lib/client/useUser';
import useSWR from 'swr';
import { Banana, User } from '@prisma/client';
import NavButton from '@/components/navButton';

export interface BananaWithUser extends Banana {
  user: User;
}

export interface BananasResponse {
  ok: boolean;
  bananas: BananaWithUser[];
}

export default () => {
  const { data } = useSWR<BananasResponse>('/api/tweet');
  const { user } = useUser();

  return (
    <>
      <NavBox>
        <NavButton />
        <HeadTitle
          firstLine='Hello,'
          boldText={user?.userName}
          secondLine='Here are bananas for you.'
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
              avatar={banana?.user.avatar}
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
