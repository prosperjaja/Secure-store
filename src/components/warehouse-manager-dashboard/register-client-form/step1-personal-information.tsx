"use client";

import { TextInput } from "../../ui/mantine/TextInput";
import { Select } from "../../ui/mantine/select";
import { Dropzone } from "@mantine/dropzone";
import { DocumentUpload } from "iconsax-reactjs";
import { ClientRegistrationFormData } from "../../../types/client-registration";

interface Step1Props {
  formData: ClientRegistrationFormData;
  onFormDataChange: (data: ClientRegistrationFormData) => void;
}

export const Step1PersonalInformation = ({
  formData,
  onFormDataChange,
}: Step1Props) => {
  const handleChange = (
    field: keyof ClientRegistrationFormData,
    value: string | File | null
  ) => {
    onFormDataChange({
      ...formData,
      [field]: value ?? undefined,
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-[#101828]">
          Personal information
        </h3>
        <p className="text-sm text-[#667085]">
          Basic details about the depositor
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 bg-[#F9F8F8] p-3 rounded-xl">
        {/* First Name */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-[#344054]">
            First Name
          </label>
          <TextInput
            placeholder="Enter full name"
            value={formData.firstName || ""}
            onChange={(e) => handleChange("firstName", e.target.value)}
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-[#344054]">
            Last Name
          </label>
          <TextInput
            placeholder="Enter full name"
            value={formData.lastName || ""}
            onChange={(e) => handleChange("lastName", e.target.value)}
          />
        </div>

        {/* Gender */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-[#344054]">Gender</label>
          <Select
            placeholder="Select gender here"
            value={formData.gender || ""}
            onChange={(value) => handleChange("gender", value)}
            data={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
              { value: "other", label: "Other" },
            ]}
            styles={{
              dropdown: { color: "#000" },
            }}
          />
        </div>

        {/* Nationality */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-[#344054]">
            Nationality
          </label>
          <Select
            placeholder="Select your country here"
            value={formData.nationality || ""}
            onChange={(value) => handleChange("nationality", value)}
            data={[
              { value: "ng", label: "Nigeria" },
              { value: "gh", label: "Ghana" },
              { value: "ke", label: "Kenya" },
            ]}
            styles={{
              dropdown: { color: "#000" },
            }}
          />
        </div>

        {/* Date of Birth */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-[#344054]">
            Date of Birth
          </label>
          <TextInput
            placeholder="DD/MM/YYYY"
            type="date"
            value={formData.dateOfBirth || ""}
            onChange={(e) => handleChange("dateOfBirth", e.target.value)}
          />
        </div>

        {/* Focus Commodity */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-[#344054]">
            Focus commodity
          </label>
          <Select
            placeholder="Select your commodity here"
            value={formData.focusCommodity || ""}
            onChange={(value) => handleChange("focusCommodity", value)}
            data={[
              { value: "maize", label: "Maize" },
              { value: "rice", label: "Rice" },
              { value: "wheat", label: "Wheat" },
            ]}
            styles={{
              dropdown: { color: "#000" },
            }}
          />
        </div>
      </div>

      {/* Upload Profile Picture */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-[#344054]">
          Upload profile picture
        </label>
        <Dropzone
          onDrop={(files) => handleChange("profilePicture", files[0])}
          maxSize={5 * 1024 * 1024}
          accept={["image/jpeg", "image/png", "application/pdf"]}
          className="border-2 border-dashed border-[#E5E7EB] rounded-lg p-8 cursor-pointer"
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="w-12 h-12 rounded-full bg-[#F5F3FF] flex items-center justify-center">
              <DocumentUpload size={24} color="#4F46E5" />
            </div>
            <p className="text-sm text-[#667085]">
              Click to upload or drag and drop here
            </p>
          </div>
        </Dropzone>
        <p className="text-xs text-[#667085]">
          Accepted format: JPG, PNG, PDF (Max 5MB)
        </p>
      </div>

      {/* Upload ID Document */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-[#344054]">
          Upload ID Document (Optional)
        </label>
        <Dropzone
          onDrop={(files) => handleChange("idDocument", files[0])}
          maxSize={5 * 1024 * 1024}
          accept={["image/jpeg", "image/png", "application/pdf"]}
          className="border-2 border-dashed border-[#E5E7EB] rounded-lg p-8 cursor-pointer"
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="w-12 h-12 rounded-full bg-[#F5F3FF] flex items-center justify-center">
              <DocumentUpload size={24} color="#4F46E5" />
            </div>
            <p className="text-sm text-[#667085]">
              Choose file or drag and drop files
            </p>
          </div>
        </Dropzone>
        <p className="text-xs text-[#667085]">
          Accepted format: JPG, PNG, PDF (Max 5MB)
        </p>
      </div>
    </div>
  );
};
