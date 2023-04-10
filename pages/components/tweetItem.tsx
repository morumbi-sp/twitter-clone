interface Props {
  name: string;
  username: string;
  time: string;
  message: string;
  image?: string;
}

const TweetItem = ({ name, username, time, message, image }: Props) => {
  return (
    <div className='border-b-[1px] border-gray-300 pb-4 px-4'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center space-x-4'>
          <div className='h-12 rounded-full aspect-square bg-slate-500'></div>
          <div>
            <div className='text-myText-darkest'>{name}</div>
            <div className='text-myText-light text-xs'>{username}</div>
          </div>
        </div>
        <div className='text-myText-light text-xs'>{time}</div>
      </div>
      <div className='text-myText-darkest text-sm px-1 mt-2'>{message}</div>
      <div>{image}</div>
    </div>
  );
};

export default TweetItem;
