"use client";

import { useState } from "react";
import { Switch, Select } from "@mantine/core";

export const ApprovalSettings = () => {
  const [approvalSettings, setApprovalSettings] = useState({
    requireDepositApproval: true,
    requireWithdrawalApproval: true,
    requireReceiptApproval: true,
    autoApproveSmallDeposits: false,
    autoApproveVerifiedClients: false,
  });

  const [approvalThresholds, setApprovalThresholds] = useState({
    smallDepositThreshold: "100",
    autoApprovalDelay: "24 hours",
  });

  const thresholdOptions = ["50", "100", "200", "500", "1000"];
  const delayOptions = ["1 hour", "6 hours", "12 hours", "24 hours", "48 hours"];

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold text-[#101828]">Approval Settings</h2>
        <p className="text-sm text-[#667085]">
          Configure approval workflows and thresholds for your tenant
        </p>
      </div>

      {/* Approval Workflows */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-[#101828]">
            Approval Workflows
          </h3>
          <p className="text-sm text-[#667085]">
            Enable or disable approval requirements for different actions
          </p>
        </div>

        <div className="flex flex-col gap-4 border-t border-[#E5E7EB] pt-4">
          {/* Require Deposit Approval */}
          <div className="flex items-center justify-between py-2">
            <div>
              <span className="text-sm font-medium text-[#101828]">
                Require Deposit Approval
              </span>
              <p className="text-xs text-[#667085]">
                All deposits require admin approval before processing
              </p>
            </div>
            <Switch
              checked={approvalSettings.requireDepositApproval}
              onChange={(e) =>
                setApprovalSettings({
                  ...approvalSettings,
                  requireDepositApproval: e.currentTarget.checked,
                })
              }
              color="indigo"
              size="md"
            />
          </div>

          {/* Require Withdrawal Approval */}
          <div className="flex items-center justify-between py-2">
            <div>
              <span className="text-sm font-medium text-[#101828]">
                Require Withdrawal Approval
              </span>
              <p className="text-xs text-[#667085]">
                All withdrawals require admin approval before release
              </p>
            </div>
            <Switch
              checked={approvalSettings.requireWithdrawalApproval}
              onChange={(e) =>
                setApprovalSettings({
                  ...approvalSettings,
                  requireWithdrawalApproval: e.currentTarget.checked,
                })
              }
              color="indigo"
              size="md"
            />
          </div>

          {/* Require Receipt Approval */}
          <div className="flex items-center justify-between py-2">
            <div>
              <span className="text-sm font-medium text-[#101828]">
                Require Receipt Approval
              </span>
              <p className="text-xs text-[#667085]">
                Receipts need to be approved before they become active
              </p>
            </div>
            <Switch
              checked={approvalSettings.requireReceiptApproval}
              onChange={(e) =>
                setApprovalSettings({
                  ...approvalSettings,
                  requireReceiptApproval: e.currentTarget.checked,
                })
              }
              color="indigo"
              size="md"
            />
          </div>
        </div>
      </div>

      {/* Auto-Approval Rules */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-[#101828]">
            Auto-Approval Rules
          </h3>
          <p className="text-sm text-[#667085]">
            Configure automatic approval for specific conditions
          </p>
        </div>

        <div className="flex flex-col gap-4 border-t border-[#E5E7EB] pt-4">
          {/* Auto-approve Small Deposits */}
          <div className="flex items-center justify-between py-2">
            <div>
              <span className="text-sm font-medium text-[#101828]">
                Auto-approve Small Deposits
              </span>
              <p className="text-xs text-[#667085]">
                Automatically approve deposits below threshold
              </p>
            </div>
            <Switch
              checked={approvalSettings.autoApproveSmallDeposits}
              onChange={(e) =>
                setApprovalSettings({
                  ...approvalSettings,
                  autoApproveSmallDeposits: e.currentTarget.checked,
                })
              }
              color="indigo"
              size="md"
            />
          </div>

          {/* Auto-approve Verified Clients */}
          <div className="flex items-center justify-between py-2">
            <div>
              <span className="text-sm font-medium text-[#101828]">
                Auto-approve Verified Clients
              </span>
              <p className="text-xs text-[#667085]">
                Skip approval for verified/trusted clients
              </p>
            </div>
            <Switch
              checked={approvalSettings.autoApproveVerifiedClients}
              onChange={(e) =>
                setApprovalSettings({
                  ...approvalSettings,
                  autoApproveVerifiedClients: e.currentTarget.checked,
                })
              }
              color="indigo"
              size="md"
            />
          </div>
        </div>
      </div>

      {/* Approval Thresholds */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-[#101828]">
            Approval Thresholds
          </h3>
          <p className="text-sm text-[#667085]">
            Set thresholds and delays for approval workflows
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-[#344054] mb-1.5 block">
                Small Deposit Threshold (MT)
              </label>
              <Select
                value={approvalThresholds.smallDepositThreshold}
                onChange={(value) =>
                  setApprovalThresholds({
                    ...approvalThresholds,
                    smallDepositThreshold: value || "100",
                  })
                }
                data={thresholdOptions}
                classNames={{
                  input: "!h-11 !rounded-lg border-[#D0D5DD]",
                }}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-[#344054] mb-1.5 block">
                Auto-Approval Delay
              </label>
              <Select
                value={approvalThresholds.autoApprovalDelay}
                onChange={(value) =>
                  setApprovalThresholds({
                    ...approvalThresholds,
                    autoApprovalDelay: value || "24 hours",
                  })
                }
                data={delayOptions}
                classNames={{
                  input: "!h-11 !rounded-lg border-[#D0D5DD]",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="px-6 py-2.5 text-sm font-semibold text-white bg-[#4F46E5] rounded-lg hover:bg-[#4338CA] cursor-pointer">
          Save Changes
        </button>
      </div>
    </div>
  );
};
