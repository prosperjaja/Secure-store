"use client";

import { Button } from "../ui/mantine/button";
import { TextInput } from "../ui/mantine/TextInput";
import { useState } from "react";

interface ProfileEditProps {
  onSave: () => void;
}

export const ProfileEdit = ({ onSave }: ProfileEditProps) => {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: "06/10/1990",
    email: "johndoe@gmail.com",
    phoneNumber: "+234 800 000 0000",
    occupation: "Business Man",
    address: "Lekki Phase 1, Lagos State",
  });

  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-semibold text-[#101828]">
          Edit detail information
        </h2>
        <p className="text-sm text-[#667085]">
          Update your personal details and profile photo
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {/* First & Last Name */}
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-[#344054]">
            First & Last name
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <TextInput
              placeholder="John"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              classNames={{
                input: "!h-11",
              }}
            />
            <TextInput
              placeholder="Doe"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              classNames={{
                input: "!h-11",
              }}
            />
          </div>
        </div>

        {/* Date of Birth */}
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-[#344054]">
            Date of Birth
          </span>
          <TextInput
            placeholder="06/10/1990"
            value={formData.dateOfBirth}
            onChange={(e) =>
              setFormData({ ...formData, dateOfBirth: e.target.value })
            }
            classNames={{
              input: "!h-11",
            }}
          />
        </div>

        {/* Email Address */}
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-[#344054]">
            Email address
          </span>
          <TextInput
            placeholder="johndoe@gmail.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            classNames={{
              input: "!h-11",
            }}
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-[#344054]">
            Phone Number
          </span>
          <TextInput
            placeholder="+234 800 000 0000"
            value={formData.phoneNumber}
            onChange={(e) =>
              setFormData({ ...formData, phoneNumber: e.target.value })
            }
            classNames={{
              input: "!h-11",
            }}
          />
        </div>

        {/* Occupation */}
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-[#344054]">
            Occupation
          </span>
          <TextInput
            placeholder="Business Man"
            value={formData.occupation}
            onChange={(e) =>
              setFormData({ ...formData, occupation: e.target.value })
            }
            classNames={{
              input: "!h-11",
            }}
          />
        </div>

        {/* Address */}
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-[#344054]">Address</span>
          <TextInput
            placeholder="Lekki Phase 1, Lagos State"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            classNames={{
              input: "!h-11",
            }}
          />
        </div>
      </div>

      <div className="flex items-center justify-end gap-3">
        <Button
          variant="default"
          classNames={{
            root: "!rounded-lg !border-[#D0D5DD]",
          }}
        >
          Download ID Card
        </Button>
        <Button
          variant="primary"
          classNames={{
            root: "!bg-[#4F46E5] hover:!bg-[#4338CA] !rounded-lg",
          }}
          onClick={onSave}
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
};
