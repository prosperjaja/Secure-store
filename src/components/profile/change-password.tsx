"use client";

import { InfoCircle, TickCircle } from "iconsax-reactjs";
import { Button } from "../ui/mantine/button";
import { PasswordInput } from "../ui/mantine/password-input";

const passwordRequirements = [
  "Password must be at least 8 characters long",
  "Password must contain at least one uppercase letter",
  "Password must contain at least one lowercase letter",
  "Password must contain at least one number",
  "Password must contain at least one special character",
];

export const ChangePassword = () => {
  return (
    <div className="flex flex-col h-full p-4 gap-4 bg-white rounded-xl w-full">
      <h3 className="text-base font-medium text-[#162964]">Change Password</h3>
      <figure className="flex items-start gap-8 w-full">
        <div className="flex flex-col gap-2.5 w-full">
          <PasswordInput
            variant="default"
            placeholder="Enter Current Password"
            label={
              <p className="text-sm font-medium text-[#A2A2A2]">
                Current Password
              </p>
            }
            classNames={{ input: "!rounded-lg" }}
            w="100%"
          />
          <PasswordInput
            variant="default"
            placeholder="Enter New Password"
            label={
              <p className="text-sm font-medium text-[#A2A2A2]">New Password</p>
            }
            classNames={{ input: "!rounded-lg" }}
            w="100%"
          />
          <PasswordInput
            variant="default"
            placeholder="Confirm New Password"
            label={
              <p className="text-sm font-medium text-[#A2A2A2]">
                Confirm New Password
              </p>
            }
            classNames={{ input: "!rounded-lg" }}
            w="100%"
          />
          <Button variant="primary" classNames={{ root: "!rounded-lg !w-fit" }}>
            Update Password
          </Button>
        </div>
        <div className="flex flex-col gap-2.5 w-full">
          <h3 className="text-base font-medium text-[#162964]">
            Password Requirements
          </h3>
          <div className="flex flex-col gap-1">
            {passwordRequirements.map((item, idx) => (
              <div key={idx} className="flex items-center gap-1">
                <TickCircle size={16} color="green" />
                <p className="text-sm font-medium text-[#3D3D3C]">{item}</p>
              </div>
            ))}
          </div>
          <figure className="p-3 rounded-lg bg-amber-100 flex items-start gap-2">
            <InfoCircle
              variant="Bold"
              className="min-w-4 min-h-4"
              color="#FFA011"
            />
            <span className="flex flex-col">
              <p className="text-sm font-medium text-[#FFA011]">Security Tip</p>
              <p className="text-sm font-medium text-[#FFA011]">
                For maximum security, use a unique password that you don&apos;t
                use for other accounts. Consider enabling two-factor
                authentication for additional protection.
              </p>
            </span>
          </figure>
        </div>
      </figure>
    </div>
  );
};
