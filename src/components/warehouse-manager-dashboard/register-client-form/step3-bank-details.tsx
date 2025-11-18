"use client";

import { TextInput } from "../../ui/mantine/TextInput";
import { Select } from "../../ui/mantine/select";
import { ClientRegistrationFormData } from "../../../types/client-registration";

interface Step3Props {
  formData: ClientRegistrationFormData;
  onFormDataChange: (data: ClientRegistrationFormData) => void;
}

export const Step3BankDetails = ({
  formData,
  onFormDataChange,
}: Step3Props) => {
  const handleChange = (
    field: keyof ClientRegistrationFormData,
    value: string | null
  ) => {
    onFormDataChange({
      ...formData,
      [field]: value ?? undefined,
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-[#101828]">Bank details</h3>
        <p className="text-sm text-[#667085]">
          How can we reach the depositor?
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 bg-[#F9F8F8] p-3 rounded-xl">
        {/* Account Name */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-[#344054]">
            Account Name
          </label>
          <TextInput
            placeholder="Enter account name here"
            value={formData.accountName || ""}
            onChange={(e) => handleChange("accountName", e.target.value)}
          />
        </div>

        {/* Account Number */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-[#344054]">
            Account Number
          </label>
          <TextInput
            placeholder="10 digits number"
            value={formData.accountNumber || ""}
            onChange={(e) => handleChange("accountNumber", e.target.value)}
          />
        </div>

        {/* Bank Name */}
        <div className="flex flex-col gap-2 col-span-2">
          <label className="text-sm font-medium text-[#344054]">
            Bank Name
          </label>
          <Select
            placeholder="Select your bank here"
            value={formData.bankName || ""}
            onChange={(value) => handleChange("bankName", value)}
            data={[
              { value: "first-bank", label: "First Bank of Nigeria" },
              { value: "gtb", label: "Guaranty Trust Bank" },
              { value: "access", label: "Access Bank" },
              { value: "zenith", label: "Zenith Bank" },
            ]}
            styles={{
              dropdown: { color: "#000" },
            }}
          />
        </div>
      </div>

      {/* Next of Kin Details */}
      <div className="flex flex-col gap-6 pt-6 border-t border-[#E5E7EB]">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-[#101828]">
            Next of Kin details
          </h3>
          <p className="text-sm text-[#667085]">
            How can we reach the depositor?
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 bg-[#F9F8F8] p-3 rounded-xl">
          {/* Full Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#344054]">
              Full Name
            </label>
            <TextInput
              placeholder="Enter address here"
              value={formData.nokFullName || ""}
              onChange={(e) => handleChange("nokFullName", e.target.value)}
            />
          </div>

          {/* Residential Address */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#344054]">
              Residential Address
            </label>
            <TextInput
              placeholder="Enter Address"
              value={formData.nokAddress || ""}
              onChange={(e) => handleChange("nokAddress", e.target.value)}
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#344054]">
              Phone Number
            </label>
            <TextInput
              placeholder="+234"
              value={formData.nokPhone || ""}
              onChange={(e) => handleChange("nokPhone", e.target.value)}
            />
          </div>

          {/* Email Address */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#344054]">
              Email Address
            </label>
            <TextInput
              placeholder="Johndoe@gmail.com"
              type="email"
              value={formData.nokEmail || ""}
              onChange={(e) => handleChange("nokEmail", e.target.value)}
            />
          </div>

          {/* Relationship */}
          <div className="flex flex-col gap-2 col-span-2">
            <label className="text-sm font-medium text-[#344054]">
              Relationship
            </label>
            <Select
              placeholder="Select relationship status"
              value={formData.nokRelationship || ""}
              onChange={(value) => handleChange("nokRelationship", value)}
              data={[
                { value: "spouse", label: "Spouse" },
                { value: "parent", label: "Parent" },
                { value: "sibling", label: "Sibling" },
                { value: "child", label: "Child" },
                { value: "other", label: "Other" },
              ]}
              styles={{
                dropdown: { color: "#000" },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
