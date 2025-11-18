"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "iconsax-reactjs";
import { Button } from "@/src/components/ui/mantine/button";
import { Step1SelectMarketplace } from "@/src/components/trade-commodity/step1-select-marketplace";
import { Step2SelectReceipt } from "@/src/components/trade-commodity/step2-select-receipt";
import { Step3SetTradeDetails } from "@/src/components/trade-commodity/step3-set-trade-details";
import { Step4ReviewConfirm } from "@/src/components/trade-commodity/step4-review-confirm";
import {
  Marketplace,
  TradeReceipt,
  TradeDetails,
  TradePledge,
  TradeStep,
} from "@/src/types/trade";
import clsx from "clsx";
import { toast } from "sonner";

const TradeCommodityPage = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<TradeStep>(1);
  const [selectedMarketplace, setSelectedMarketplace] =
    useState<Marketplace | null>(null);
  const [selectedReceipt, setSelectedReceipt] = useState<TradeReceipt | null>(
    null
  );
  const [withdrawalQuantity, setWithdrawalQuantity] = useState<number>(0);
  const [tradeDetails, setTradeDetails] = useState<TradeDetails>({
    askingPrice: 0,
    tradeDuration: "",
    expiryDate: "",
  });

  const steps = [
    {
      number: 1,
      title: "Select market place",
      description: "Select your preferred marketplace for trade",
    },
    {
      number: 2,
      title: "Select receipt",
      description: "Select your preferred for trade",
    },
    {
      number: 3,
      title: "Set trade details",
      description: "Choose collateral receipts",
    },
    {
      number: 4,
      title: "Review & Confirm",
      description: "Finalize your pledge",
    },
  ];

  const canProceedToStep2 = selectedMarketplace !== null;
  const canProceedToStep3 =
    selectedReceipt !== null &&
    withdrawalQuantity > 0 &&
    withdrawalQuantity <= (selectedReceipt?.availableQuantity || 0);
  const canProceedToStep4 =
    tradeDetails.askingPrice > 0 &&
    tradeDetails.tradeDuration !== "" &&
    tradeDetails.expiryDate !== "";

  const handleNext = () => {
    if (currentStep === 1 && !canProceedToStep2) {
      toast.error("Please select a marketplace");
      return;
    }
    if (currentStep === 2 && !canProceedToStep3) {
      toast.error("Please select a receipt and enter valid withdrawal quantity");
      return;
    }
    if (currentStep === 3 && !canProceedToStep4) {
      toast.error("Please fill in all trade details");
      return;
    }

    if (currentStep < 4) {
      setCurrentStep((currentStep + 1) as TradeStep);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as TradeStep);
    }
  };

  const handleConfirm = () => {
    if (!selectedMarketplace || !selectedReceipt) return;

    const pledge: TradePledge = {
      marketplaceId: selectedMarketplace.id,
      marketplace: selectedMarketplace,
      receiptId: selectedReceipt.id,
      receipt: selectedReceipt,
      withdrawalQuantity,
      ...tradeDetails,
    };

    // TODO: Submit to API
    console.log("Trade Pledge:", pledge);
    toast.success("Trade successfully pushed to exchange!");

    // Navigate back or to success page
    setTimeout(() => {
      router.push("/dashboard");
    }, 1500);
  };

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
        <div className="flex flex-col flex-1">
          <h1 className="text-xl font-semibold text-[#101828]">
            Trade your commodity
          </h1>
          <p className="text-sm text-[#667085]">
            List your warehouse receipts on the Exchange to sell your commodities. Once listed, your receipt will be locked until trade is completed or expires.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex gap-6 p-6">
        {/* Step Navigation Sidebar */}
        <div className="w-64 flex-shrink-0">
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-4">
            <div className="flex flex-col gap-1">
              {steps.map((step, index) => (
                <div key={step.number}>
                  <div
                    className={clsx(
                      "flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-colors",
                      currentStep === step.number
                        ? "bg-[#F5F3FF]"
                        : currentStep > step.number
                        ? "bg-white hover:bg-[#F9FAFB]"
                        : "bg-white opacity-50 cursor-not-allowed"
                    )}
                    onClick={() => {
                      if (step.number < currentStep) {
                        setCurrentStep(step.number as TradeStep);
                      }
                    }}
                  >
                    <div
                      className={clsx(
                        "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                        currentStep === step.number
                          ? "bg-[#4F46E5] text-white"
                          : currentStep > step.number
                          ? "bg-[#12B76A] text-white"
                          : "bg-[#F2F4F7] text-[#667085]"
                      )}
                    >
                      {currentStep > step.number ? (
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M13.3332 4L5.99984 11.3333L2.6665 8"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        <span className="text-sm font-semibold">
                          {step.number}
                        </span>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3
                        className={clsx(
                          "text-sm font-medium",
                          currentStep === step.number
                            ? "text-[#4F46E5]"
                            : "text-[#344054]"
                        )}
                      >
                        {step.title}
                      </h3>
                      <p className="text-xs text-[#667085] mt-0.5">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="ml-7 h-6 border-l-2 border-[#E5E7EB]" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Step Content */}
        <div className="flex-1 flex flex-col gap-6">
          {currentStep === 1 && (
            <Step1SelectMarketplace
              selectedMarketplace={selectedMarketplace}
              onSelectMarketplace={setSelectedMarketplace}
            />
          )}

          {currentStep === 2 && (
            <Step2SelectReceipt
              selectedReceipt={selectedReceipt}
              withdrawalQuantity={withdrawalQuantity}
              onSelectReceipt={setSelectedReceipt}
              onWithdrawalQuantityChange={setWithdrawalQuantity}
            />
          )}

          {currentStep === 3 && (
            <Step3SetTradeDetails
              tradeDetails={tradeDetails}
              onTradeDetailsChange={setTradeDetails}
            />
          )}

          {currentStep === 4 &&
            selectedMarketplace &&
            selectedReceipt && (
              <Step4ReviewConfirm
                pledge={{
                  marketplaceId: selectedMarketplace.id,
                  marketplace: selectedMarketplace,
                  receiptId: selectedReceipt.id,
                  receipt: selectedReceipt,
                  withdrawalQuantity,
                  ...tradeDetails,
                }}
                onConfirm={handleConfirm}
                onBack={handleBack}
              />
            )}

          {/* Navigation Buttons (for steps 1-3) */}
          {currentStep < 4 && (
            <div className="flex items-center justify-end gap-3">
              {currentStep > 1 && (
                <Button
                  variant="default"
                  onClick={handleBack}
                  classNames={{
                    root: "!rounded-lg !border-[#D0D5DD] !h-11 !px-6",
                  }}
                >
                  Back
                </Button>
              )}
              <Button
                variant="primary"
                onClick={handleNext}
                classNames={{
                  root: "!rounded-lg !bg-[#4F46E5] hover:!bg-[#4338CA] !h-11 !px-6",
                }}
              >
                {currentStep === 1
                  ? "Select receipt"
                  : currentStep === 2
                  ? "Set trade details"
                  : "Review & Confirm"}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TradeCommodityPage;
