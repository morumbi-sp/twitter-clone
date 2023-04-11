import React from 'react';
import { classSwitch } from '../../lib/client/utils';

interface Props {
  theme?: 'light' | 'dark';
  children: React.ReactNode;
  top?: 'close' | 'wide';
}

const BigBoard = ({ top = 'close', children, theme = 'light' }: Props) => {
  return (
    <div
      className={classSwitch(
        'shadow-lg fixed h-fit inset-x-4 overflow-auto bottom-0 rounded-3xl py-4 space-y-4 flex flex-col items-center',
        theme === 'light' ? 'bg-gray-100' : 'bg-dark',
        top === 'close' ? 'top-[155px]' : 'top-[185px]'
      )}
    >
      {children}
    </div>
  );
};

export default BigBoard;
