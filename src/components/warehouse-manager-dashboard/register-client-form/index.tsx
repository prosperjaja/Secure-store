"use client";

import { useState } from "react";
import { Button } from "../../ui/mantine/button";
import { Step1PersonalInformation } from "./step1-personal-information";
import { Step2ContactInformation } from "./step2-contact-information";
import { Step3BankDetails } from "./step3-bank-details";
import { Step4AccountLinking } from "./step4-account-linking";
import clsx from "clsx";
import { toast } from "sonner";
import { useDrawerContext } from "../../providers/drawer-provider";
import { ClientRegistrationFormData } from "../../../types/client-registration";

type Step = 1 | 2 | 3 | 4;

export const RegisterClientForm = () => {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [formData, setFormData] = useState<ClientRegistrationFormData>({});
  const { close } = useDrawerContext();

  const steps = [
    {
      number: 1,
      title: "Personal Information",
      component: Step1PersonalInformation,
    },
    {
      number: 2,
      title: "Contact information",
      component: Step2ContactInformation,
    },
    { number: 3, title: "Bank details", component: Step3BankDetails },
    { number: 4, title: "Account Linking", component: Step4AccountLinking },
  ];

  const CurrentStepComponent = steps[currentStep - 1].component;

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep((currentStep + 1) as Step);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as Step);
    }
  };

  const handleSubmit = () => {
    // TODO: Submit to API
    console.log("Form Data:", formData);
    toast.success("Client registered successfully!");
    close();
  };

  return (
    <div className="flex flex-col h-full">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6 text-sm text-[#667085]">
        <span>Dashboard</span>
        <span>&gt;</span>
        <span className="text-[#101828]">Register new client</span>
      </div>

      {/* Header */}
      <div className="flex flex-col gap-2 mb-6">
        <h2 className="text-2xl font-bold text-[#101828]">
          Register New Client
        </h2>
        <p className="text-sm text-[#667085]">
          Add depositor details to create a client profile and issue their
          warehouse ID
        </p>
      </div>

      {/* Step Indicator */}
      <div className="flex items-center gap-4 mb-8">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center flex-1">
            <div className="flex items-center gap-3 flex-1">
              <div
                className={clsx(
                  "min-w-10 min-h-10 rounded-full flex items-center justify-center font-semibold",
                  currentStep === step.number
                    ? "bg-[#4F46E5] text-white"
                    : currentStep > step.number
                    ? "bg-[#4F46E5] text-white"
                    : "bg-[#F2F4F7] text-[#667085]"
                )}
              >
                {currentStep > step.number ? (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M13.3332 4L5.99984 11.3333L2.6665 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  step.number
                )}
              </div>
              <span
                className={clsx(
                  "text-sm font-medium",
                  currentStep === step.number
                    ? "text-[#4F46E5]"
                    : currentStep > step.number
                    ? "text-[#4F46E5]"
                    : "text-[#667085]"
                )}
              >
                {step.title}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className="flex-1 h-[2px] bg-[#E5E7EB] mx-2" />
            )}
          </div>
        ))}
      </div>

      {/* Form Content */}
      <div className="flex-1 overflow-auto mb-6">
        <CurrentStepComponent
          formData={formData}
          onFormDataChange={setFormData}
        />
      </div>

      {/* Footer Buttons */}
      <div className="flex items-center justify-between pt-6 border-t border-[#E5E7EB]">
        <Button
          variant="default"
          onClick={currentStep === 1 ? close : handleBack}
          classNames={{
            root: "!rounded-lg !border-[#D0D5DD] !h-11 !px-6",
          }}
        >
          {currentStep === 1 ? "Cancel" : "Back"}
        </Button>
        <Button
          onClick={currentStep === 4 ? handleSubmit : handleNext}
          classNames={{
            root: "!bg-[#4F46E5] hover:!bg-[#4338CA] !rounded-lg !h-11 !px-6",
          }}
        >
          {currentStep === 4 ? "Save & Register" : "Continue"}
        </Button>
      </div>
    </div>
  );
};
