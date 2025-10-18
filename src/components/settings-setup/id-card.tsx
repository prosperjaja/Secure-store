"use client";

import { QRCodeSVG } from "qrcode.react";
import { Button } from "../ui/mantine/button";
import { Printer } from "iconsax-reactjs";
import { Avatar } from "@mantine/core";

interface IdCardProps {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  clientId?: string;
  role?: string;
  validUntil?: string;
  avatarUrl?: string;
}

export const IdCard = ({
  firstName = "Jeremy",
  lastName = "Ants",
  email = "jeremyants93@gmail.com",
  phone = "+234 803 456 7890",
  clientId = "CLIENT-001",
  role = "Client/Depositor",
  validUntil = "31 Dec 2024",
  avatarUrl,
}: IdCardProps) => {
  const fullName = `${firstName} ${lastName}`;
  const qrData = JSON.stringify({
    id: clientId,
    name: fullName,
    email: email,
    phone: phone,
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-[#101828]">ID Card</h2>
        <Button
          variant="primary"
          leftSection={<Printer size={18} color="#fff" />}
          onClick={handlePrint}
          classNames={{
            root: "!rounded-lg !bg-[#4F46E5] hover:!bg-[#4338CA] !px-4",
          }}
        >
          Print ID Card
        </Button>
      </div>

      {/* ID Card */}
      <div className="bg-gradient-to-br from-[#4F46E5] to-[#6366F1] rounded-2xl p-6 shadow-2xl max-w-md">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-6">
          <div className="flex items-center gap-2">
            <div className="bg-white rounded-lg p-2 flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  fill="#4F46E5"
                  stroke="#4F46E5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="#4F46E5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="#4F46E5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-white text-lg font-bold leading-5">
                Secure
              </span>
              <span className="text-white text-lg font-bold leading-5">
                Store
              </span>
            </div>
          </div>
        </div>

        {/* User Info */}
        <div className="flex items-start gap-4 mb-6">
          <Avatar
            src={avatarUrl}
            alt={fullName}
            size={80}
            radius="50%"
            className="border-4 border-white shadow-lg"
          />
          <div className="flex-1 flex flex-col gap-1">
            <h3 className="text-xl font-bold text-white">{fullName}</h3>
            <p className="text-sm text-blue-100">{role}</p>
            <p className="text-xs text-blue-200 font-medium">{clientId}</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4">
          <h4 className="text-xs font-semibold text-blue-100 mb-3">
            Contact Information
          </h4>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-sm text-white font-medium">{phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-white font-medium">{email}</span>
            </div>
          </div>
        </div>

        {/* QR Code and Valid Until */}
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold text-blue-100">
              Valid Until
            </span>
            <span className="text-sm font-bold text-white">{validUntil}</span>
          </div>
          <div className="bg-white p-2 rounded-lg">
            <QRCodeSVG value={qrData} size={80} />
          </div>
        </div>
      </div>

      {/* ID Card Information */}
      <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 flex flex-col gap-4">
        <h3 className="text-lg font-semibold text-[#101828]">
          Id Card Information
        </h3>
        <p className="text-sm text-[#667085]">
          Your ID contains a QR code that can be scanned to verify your identity
          and access your account details. Present the card when visiting
          warehouses for quick processing
        </p>

        <div className="pt-4 border-t border-[#E5E7EB]">
          <h4 className="text-sm font-semibold text-[#101828] mb-3">
            Usage Instruction
          </h4>
          <ul className="flex flex-col gap-2 list-disc list-inside text-sm text-[#667085]">
            <li>Print Your ID Card on thick paper or laminate it for durability</li>
            <li>
              present this card when depositing or withdrawing commodities
            </li>
            <li>keep your ID card secure to prevent unauthorized access</li>
            <li>Report lost or stolen cards immediately</li>
          </ul>
        </div>

        <div className="pt-4 border-t border-[#E5E7EB]">
          <p className="text-sm text-[#667085]">
            Need a replacement card?{" "}
            <button className="text-[#4F46E5] font-medium hover:underline cursor-pointer">
              Contact Support
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
