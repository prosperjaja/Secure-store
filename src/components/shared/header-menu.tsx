"use client";

import { Avatar, Menu } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { LogoutCurve, User } from "iconsax-reactjs";
import Link from "next/link";

export const HeaderMenu = () => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Menu
      opened={opened}
      width="target"
      onChange={toggle}
      classNames={{
        dropdown:
          "p-0 !rounded-lg !w-[200px] !shadow-[0_4px_8px_2px_rgba(0,0,0,0.1)]",
        item: "p-2 hover:bg-[#f5f5f6]",
      }}
      transitionProps={{ transition: "rotate-right", duration: 150 }}
    >
      <Menu.Target>
        <div className="flex items-center border-l-gray-400 border-l-[0.5px] px-2 py-1 cursor-pointer gap-2 hover:bg-[#f1f1f4] rounded-tr-lg rounded-br-lg">
          <Avatar color="blue" size="sm" radius="xl" />
          <span className="flex flex-col">
            <p className="text-[#172d71] text-[14px] font-medium leading-3">
              John Doe
            </p>
            <p className="text-[#172d71] text-[12px] font-medium">
              john.doe@example.com
            </p>
          </span>
        </div>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>
          <span className="flex items-center gap-2">
            <User size={18} color="#172d71" />
            <Link
              href="/profile"
              className="text-[#172d71] text-[14px] font-medium"
            >
              Profile
            </Link>
          </span>
        </Menu.Item>
        <Menu.Item>
          <span className="flex items-center gap-2">
            <LogoutCurve size={18} color="#172d71" />
            <span className="text-[#172d71] text-[14px] font-medium">
              Logout
            </span>
          </span>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
