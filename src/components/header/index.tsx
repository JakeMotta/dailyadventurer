import React, { useState } from 'react';
import { LuLibraryBig, LuUser } from "react-icons/lu";
import { HeaderLinkItem } from '../header-link-item';
import colors from 'tailwindcss/colors';

const headerItems = [
  {
    title: 'Past',
    icon: <LuLibraryBig size={20} />,
  },
  {
    title: 'Daily',
    icon: <LuLibraryBig size={20} />,
  },
  {
    title: 'Weekly',
    icon: <LuLibraryBig size={20} />,
  },
  {
    title: 'Monthly',
    icon: <LuLibraryBig size={20} />,
  },
]

export const Header = () => {
  const [active, setActive] = useState<number>(0);

  return <div className='flex flex-row h-16 w-full bg-gray-400 justify-between px-4'>
    <div className='flex flex-row items-center'>
      {
        headerItems.map((item, index) => (
          <HeaderLinkItem title={item.title} icon={item.icon} active={active === index} onClick={() => setActive(index)} />
        ))
      }
    </div>

    <div className='flex h-full items-center pr-4'>
      <div className='flex flex-row items-center justify-center rounded-full bg-gray-500 w-10 h-10 hover:bg-gray-600 cursor-pointer duration-300'>
        <LuUser size={20} color={colors.white} />
      </div>
    </div>
  </div>;
};
