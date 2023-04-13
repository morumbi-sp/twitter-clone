import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { classSwitch } from '../lib/client/utils';
import { spawn } from 'child_process';

interface Props {
  id: string;
  title: string;
  theme?: 'light' | 'dark';
  type: 'text' | 'password' | 'email';
  register: UseFormRegisterReturn;
  error?: FieldError;
}

const Input = ({
  theme = 'light',
  title,
  id,
  type,
  register,
  error,
}: Props) => {
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
      <div>
        <input
          className='text-sm w-full border-gray-200 rounded-xl focus:border-banana focus:ring-banana'
          id={id}
          type={type}
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
    </div>
  );
};

export default Input;
