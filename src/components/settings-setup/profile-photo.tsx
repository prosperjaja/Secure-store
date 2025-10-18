"use client";

import { Button } from "../ui/mantine/button";
import { useState } from "react";

export const ProfilePhoto = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-semibold text-[#101828]">
          Change profile photo
        </h2>
        <p className="text-sm text-[#667085]">
          Your profile photo will be used on your profile and throughout the
          site
        </p>
      </div>

      {/* Image Upload Area */}
      <div className="flex flex-col gap-4">
        <div className="border-2 border-dashed border-[#D0D5DD] rounded-xl p-12 flex flex-col items-center justify-center gap-4 bg-[#F9FAFB]">
          {selectedImage ? (
            <div className="flex flex-col items-center gap-4">
              <img
                src={selectedImage}
                alt="Profile preview"
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
              />
              <p className="text-sm text-[#667085]">Image selected</p>
            </div>
          ) : (
            <>
              <div className="w-16 h-16 rounded-full bg-[#E5E7EB] flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                    stroke="#667085"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 8L12 3L7 8"
                    stroke="#667085"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 3V15"
                    stroke="#667085"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-sm text-[#667085]">Drop your image here</p>
            </>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            id="profile-upload"
          />
          <label htmlFor="profile-upload">
            <Button
              variant="primary"
              classNames={{
                root: "!bg-[#4F46E5] hover:!bg-[#4338CA] !rounded-lg cursor-pointer",
              }}
            >
              Upload Photo
            </Button>
          </label>
        </div>
      </div>

      <div className="flex items-center justify-end">
        <Button
          variant="primary"
          classNames={{
            root: "!bg-[#4F46E5] hover:!bg-[#4338CA] !rounded-lg",
          }}
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
};
