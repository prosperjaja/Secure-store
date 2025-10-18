"use client";

import { useState } from "react";
import { ArrowLeft } from "iconsax-reactjs";
import { useRouter } from "next/navigation";
import { Avatar } from "@mantine/core";
import { Button } from "../ui/mantine/button";
import { ProfileEdit } from "./profile-edit";
import { ProfilePhoto } from "./profile-photo";
import { PasswordSettings } from "./password-settings";
import { IdCard } from "./id-card";
import { Edit2, User } from "iconsax-reactjs";

type MainTabValue = "profile" | "password";
type ProfileTabValue = "edit" | "profile-photo";

export const SettingsSetup = () => {
  const router = useRouter();
  const [activeMainTab, setActiveMainTab] = useState<MainTabValue>("profile");
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [activeProfileTab, setActiveProfileTab] =
    useState<ProfileTabValue>("edit");

  const mainTabs = [
    { value: "profile" as MainTabValue, label: "Profile" },
    { value: "password" as MainTabValue, label: "Password" },
  ];

  return (
    <div className="flex-1 flex flex-col overflow-auto bg-[#F9FAFB]">
      {/* Page Header */}
      <header className="flex items-center gap-3 p-6 bg-white border-b border-[#E5E7EB]">
        <button
          className="p-2 hover:bg-[#F3F4F6] rounded-lg transition-colors cursor-pointer"
          onClick={() => router.back()}
        >
          <ArrowLeft size={20} color="#101828" />
        </button>
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold text-[#101828]">Settings</h1>
          <p className="text-sm text-[#667085]">
            Manage your account settings and preferences
          </p>
        </div>
      </header>

      {/* Main Tabs */}
      <div className="flex-1 flex flex-col overflow-auto">
        {/* Main Tab Headers */}
        <div className="bg-white border-b border-[#E5E7EB]">
          <div className="flex gap-8 px-6">
            {mainTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveMainTab(tab.value)}
                className={`py-3 text-sm font-medium border-b-2 transition-colors cursor-pointer ${
                  activeMainTab === tab.value
                    ? "text-[#4F46E5] border-[#4F46E5]"
                    : "text-[#667085] border-transparent hover:text-[#4F46E5]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Tab Content */}
        <div className="flex-1 flex flex-col overflow-auto">
          {activeMainTab === "profile" && (
            <div className="flex flex-col">
              {/* Banner and Avatar Section */}
              <div className="bg-white">
                <div className="relative">
                  {/* Banner */}
                  <div className="h-48 bg-gradient-to-r from-[#E5E7EB] to-[#D1D5DB]"></div>

                  {/* Avatar */}
                  <div className="absolute -bottom-16 left-8">
                    <Avatar
                      size={128}
                      radius="50%"
                      className="border-4 border-white shadow-lg"
                    />
                  </div>
                </div>

                {/* Spacing for avatar */}
                <div className="h-20"></div>
              </div>

              {/* Profile Content */}
              {!isEditingProfile ? (
                // Profile View - Details Card and ID Card Side by Side
                <div className="p-6 bg-[#F9FAFB]">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Profile Details Card */}
                    <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 flex flex-col gap-6">
                      <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-4">
                        <h2 className="text-lg font-semibold text-[#101828]">
                          Details
                        </h2>
                        <Button
                          variant="default"
                          classNames={{
                            root: "!rounded-lg !border-[#D0D5DD] !px-4 !py-2",
                          }}
                          onClick={() => setIsEditingProfile(true)}
                        >
                          Edit
                        </Button>
                      </div>

                      <div className="flex flex-col gap-6">
                        {/* First Name */}
                        <div className="flex items-center gap-24">
                          <span className="text-sm font-medium text-[#101828] w-40">
                            First name
                          </span>
                          <span className="text-sm text-[#667085]">John</span>
                        </div>

                        {/* Last Name */}
                        <div className="flex items-center gap-24">
                          <span className="text-sm font-medium text-[#101828] w-40">
                            Last name
                          </span>
                          <span className="text-sm text-[#667085]">Doe</span>
                        </div>

                        {/* Email Address */}
                        <div className="flex items-center gap-24">
                          <span className="text-sm font-medium text-[#101828] w-40">
                            Email address
                          </span>
                          <span className="text-sm text-[#667085]">
                            Johndoe@gmail.com
                          </span>
                        </div>

                        {/* Residential Address */}
                        <div className="flex items-center gap-24">
                          <span className="text-sm font-medium text-[#101828] w-40">
                            Residential address
                          </span>
                          <span className="text-sm text-[#667085]">
                            Lekki Phase 1, Lagos
                          </span>
                        </div>
                        {/* Phone Number */}
                        <div className="flex items-center gap-24">
                          <span className="text-sm font-medium text-[#101828] w-40">
                            Phone Number
                          </span>
                          <span className="text-sm text-[#667085]">
                            0806537565443
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* ID Card Section */}
                    <div>
                      <IdCard
                        firstName="John"
                        lastName="Doe"
                        email="Johndoe@gmail.com"
                        phone="+234 803 456 7890"
                        clientId="CLIENT-001"
                        role="Client/Depositor"
                        validUntil="31 Dec 2024"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                // Edit Profile - With Sidebar Tabs
                <div className="flex h-full bg-[#F9FAFB]">
                  {/* Sidebar */}
                  <div className="w-64 bg-white border-r border-[#E5E7EB] p-6 flex flex-col gap-2">
                    <h2 className="text-lg font-semibold text-[#101828] mb-4">
                      Edit Profile
                    </h2>
                    <button
                      onClick={() => setActiveProfileTab("edit")}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                        activeProfileTab === "edit"
                          ? "bg-[#4F46E5] text-white"
                          : "text-[#667085] hover:bg-[#F3F4F6]"
                      }`}
                    >
                      <Edit2 size={20} />
                      Edit
                    </button>
                    <button
                      onClick={() => setActiveProfileTab("profile-photo")}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                        activeProfileTab === "profile-photo"
                          ? "bg-[#4F46E5] text-white"
                          : "text-[#667085] hover:bg-[#F3F4F6]"
                      }`}
                    >
                      <User size={20} />
                      Profile photo
                    </button>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 overflow-auto">
                    {activeProfileTab === "edit" && (
                      <ProfileEdit onSave={() => setIsEditingProfile(false)} />
                    )}
                    {activeProfileTab === "profile-photo" && <ProfilePhoto />}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeMainTab === "password" && (
            <div className="p-6">
              <PasswordSettings />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
