import React from 'react';

interface Props {
  children: React.ReactNode;
}

const NavBox = ({ children }: Props) => {
  return <div className='pt-8 w-full h-[200px]'>{children}</div>;
};

export default NavBox;
