"use client";

import clsx from "clsx";

interface LoanStepHeadersProps {
  currentStep: number;
}

export const LoanStepHeaders = ({ currentStep }: LoanStepHeadersProps) => {
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
    <header className="bg-white py-6 px-6 rounded-xl flex items-center gap-4 w-full shadow-sm border border-[#E5E7EB]">
      {steps.map((step, index) => (
        <>
          <div
            key={index}
            className={clsx("flex items-center gap-3 transition-all", {
              "opacity-100": currentStep >= step.number,
              "opacity-50": currentStep < step.number,
            })}
          >
            <span
              className={clsx(
                "w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all",
                {
                  "bg-[#4F46E5] text-white": currentStep === step.number,
                  "bg-[#12B76A] text-white": currentStep > step.number,
                  "bg-[#F3F4F6] text-[#667085]": currentStep < step.number,
                }
              )}
            >
              {currentStep > step.number ? "✓" : step.number}
            </span>
            <span className="flex flex-col">
              <p
                className={clsx("text-sm font-semibold transition-all", {
                  "text-[#101828]": currentStep >= step.number,
                  "text-[#667085]": currentStep < step.number,
                })}
              >
                {step.title}
              </p>
              <p className="text-xs text-[#667085]">{step.subtitle}</p>
            </span>
          </div>
          {index < steps.length - 1 && (
            <span
              className={clsx("h-0.5 flex-1 transition-all", {
                "bg-[#4F46E5]": currentStep > step.number,
                "bg-[#E5E7EB]": currentStep <= step.number,
              })}
            />
          )}
        </>
      ))}
    </header>
  );
};
