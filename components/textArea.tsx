import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { classSwitch } from '../lib/client/utils';

interface Props {
  id: string;
  title: string;
  theme?: 'light' | 'dark';
  register: UseFormRegisterReturn;
  error?: FieldError;
}

const TextArea = ({ theme = 'light', title, id, register, error }: Props) => {
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
        {...register}
      />
      {error ? (
        <div className='text-accent text-xs text-center pr-2 mt-1'>
          {error.message}
        </div>
      ) : (
        <div className='text-transparent text-xs'>0</div>
      )}
    </div>
  );
};

export default TextArea;
