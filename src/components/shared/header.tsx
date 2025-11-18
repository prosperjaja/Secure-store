"use client";

import { IoMailOutline } from "react-icons/io5";

import Breadcrumbs from "./bread-crumbs";
import { NotificationBing } from "iconsax-reactjs";
import { HeaderMenu } from "./header-menu";
import { RoleSwitcher } from "./role-switcher";

export const Header = () => {
  return (
    <header className="w-full p-3 bg-[#f5f5f6] flex items-center gap-5 justify-between border-l-[0.5px] border-l-gray-400  border-b border-b-gray-400">
      <Breadcrumbs />
      <div className="flex items-center gap-4">
        <RoleSwitcher />
        <IoMailOutline size={18} color="#172d71" className="cursor-pointer" />
        <NotificationBing
          size={18}
          color="#172d71"
          className="cursor-pointer"
        />
        <HeaderMenu />
      </div>
    </header>
  );
};
