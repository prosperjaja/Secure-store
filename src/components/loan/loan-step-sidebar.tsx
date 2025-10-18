"use client";

import clsx from "clsx";

interface LoanStepSidebarProps {
  currentStep: number;
}

export const LoanStepSidebar = ({ currentStep }: LoanStepSidebarProps) => {
  const steps = [
    {
      number: 1,
      title: "Choose Financier",
      subtitle: "Select your preferred lender",
    },
    {
      number: 2,
      title: "Select receipt",
      subtitle: "Choose collateral receipts",
    },
    {
      number: 3,
      title: "Specify Amounts",
      subtitle: "Enter pledge quantities",
    },
    {
      number: 4,
      title: "Review & Confirm",
      subtitle: "Finalize your pledge",
    },
  ];

  return (
    <aside className="w-[280px] bg-white border-r border-[#E5E7EB] flex flex-col p-6 gap-8">
      {steps.map((step, index) => (
        <div key={step.number} className="flex flex-col gap-2">
          <div
            className={clsx("flex items-start gap-3 transition-all", {
              "opacity-100": currentStep >= step.number,
              "opacity-40": currentStep < step.number,
            })}
          >
            <span
              className={clsx(
                "w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all flex-shrink-0",
                {
                  "bg-[#4F46E5] text-white": currentStep === step.number,
                  "bg-[#12B76A] text-white": currentStep > step.number,
                  "bg-[#F3F4F6] text-[#667085]": currentStep < step.number,
                }
              )}
            >
              {currentStep > step.number ? "✓" : step.number}
            </span>
            <div className="flex flex-col gap-1">
              <p
                className={clsx("text-sm font-semibold transition-all", {
                  "text-[#101828]": currentStep >= step.number,
                  "text-[#667085]": currentStep < step.number,
                })}
              >
                {step.title}
              </p>
              <p className="text-xs text-[#667085]">{step.subtitle}</p>
            </div>
          </div>
          {index < steps.length - 1 && (
            <div className="flex items-center pl-5">
              <span
                className={clsx("w-0.5 h-8 transition-all", {
                  "bg-[#4F46E5]": currentStep > step.number,
                  "bg-[#E5E7EB]": currentStep <= step.number,
                })}
              />
            </div>
          )}
        </div>
      ))}
    </aside>
  );
};
