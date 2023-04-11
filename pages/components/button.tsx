import { classSwitch } from '../../lib/client/utils';

interface Props {
  text: string;
  theme?: 'dark' | 'light';
}

const Button = ({ text, theme = 'dark' }: Props) => {
  return (
    <button
      className={classSwitch(
        'w-full py-2 rounded-xl  font-semibold focus:ring-2  focus:ring-offset-2 flex items-center px-3 justify-center ',
        theme === 'dark'
          ? 'bg-banana-graDark text-white hover:bg-accent focus:ring-accent'
          : 'bg-white text-gray-500  hover:border-accent  hover:text-gray-800 focus:ring-accent border hover:border-opacity-100 border-banana'
      )}
    >
      {text}
    </button>
  );
};

export default Button;
