import React from 'react';

interface Props {
  children: React.ReactNode;
}

const NavBox = ({ children }: Props) => {
  return (
    <div className='pt-8 h-full fixed top-0 bg-gradient-to-br from-banana to-banana-graDark w-full'>
      {children}
    </div>
  );
};

export default NavBox;
