"use client";

import { Avatar } from "@mantine/core";
import { ArrowLeft2, Edit } from "iconsax-reactjs";
import { GoDotFill } from "react-icons/go";
import { Button } from "../ui/mantine/button";
import { ChangePassword } from "./change-password";
import { useRouter } from "next/navigation";

const profileData1 = [
  {
    title: "Full Name",
    value: "John Doe",
  },

  {
    title: "Email",
    value: "john.doe@example.com",
  },
  {
    title: "Phone Number",
    value: "+234 806 789 0123",
  },
];
const profileData2 = [
  {
    title: "Residential Address",
    value: "No. 15, Katsina Road, Funtua, Katsina State, Nigeria",
  },
  {
    title: "Client ID",
    value: "001",
  },
  {
    title: "Preferred Warehouse",
    value: "Funtua Grain Storage",
  },
  {
    title: "Notification Preferences",
    value: ["Email", "SMS"],
  },
];

export const ProfileSetup = () => {
  const { back } = useRouter();
  return (
    <div className="flex flex-col h-full p-4 gap-4">
      <header className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span
            className="rounded-md hover:bg-[#f5f5f6] border-[0.5px] border-[#e8e8e8] w-fit flex items-center justify-center cursor-pointer p-2 bg-white"
            onClick={() => back()}
          >
            <ArrowLeft2 size={16} color="#000" />
          </span>
          <span className="flex flex-col">
            <h3 className="text-xl font-semibold text-[#182E6F]">Profile</h3>
            <p className="text-sm font-medium text-[#0E1C43]">
              Manage your profile information
            </p>
          </span>
        </div>
      </header>
      <article className="flex flex-col gap-3 bg-white rounded-xl p-4">
        <h3 className="text-base font-medium text-[#162964]">
          Personal Information
        </h3>
        <div className="items-start gap-4 justify-between flex">
          <div className="flex flex-col gap-1 flex-1">
            <header className="flex items-center gap-1.5">
              <Avatar size={40} radius="xl" color="blue" />
              <span className="flex flex-col">
                <p className="text-sm font-medium text-[#A2A2A2]">John Doe</p>
                <p className="text-xs font-medium text-[#A2A2A2]">
                  Client/Depositor
                </p>
                <p className="text-xs font-medium text-[#A2A2A2]">
                  Member since 2024
                </p>
              </span>
            </header>
            {profileData1.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <p className="text-xs font-medium text-[#A2A2A2]">
                  {item.title}
                </p>
                <p className="text-sm font-medium text-[#3D3D3C]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <Button
              variant="primary"
              classNames={{ root: "!rounded-lg !w-fit" }}
              leftSection={<Edit size={16} />}
            >
              Export Data
            </Button>
            {profileData2.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <p className="text-xs font-medium text-[#A2A2A2]">
                  {item.title}
                </p>
                {Array.isArray(item.value) ? (
                  <div className="flex flex-col gap-1">
                    {item.value.map((item, index) => (
                      <span
                        key={index}
                        className="text-sm font-medium text-[#3D3D3C] flex items-center gap-1"
                      >
                        <GoDotFill size={14} color="green" /> {item}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm font-medium text-[#3D3D3C]">
                    {item.value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </article>
      <ChangePassword />
    </div>
  );
};
