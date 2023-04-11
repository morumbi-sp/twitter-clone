import { classSwitch } from '../lib/client/utils';

interface Props {
  id: string;
  title: string;
  theme?: 'light' | 'dark';
}

const TextArea = ({ theme = 'light', title, id }: Props) => {
  return (
    <div className='flex flex-col space-y-2'>
      <label
        className={classSwitch(
          ' text-sm',
          theme === 'light' ? 'text-myText-light' : ' text-gray-300'
        )}
        htmlFor={id}
      >
        {title}
      </label>
      <textarea
        className='text-sm border-gray-200 rounded-xl focus:border-banana focus:ring-banana'
        id={id}
        rows={4}
      />
    </div>
  );
};

export default TextArea;
