"use client";

import { TextInput, Select, Switch } from "@mantine/core";

export type AccountSetupFormData = {
  username: string;
  temporaryPassword: string;
  permissions: {
    manageClients: boolean;
    manageReceipts: boolean;
    viewReports: boolean;
    approveDeposit: boolean;
  };
  notifications: {
    email: boolean;
    sms: boolean;
    inApp: boolean;
  };
};

type AccountSetupStepProps = {
  formData: AccountSetupFormData;
  onFormDataChange: (data: AccountSetupFormData) => void;
  onBack: () => void;
  onSubmit: () => void;
};

export const AccountSetupStep = ({
  formData,
  onFormDataChange,
  onBack,
  onSubmit,
}: AccountSetupStepProps) => {
  const handleInputChange = (field: keyof AccountSetupFormData, value: string) => {
    onFormDataChange({
      ...formData,
      [field]: value,
    });
  };

  const handlePermissionChange = (
    permission: keyof AccountSetupFormData["permissions"],
    value: boolean
  ) => {
    onFormDataChange({
      ...formData,
      permissions: {
        ...formData.permissions,
        [permission]: value,
      },
    });
  };

  const handleNotificationChange = (
    notification: keyof AccountSetupFormData["notifications"],
    value: boolean
  ) => {
    onFormDataChange({
      ...formData,
      notifications: {
        ...formData.notifications,
        [notification]: value,
      },
    });
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold text-[#101828]">Account Setup</h2>
        <p className="text-sm text-[#667085]">Login and Permissions</p>
      </div>

      {/* Username and Password */}
      <div className="bg-[#F9FAFB] rounded-xl p-6 flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-4">
          <TextInput
            label="Username"
            placeholder="Enter preferred username here"
            value={formData.username}
            onChange={(e) => handleInputChange("username", e.target.value)}
            classNames={{
              label: "text-sm font-medium text-[#344054] mb-1.5",
              input: "!h-11 !rounded-lg border-[#D0D5DD] bg-white",
            }}
          />
          <Select
            label="Temporary Password"
            placeholder="Enter password here"
            value={formData.temporaryPassword}
            onChange={(value) =>
              handleInputChange("temporaryPassword", value || "")
            }
            data={[
              { value: "auto", label: "Auto-generate" },
              { value: "manual", label: "Set manually" },
            ]}
            classNames={{
              label: "text-sm font-medium text-[#344054] mb-1.5",
              input: "!h-11 !rounded-lg border-[#D0D5DD] bg-white",
            }}
          />
        </div>
      </div>

      {/* Assign Permissions */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 flex flex-col gap-5">
        <div>
          <h3 className="text-lg font-semibold text-[#101828]">
            Assign Permissions
          </h3>
          <p className="text-sm text-[#667085]">
            Configure notification preferences
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {/* Manage Clients */}
          <div className="flex items-center justify-between py-2">
            <span className="text-sm text-[#101828]">Manage Clients</span>
            <Switch
              checked={formData.permissions.manageClients}
              onChange={(e) =>
                handlePermissionChange("manageClients", e.currentTarget.checked)
              }
              color="indigo"
              size="md"
            />
          </div>

          {/* Manage Receipts */}
          <div className="flex items-center justify-between py-2">
            <span className="text-sm text-[#101828]">Manage Receipts</span>
            <Switch
              checked={formData.permissions.manageReceipts}
              onChange={(e) =>
                handlePermissionChange("manageReceipts", e.currentTarget.checked)
              }
              color="indigo"
              size="md"
            />
          </div>

          {/* View Reports */}
          <div className="flex items-center justify-between py-2">
            <span className="text-sm text-[#101828]">View Reports</span>
            <Switch
              checked={formData.permissions.viewReports}
              onChange={(e) =>
                handlePermissionChange("viewReports", e.currentTarget.checked)
              }
              color="indigo"
              size="md"
            />
          </div>

          {/* Approve Deposit */}
          <div className="flex items-center justify-between py-2">
            <span className="text-sm text-[#101828]">Approve deposit</span>
            <Switch
              checked={formData.permissions.approveDeposit}
              onChange={(e) =>
                handlePermissionChange("approveDeposit", e.currentTarget.checked)
              }
              color="indigo"
              size="md"
            />
          </div>

          {/* Notification Preference Section */}
          <div className="pt-4 border-t border-[#E5E7EB]">
            <h4 className="text-sm font-semibold text-[#101828] mb-4">
              Notification Preference
            </h4>

            {/* Email */}
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-[#101828]">Email</span>
              <Switch
                checked={formData.notifications.email}
                onChange={(e) =>
                  handleNotificationChange("email", e.currentTarget.checked)
                }
                color="indigo"
                size="md"
              />
            </div>

            {/* SMS */}
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-[#101828]">SMS</span>
              <Switch
                checked={formData.notifications.sms}
                onChange={(e) =>
                  handleNotificationChange("sms", e.currentTarget.checked)
                }
                color="indigo"
                size="md"
              />
            </div>

            {/* In-App */}
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-[#101828]">In-App</span>
              <Switch
                checked={formData.notifications.inApp}
                onChange={(e) =>
                  handleNotificationChange("inApp", e.currentTarget.checked)
                }
                color="indigo"
                size="md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between pt-4">
        <button
          onClick={onBack}
          className="px-8 py-2.5 text-sm font-semibold text-[#344054] bg-white border border-[#D0D5DD] rounded-lg hover:bg-gray-50 cursor-pointer"
        >
          Back
        </button>
        <button
          onClick={onSubmit}
          className="px-8 py-2.5 text-sm font-semibold text-white bg-[#4F46E5] rounded-lg hover:bg-[#4338CA] cursor-pointer"
        >
          Continue
        </button>
      </div>
    </div>
  );
};
