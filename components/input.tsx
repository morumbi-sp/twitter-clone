import { classSwitch } from '../lib/client/utils';

interface Props {
  id: string;
  title: string;
  theme?: 'light' | 'dark';
  type: 'text' | 'password';
}

const Input = ({ theme = 'light', title, id, type }: Props) => {
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
      <input
        className='text-sm border-gray-200 rounded-xl focus:border-banana focus:ring-banana'
        id={id}
        type={type}
      />
    </div>
  );
};

export default Input;
