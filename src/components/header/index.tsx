import React, { useState } from 'react';
import { LuLibraryBig, LuUser } from "react-icons/lu";
import { HeaderLinkItem } from '../header-link-item';
import { Avatar } from 'antd';
import colors from 'tailwindcss/colors';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';

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

const menuItems: MenuProps['items'] = [
  {
    label: "Profile",
    key: '0',
  },
  {
    label: "Submit Quest",
    key: '1',
  },
  {
    label: "Logout",
    key: '2',
  },
];

export const Header = () => {
  const [active, setActive] = useState<number>(0);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  console.log(menuOpen);

  return <div className='flex flex-row h-16 w-full bg-gray-400 justify-between px-4'>
    <div className='flex flex-row items-center'>
      {
        headerItems.map((item, index) => (
          <HeaderLinkItem title={item.title} icon={item.icon} active={active === index} onClick={() => setActive(index)} />
        ))
      }
    </div>

    <div className='flex h-full items-center pr-4' >
      <Dropdown menu={{ items: menuItems }} onOpenChange={(isOpen) => setMenuOpen(isOpen)} trigger={['click']}>
        <Avatar size={"large"} icon={<LuUser size={20} color={colors.white} />} className="cursor-pointer hover:bg-gray-600 duration-100" style={{ backgroundColor: menuOpen ? colors.gray[600] : "" }} onClick={(e) => e?.preventDefault()} />
      </Dropdown>
    </div>
  </div>;
};
