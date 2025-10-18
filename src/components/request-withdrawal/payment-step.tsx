"use client";

import { Button } from "../ui/mantine/button";

export const PaymentStep = ({
  step,
  setStep,
}: {
  step: number;
  setStep: (step: number) => void;
}) => {
  return (
    <div className="bg-white rounded-lg p-4 flex flex-col gap-4 items-center justify-center">
      <h3 className="text-lg font-medium text-[#162964]">
        Payment Method Design Coming Soon !
      </h3>
      <div className="flex items-center gap-2.5">
        <Button
          variant="outline"
          classNames={{ root: "!rounded-lg" }}
          onClick={() => setStep(step - 1)}
        >
          Cancel
        </Button>
        <Button
          variant="primary"
          classNames={{ root: "!rounded-lg" }}
          onClick={() => setStep(step + 1)}
        >
          Proceed to Summary
        </Button>
      </div>
    </div>
  );
};
