"use client";

import { useState, useEffect } from "react";
import { CloseCircle } from "iconsax-reactjs";
import {
  PersonalInformationStep,
  PersonalInfoFormData,
} from "./personal-information-step";
import { AccountSetupStep, AccountSetupFormData } from "./account-setup-step";

type AddManagerFormProps = {
  onClose?: () => void;
  onSuccess?: () => void;
};

// Generate a random manager code
const generateManagerCode = () => {
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  return `MNG-2025-${randomNum}`;
};

export const AddManagerForm = ({ onClose, onSuccess }: AddManagerFormProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [personalInfoData, setPersonalInfoData] =
    useState<PersonalInfoFormData>({
      lastName: "",
      middleName: "",
      firstName: "",
      gender: "",
      dateOfBirth: null,
      residentialAddress: "",
      phoneNumber: "",
      emailAddress: "",
      managerCode: "",
      dateOfEmployment: null,
      profilePhoto: null,
    });

  const [accountSetupData, setAccountSetupData] =
    useState<AccountSetupFormData>({
      username: "",
      temporaryPassword: "",
      permissions: {
        manageClients: true,
        manageReceipts: true,
        viewReports: true,
        approveDeposit: true,
      },
      notifications: {
        email: true,
        sms: true,
        inApp: true,
      },
    });

  // Generate manager code on mount
  useEffect(() => {
    setPersonalInfoData((prev) => ({
      ...prev,
      managerCode: generateManagerCode(),
    }));
  }, []);

  const handleNext = () => {
    setCurrentStep(2);
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  const handleSubmit = () => {
    // Here you would typically make an API call to save the manager
    console.log("Creating manager with data:", {
      personalInfo: personalInfoData,
      accountSetup: accountSetupData,
    });
    onSuccess?.();
    onClose?.();
  };

  const steps = [
    { number: 1, label: "Personal Information" },
    { number: 2, label: "Account Setup" },
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Top Header */}
      <div className="flex items-center justify-between p-6 border-b border-[#E5E7EB] bg-white">
        <div>
          <h1 className="text-xl font-bold text-[#101828]">
            Add Warehouse Manager
          </h1>
          <p className="text-sm text-[#667085]">
            Register a new warehouse manager and assign them to a warehouse
            under your tenant account.
          </p>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors"
        >
          <CloseCircle size={24} color="#667085" />
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Step Navigation Sidebar */}
        <div className="w-56 border-r border-[#E5E7EB] bg-white p-6 flex-shrink-0">
          <div className="flex flex-col gap-0">
            {steps.map((step, idx) => (
              <div key={step.number} className="flex flex-col">
                {/* Step Item */}
                <div className="flex items-center gap-3">
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold ${
                      currentStep === step.number
                        ? "bg-[#4F46E5] text-white"
                        : currentStep > step.number
                        ? "bg-[#4F46E5] text-white"
                        : "bg-[#F3F4F6] text-[#9CA3AF]"
                    }`}
                  >
                    {step.number}
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      currentStep === step.number
                        ? "text-[#4F46E5]"
                        : "text-[#667085]"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>

                {/* Connector Line (except for last item) */}
                {idx < steps.length - 1 && (
                  <div className="ml-4 w-px h-8 bg-[#E5E7EB]" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="flex-1 p-8 overflow-y-auto bg-white">
          {currentStep === 1 && (
            <PersonalInformationStep
              formData={personalInfoData}
              onFormDataChange={setPersonalInfoData}
              onNext={handleNext}
            />
          )}

          {currentStep === 2 && (
            <AccountSetupStep
              formData={accountSetupData}
              onFormDataChange={setAccountSetupData}
              onBack={handleBack}
              onSubmit={handleSubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
};
