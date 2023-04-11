import React from 'react';
import { classSwitch } from '../lib/client/utils';
import { motion } from 'framer-motion';

interface Props {
  theme?: 'light' | 'dark';
  children: React.ReactNode;
  top?: 'close' | 'wide';
}

const BigBoard = ({ top = 'close', children, theme = 'light' }: Props) => {
  return (
    <motion.div
      key={'bigBoard'}
      className={classSwitch(
        'shadow-lg mx-4 h-fit rounded-3xl py-4 space-y-4 flex flex-col items-center',
        theme === 'light' ? 'bg-gray-100' : 'bg-dark',
        top === 'close' ? 'top-[155px]' : 'top-[185px]'
      )}
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default BigBoard;
