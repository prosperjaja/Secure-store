"use client";

import { Button } from "../ui/mantine/button";

interface ProfileViewProps {
  onEdit: () => void;
}

export const ProfileView = ({ onEdit }: ProfileViewProps) => {
  return (
    <div className="flex flex-col gap-6">
      {/* Banner and Avatar Section */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden">
        {/* Banner */}
        <div className="h-40 bg-gradient-to-r from-[#E5E7EB] to-[#D1D5DB]"></div>

        {/* Avatar */}
        <div className="relative px-6 pb-6">
          <div className="absolute -top-16 left-6">
            <div className="w-32 h-32 rounded-full bg-[#D1D5DB] border-4 border-white"></div>
          </div>
        </div>
      </div>

      {/* Details Card */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-[#101828]">Details</h2>
          <Button
            variant="default"
            classNames={{
              root: "!rounded-lg !border-[#D0D5DD] !px-4 !py-2",
            }}
            onClick={onEdit}
          >
            Edit
          </Button>
        </div>

        <div className="flex flex-col gap-4">
          {/* First Name */}
          <div className="flex items-center justify-between py-3 border-b border-[#F3F4F6]">
            <span className="text-sm font-medium text-[#667085]">
              First name
            </span>
            <span className="text-sm text-[#101828]">John</span>
          </div>

          {/* Last Name */}
          <div className="flex items-center justify-between py-3 border-b border-[#F3F4F6]">
            <span className="text-sm font-medium text-[#667085]">
              Last name
            </span>
            <span className="text-sm text-[#101828]">Doe</span>
          </div>

          {/* Email Address */}
          <div className="flex items-center justify-between py-3 border-b border-[#F3F4F6]">
            <span className="text-sm font-medium text-[#667085]">
              Email address
            </span>
            <span className="text-sm text-[#101828]">Johndoe@gmail.com</span>
          </div>

          {/* Phone Number */}
          <div className="flex items-center justify-between py-3 border-b border-[#F3F4F6]">
            <span className="text-sm font-medium text-[#667085]">
              Phone Number
            </span>
            <span className="text-sm text-[#101828]">+234 800 000 0000</span>
          </div>

          {/* Date of Birth */}
          <div className="flex items-center justify-between py-3 border-b border-[#F3F4F6]">
            <span className="text-sm font-medium text-[#667085]">
              Date of Birth
            </span>
            <span className="text-sm text-[#101828]">06/10/1990</span>
          </div>

          {/* Occupation */}
          <div className="flex items-center justify-between py-3 border-b border-[#F3F4F6]">
            <span className="text-sm font-medium text-[#667085]">
              Occupation
            </span>
            <span className="text-sm text-[#101828]">Business Man</span>
          </div>

          {/* Residential Address */}
          <div className="flex items-center justify-between py-3">
            <span className="text-sm font-medium text-[#667085]">
              Residential address
            </span>
            <span className="text-sm text-[#101828]">Lekki Phase 1, Lagos</span>
          </div>
        </div>
      </div>
    </div>
  );
};
