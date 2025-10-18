"use client";

import { Button } from "../ui/mantine/button";
import { TextInput } from "../ui/mantine/TextInput";
import { PinInput, Switch, Modal } from "@mantine/core";
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";

export const PasswordSettings = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pin, setPin] = useState("");
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [confirmPin, setConfirmPin] = useState("");
  const [pendingToggleValue, setPendingToggleValue] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="flex flex-col gap-6">
      {/* Change Password Section */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold text-[#101828]">Password</h2>
          <p className="text-sm text-[#667085]">
            Manage your account security and authentication
          </p>
        </div>

        <div className="flex flex-col gap-4 w-[50%]">
          <h3 className="text-base font-semibold text-[#101828]">
            Change Password
          </h3>

          {/* Current Password */}
          <div className="flex flex-col gap-2">
            <TextInput
              type="password"
              placeholder="Enter your current password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              classNames={{
                input: "!h-11",
              }}
            />
          </div>

          {/* New Password and Confirm */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <TextInput
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              classNames={{
                input: "!h-11",
              }}
            />
            <TextInput
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              classNames={{
                input: "!h-11",
              }}
            />
          </div>

          <div className="flex items-center justify-start">
            <Button
              variant="primary"
              classNames={{
                root: "!bg-[#4F46E5] hover:!bg-[#4338CA] !rounded-lg",
              }}
            >
              Update
            </Button>
          </div>
        </div>
      </div>

      {/* Transaction PIN Section */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h3 className="text-base font-semibold text-[#101828]">
            Transaction PIN
          </h3>
          <p className="text-sm text-[#667085]">
            Set a 4-digit PIN for quick and secure access to your account
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium text-[#344054]">
              Enter 4-digit PIN
            </span>
            <PinInput
              length={4}
              type="number"
              value={pin}
              onChange={setPin}
              size="lg"
              placeholder=""
              styles={{
                input: {
                  width: "50px",
                  height: "40px",
                  fontSize: "20px",
                  fontWeight: 600,
                  border: "1px solid #D0D5DD",
                  borderRadius: "8px",
                },
              }}
            />
          </div>

          <div className="flex items-center justify-start">
            <Button
              variant="primary"
              classNames={{
                root: "!bg-[#4F46E5] hover:!bg-[#4338CA] !rounded-lg",
              }}
            >
              Update
            </Button>
          </div>
        </div>
      </div>

      {/* Two-Factor Authentication Section */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-[#101828]">
              Two-factor Authentication
            </h3>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-[#344054]">
                Enable 2FA with OTP
              </span>
              <p className="text-sm text-[#667085]">
                Add an extra layer of security to your account with SMS
                verification
              </p>
            </div>
          </div>
          <Switch
            checked={is2FAEnabled}
            onChange={(event) => {
              const newValue = event.currentTarget.checked;
              setPendingToggleValue(newValue);
              open();
            }}
            size="lg"
            color="#4F46E5"
            styles={{
              track: {
                cursor: "pointer",
              },
            }}
          />
        </div>
      </div>

      {/* PIN Confirmation Modal */}
      <Modal
        opened={opened}
        onClose={() => {
          close();
          setConfirmPin("");
        }}
        title="Confirm with PIN"
        centered
        size="md"
        styles={{
          title: {
            fontSize: "18px",
            fontWeight: 600,
            color: "#101828",
          },
        }}
      >
        <div className="flex flex-col gap-6">
          <p className="text-sm text-[#667085]">
            Please enter your 4-digit transaction PIN to{" "}
            {pendingToggleValue ? "enable" : "disable"} Two-Factor
            Authentication
          </p>

          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium text-[#344054]">
              Enter PIN
            </span>
            <PinInput
              length={4}
              type="number"
              value={confirmPin}
              onChange={setConfirmPin}
              size="lg"
              placeholder=""
              styles={{
                input: {
                  width: "50px",
                  height: "40px",
                  fontSize: "20px",
                  fontWeight: 600,
                  border: "1px solid #D0D5DD",
                  borderRadius: "8px",
                },
              }}
            />
          </div>

          <div className="flex items-center justify-end gap-3">
            <Button
              variant="outline"
              onClick={() => {
                close();
                setConfirmPin("");
              }}
              classNames={{
                root: "!rounded-lg !border-[#D0D5DD] !px-4",
              }}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              disabled={confirmPin.length !== 4}
              onClick={() => {
                // Validate PIN here (e.g., check if it matches the stored PIN)
                // For now, just toggle the 2FA state
                setIs2FAEnabled(pendingToggleValue);
                close();
                setConfirmPin("");
              }}
              classNames={{
                root: "!bg-[#4F46E5] hover:!bg-[#4338CA] !rounded-lg !px-4",
              }}
            >
              Confirm
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
