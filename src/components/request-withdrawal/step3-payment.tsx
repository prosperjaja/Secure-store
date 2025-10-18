"use client";

import { Button } from "../ui/mantine/button";
import { Copy } from "iconsax-reactjs";

interface Step3Props {
  onConfirm: () => void;
  onBack: () => void;
}

export const Step3Payment = ({ onConfirm, onBack }: Step3Props) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-semibold text-[#101828]">Payment</h2>
        <p className="text-sm text-[#667085]">
          Please make deposit to the account number and confirm
        </p>
      </div>

      {/* Bank Account Details */}
      <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-[#667085]">FairMoney Bank Name</span>
            <span className="text-base font-semibold text-[#101828]">
              Fairmoney Microfinance Bank LTD
            </span>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-[#E5E7EB]">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-[#667085]">Account Number</span>
              <span className="text-2xl font-bold text-[#101828]">
                1234567890
              </span>
            </div>
            <Button
              variant="primary"
              classNames={{
                root: "!rounded-lg !bg-[#4F46E5] hover:!bg-[#4338CA] !text-sm ",
              }}
              leftSection={<Copy size={16} color="#fff" />}
            >
              Copy
            </Button>
          </div>

          <div className="flex flex-col gap-1 pt-3 border-t border-[#E5E7EB]">
            <span className="text-xs text-[#667085]">Account Name</span>
            <span className="text-base font-medium text-[#101828]">
              John Doe
            </span>
          </div>
        </div>
      </div>

      {/* Confirmation Section */}
      <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 flex flex-col gap-4">
        <h3 className="text-base font-semibold text-[#101828]">
          Confirm payment
        </h3>
        <p className="text-sm text-[#667085]">
          Have you made payment to the above account details provided?
        </p>
        <Button
          variant="primary"
          onClick={onConfirm}
          classNames={{
            root: "!rounded-lg !bg-[#4F46E5] hover:!bg-[#4338CA] w-fit",
          }}
        >
          Yes, I have made payment
        </Button>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-start">
        <Button
          variant="outline"
          onClick={onBack}
          classNames={{
            root: "!rounded-lg !border-[#D0D5DD] !px-6",
          }}
        >
          Back
        </Button>
      </div>
    </div>
  );
};
