"use client";

import { TextInput } from "../../ui/mantine/TextInput";
import { Select } from "../../ui/mantine/select";
import { ClientRegistrationFormData } from "../../../types/client-registration";

interface Step2Props {
  formData: ClientRegistrationFormData;
  onFormDataChange: (data: ClientRegistrationFormData) => void;
}

export const Step2ContactInformation = ({
  formData,
  onFormDataChange,
}: Step2Props) => {
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
        <h3 className="text-lg font-semibold text-[#101828]">
          Contact information
        </h3>
        <p className="text-sm text-[#667085]">
          How can we reach the depositor?
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 bg-[#F9F8F8] p-3 rounded-xl">
        {/* Phone Number */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-[#344054]">
            Phone Number
          </label>
          <TextInput
            placeholder="+234"
            value={formData.phoneNumber || ""}
            onChange={(e) => handleChange("phoneNumber", e.target.value)}
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
            value={formData.email || ""}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>

        {/* Nationality */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-[#344054]">
            Nationality
          </label>
          <Select
            placeholder="Select your country here"
            value={formData.contactNationality || ""}
            onChange={(value) => handleChange("contactNationality", value)}
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

        {/* State of Origin */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-[#344054]">
            State of origin
          </label>
          <Select
            placeholder="Select state here"
            value={formData.stateOfOrigin || ""}
            onChange={(value) => handleChange("stateOfOrigin", value)}
            data={[
              { value: "lagos", label: "Lagos" },
              { value: "abuja", label: "Abuja" },
              { value: "kano", label: "Kano" },
            ]}
            styles={{
              dropdown: { color: "#000" },
            }}
          />
        </div>

        {/* Local Government Area */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-[#344054]">
            Local Government Area
          </label>
          <Select
            placeholder="Select LGA here"
            value={formData.lga || ""}
            onChange={(value) => handleChange("lga", value)}
            data={[
              { value: "ikeja", label: "Ikeja" },
              { value: "lekki", label: "Lekki" },
              { value: "victoria-island", label: "Victoria Island" },
            ]}
            styles={{
              dropdown: { color: "#000" },
            }}
          />
        </div>

        {/* Residential Address */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-[#344054]">
            Residential Address
          </label>
          <TextInput
            placeholder="Enter address here"
            value={formData.residentialAddress || ""}
            onChange={(e) => handleChange("residentialAddress", e.target.value)}
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
            value={formData.contactDateOfBirth || ""}
            onChange={(e) => handleChange("contactDateOfBirth", e.target.value)}
          />
        </div>

        {/* National ID / BVN */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-[#344054]">
            National ID / BVN (Optional)
          </label>
          <TextInput
            placeholder="Enter ID Number"
            value={formData.nationalId || ""}
            onChange={(e) => handleChange("nationalId", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
