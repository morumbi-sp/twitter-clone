import { classSwitch } from '../../lib/client/utils';

interface Props {
  text: string;
  type?: 'fill' | 'empty';
}

const Button = ({ text, type = 'fill' }: Props) => {
  return (
    <button
      className={classSwitch(
        'w-full py-2 rounded-xl  font-semibold focus:ring-2  focus:ring-offset-2 ',
        type === 'fill'
          ? 'bg-banana text-white hover:bg-[#FE9102] focus:ring-[#FE9102]'
          : 'bg-white text-gray-500  hover:border-[#FE9102]  hover:text-gray-800 focus:ring-[#FE9102] border hover:border-opacity-100 border-banana'
      )}
    >
      {text}
    </button>
  );
};

export default Button;
