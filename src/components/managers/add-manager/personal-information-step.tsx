"use client";

import { TextInput, Select } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { Calendar } from "iconsax-reactjs";
import { useRef } from "react";

export type PersonalInfoFormData = {
  lastName: string;
  middleName: string;
  firstName: string;
  gender: string;
  dateOfBirth: Date | null;
  residentialAddress: string;
  phoneNumber: string;
  emailAddress: string;
  managerCode: string;
  dateOfEmployment: Date | null;
  profilePhoto: File | null;
};

type PersonalInformationStepProps = {
  formData: PersonalInfoFormData;
  onFormDataChange: (data: PersonalInfoFormData) => void;
  onNext: () => void;
};

export const PersonalInformationStep = ({
  formData,
  onFormDataChange,
  onNext,
}: PersonalInformationStepProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    field: keyof PersonalInfoFormData,
    value: string | Date | null | File
  ) => {
    onFormDataChange({
      ...formData,
      [field]: value,
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleInputChange("profilePhoto", file);
    }
  };

  const handleContinue = () => {
    onNext();
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold text-[#101828]">
          Personal Information
        </h2>
        <p className="text-sm text-[#667085]">
          Record new deposit details and issue a warehouse receipt for the
          client
        </p>
      </div>

      {/* Form Fields */}
      <div className="bg-[#F9FAFB] rounded-xl p-6 flex flex-col gap-5">
        {/* Row 1: Last Name, Middle Name */}
        <div className="grid grid-cols-2 gap-4">
          <TextInput
            label="Last Name"
            placeholder="Enter manager's name here"
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            classNames={{
              label: "text-sm font-medium text-[#344054] mb-1.5",
              input: "!h-11 !rounded-lg border-[#D0D5DD] bg-white",
            }}
          />
          <TextInput
            label="Middle Name"
            placeholder="johndoe@gmail.com"
            value={formData.middleName}
            onChange={(e) => handleInputChange("middleName", e.target.value)}
            classNames={{
              label: "text-sm font-medium text-[#344054] mb-1.5",
              input: "!h-11 !rounded-lg border-[#D0D5DD] bg-white",
            }}
          />
        </div>

        {/* Row 2: First Name, Gender */}
        <div className="grid grid-cols-2 gap-4">
          <TextInput
            label="First Name"
            placeholder="Enter manager's name here"
            value={formData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            classNames={{
              label: "text-sm font-medium text-[#344054] mb-1.5",
              input: "!h-11 !rounded-lg border-[#D0D5DD] bg-white",
            }}
          />
          <Select
            label="Gender"
            placeholder="Select preferred gender"
            value={formData.gender}
            onChange={(value) => handleInputChange("gender", value || "")}
            data={["Male", "Female", "Other"]}
            classNames={{
              label: "text-sm font-medium text-[#344054] mb-1.5",
              input: "!h-11 !rounded-lg border-[#D0D5DD] bg-white",
            }}
          />
        </div>

        {/* Row 3: Date of Birth, Residential Address */}
        <div className="grid grid-cols-2 gap-4">
          <DateInput
            label="Date of Birth"
            placeholder="DD/MM/YYYY"
            value={formData.dateOfBirth}
            onChange={(value) => handleInputChange("dateOfBirth", value)}
            rightSection={<Calendar size={16} color="#667085" />}
            classNames={{
              label: "text-sm font-medium text-[#344054] mb-1.5",
              input:
                "!h-11 !rounded-lg border-[#D0D5DD] bg-white !text-[#101828]",
            }}
          />
          <TextInput
            label="Residential address"
            placeholder="Enter address"
            value={formData.residentialAddress}
            onChange={(e) =>
              handleInputChange("residentialAddress", e.target.value)
            }
            classNames={{
              label: "text-sm font-medium text-[#344054] mb-1.5",
              input: "!h-11 !rounded-lg border-[#D0D5DD] bg-white",
            }}
          />
        </div>

        {/* Row 4: Phone Number, Email Address */}
        <div className="grid grid-cols-2 gap-4">
          <TextInput
            label="Phone number"
            placeholder="+234"
            value={formData.phoneNumber}
            onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
            classNames={{
              label: "text-sm font-medium text-[#344054] mb-1.5",
              input: "!h-11 !rounded-lg border-[#D0D5DD] bg-white",
            }}
          />
          <TextInput
            label="Email address"
            placeholder="johndoe@gmail.com"
            value={formData.emailAddress}
            onChange={(e) => handleInputChange("emailAddress", e.target.value)}
            classNames={{
              label: "text-sm font-medium text-[#344054] mb-1.5",
              input: "!h-11 !rounded-lg border-[#D0D5DD] bg-white",
            }}
          />
        </div>

        {/* Row 5: Manager Code, Date of Employment */}
        <div className="grid grid-cols-2 gap-4">
          <TextInput
            label="Manager code"
            placeholder="(Auto-generated)"
            value={formData.managerCode}
            disabled
            classNames={{
              label: "text-sm font-medium text-[#344054] mb-1.5",
              input:
                "!h-11 !rounded-lg border-[#D0D5DD] bg-[#F9FAFB] text-[#667085]",
            }}
          />
          <DateInput
            label="Date of Employment"
            placeholder="DD/MM/YYYY"
            value={formData.dateOfEmployment}
            onChange={(value) => handleInputChange("dateOfEmployment", value)}
            rightSection={<Calendar size={16} color="#667085" />}
            classNames={{
              label: "text-sm font-medium text-[#344054] mb-1.5",
              input: "!h-11 !rounded-lg border-[#D0D5DD] bg-white",
            }}
          />
        </div>
      </div>

      {/* Upload Profile Photo */}
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium text-[#344054]">
          Upload profile photo
        </p>
        <div
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-[#D0D5DD] rounded-xl p-8 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-[#4F46E5] transition-colors"
        >
          <p className="text-sm text-[#667085]">Drop your image here</p>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-[#344054] bg-white border border-[#D0D5DD] rounded-lg hover:bg-gray-50"
          >
            Upload photo
          </button>
          {formData.profilePhoto && (
            <p className="text-sm text-[#16A34A]">
              {formData.profilePhoto.name}
            </p>
          )}
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          className="hidden"
        />
      </div>

      {/* Action Button */}
      <div className="flex justify-end pt-4">
        <button
          onClick={handleContinue}
          className="px-8 py-2.5 text-sm font-semibold text-white bg-[#4F46E5] rounded-lg hover:bg-[#4338CA] cursor-pointer"
        >
          Continue
        </button>
      </div>
    </div>
  );
};
