import { motion } from 'framer-motion';

const FloatBtn = () => {
  return (
    <motion.div
      className='absolute bottom-12 border-[1px] shadow-lg right-8 w-[70px] h-[70px] bg-gradient-to-br from-banana to-banana-graDark aspect-square rounded-full cursor-pointer'
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 14,
        delay: 0.1,
      }}
      whileHover={{ scale: 1.2 }}
    >
      <svg
        className='h-15 w-15 fill-dark'
        version='1.1'
        viewBox='210 130 300 300'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='m426.16 188.63c8.4648 87.832-83.402 149.01-164.29 141.41-7.4727 4.5625-10.516 10.055-6.2852 18.188 91.668 65.742 224.81-16.27 178.45-115.68-1.2578-11.707 0.99219-22.949 12.301-33.07-4.1016-8.8633-10.648-12.832-20.172-10.848z'
          fillRule='evenodd'
        />
      </svg>
      <div className='absolute top-2 left-5 text-dark text-lg'>+</div>
    </motion.div>
  );
};

export default FloatBtn;
