import { motion } from 'framer-motion';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const LongBoard = ({ children }: Props) => {
  return (
    <motion.div
      className='overflow-auto h-[655px] bg-gray-100 rounded-t-3xl py-4 space-y-4'
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        ease: 'easeOut',
        type: 'spring',
        stiffness: 260,
        damping: 23,
      }}
    >
      {children}
    </motion.div>
  );
};

export default LongBoard;
