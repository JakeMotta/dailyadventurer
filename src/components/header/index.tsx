import React, { useState } from "react";
import { LuLibraryBig, LuUser, LuMenu } from "react-icons/lu";
import { HeaderLinkItem } from "../header-link-item";
import { Avatar, Drawer } from "antd";
import colors from "tailwindcss/colors";
import type { DrawerProps, MenuProps } from "antd";
import { Dropdown } from "antd";

const headerItems = [
  {
    title: "Past",
    icon: <LuLibraryBig size={20} />,
  },
  {
    title: "Daily",
    icon: <LuLibraryBig size={20} />,
  },
  {
    title: "Weekly",
    icon: <LuLibraryBig size={20} />,
  },
  {
    title: "Monthly",
    icon: <LuLibraryBig size={20} />,
  },
];

const menuItems: MenuProps["items"] = [
  {
    label: "Profile",
    key: "0",
  },
  {
    label: "Submit Quest",
    key: "1",
  },
  {
    label: "Logout",
    key: "2",
  },
];

export const Header = () => {
  const [active, setActive] = useState<number>(0);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="flex flex-row h-16 w-full bg-gray-800 border-b-[3px] border-primary justify-center text-white">
      <div className="flex flex-row h-full w-full justify-between max-w-[1024px]">
        <div className="hidden sm:flex flex-row items-center">
          {headerItems.map((item, index) => (
            <HeaderLinkItem
              title={item.title}
              icon={item.icon}
              active={active === index}
              onClick={() => setActive(index)}
            />
          ))}
        </div>

        <div className="flex sm:hidden flex-row items-center">
          <Avatar
            size={"large"}
            icon={<LuMenu size={20} color={colors.white} />}
            className="cursor-pointer hover:bg-gray-600 duration-100"
            style={{ backgroundColor: menuOpen ? colors.gray[600] : "" }}
            onClick={showDrawer}
          />
        </div>

        <div className="flex h-full items-center pr-4">
          <Dropdown
            menu={{ items: menuItems }}
            onOpenChange={(isOpen) => setMenuOpen(isOpen)}
            trigger={["click"]}
          >
            <Avatar
              size={"large"}
              icon={<LuUser size={20} color={colors.white} />}
              className="cursor-pointer hover:bg-gray-600 duration-100"
              style={{ backgroundColor: menuOpen ? colors.gray[600] : "" }}
              onClick={(e) => e?.preventDefault()}
            />
          </Dropdown>
        </div>

        <Drawer
          placement={"left"}
          closable={false}
          onClose={onClose}
          open={open}
          key={"left"}
        >
          {headerItems.map((item, index) => (
            <div className="flex flex-row items-center">
              {item.icon}
              {item.title}
            </div>
          ))}
        </Drawer>
      </div>
    </div>
  );
};
