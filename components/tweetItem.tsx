import Link from 'next/link';
import { motion } from 'framer-motion';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

interface Props {
  name: string;
  username: string;
  time: string;
  message: string;
  avatar?: number;
  id: number;
}

const TweetItem = ({ name, username, time, message, avatar, id }: Props) => {
  dayjs.extend(relativeTime);
  const relativeTimeStr = dayjs(time).fromNow();

  return (
    <Link href={`/tweet/${id}`}>
      <motion.div
        className='border-b-[1px] border-gray-300 pb-4 px-4 cursor-pointer'
        whileHover={{ scale: 1.04 }}
      >
        <div className='flex justify-between items-center'>
          <div className='flex items-center space-x-4'>
            <img
              src={`/${avatar}.png`}
              className='w-16 h-16 rounded-full border-accent border'
            />
            <div>
              <div className='text-myText-darkest'>{name}</div>
              <div className='text-myText-light text-xs'>{username}</div>
            </div>
          </div>
          <div className='text-myText-light text-xs'>{relativeTimeStr}</div>
        </div>
        <div className='text-myText-darkest text-sm px-1 mt-2'>{message}</div>
      </motion.div>
    </Link>
  );
};

export default TweetItem;
