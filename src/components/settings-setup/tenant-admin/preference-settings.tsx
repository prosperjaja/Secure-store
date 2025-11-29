"use client";

import { useState } from "react";
import { Switch, Select } from "@mantine/core";

export const PreferenceSettings = () => {
  const [notifications, setNotifications] = useState({
    emailNotification: true,
    smsNotification: true,
    inAppNotification: true,
    emailNotification2: true,
  });

  const [notificationRules, setNotificationRules] = useState({
    approval: true,
    payment: true,
    report: true,
  });

  const [backupFrequency, setBackupFrequency] = useState("Daily");

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold text-[#101828]">Preferences</h2>
        <p className="text-sm text-[#667085]">
          Customize your tenant&apos;s branding and appearance
        </p>
      </div>

      {/* Notification Settings */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-[#101828]">
            Notification Settings
          </h3>
          <p className="text-sm text-[#667085]">
            Configure notification preferences
          </p>
        </div>

        <div className="flex flex-col gap-4 border-t border-[#E5E7EB] pt-4">
          {/* Email Notification */}
          <div className="flex items-center justify-between py-2">
            <span className="text-sm text-[#101828]">Email Notification</span>
            <Switch
              checked={notifications.emailNotification}
              onChange={(e) =>
                setNotifications({
                  ...notifications,
                  emailNotification: e.currentTarget.checked,
                })
              }
              color="indigo"
              size="md"
            />
          </div>

          {/* SMS Notification */}
          <div className="flex items-center justify-between py-2">
            <span className="text-sm text-[#101828]">SMS Notification</span>
            <Switch
              checked={notifications.smsNotification}
              onChange={(e) =>
                setNotifications({
                  ...notifications,
                  smsNotification: e.currentTarget.checked,
                })
              }
              color="indigo"
              size="md"
            />
          </div>

          {/* In App Notification */}
          <div className="flex items-center justify-between py-2">
            <span className="text-sm text-[#101828]">In App Notification</span>
            <Switch
              checked={notifications.inAppNotification}
              onChange={(e) =>
                setNotifications({
                  ...notifications,
                  inAppNotification: e.currentTarget.checked,
                })
              }
              color="indigo"
              size="md"
            />
          </div>

          {/* Email Notification (duplicate as shown in design) */}
          <div className="flex items-center justify-between py-2">
            <span className="text-sm text-[#101828]">Email Notification</span>
            <Switch
              checked={notifications.emailNotification2}
              onChange={(e) =>
                setNotifications({
                  ...notifications,
                  emailNotification2: e.currentTarget.checked,
                })
              }
              color="indigo"
              size="md"
            />
          </div>

          {/* Notification Rules Section */}
          <div className="mt-2">
            <span className="text-sm font-medium text-[#101828]">
              Notification Rules
            </span>
          </div>

          {/* Approval */}
          <div className="flex items-center justify-between py-2 pl-4">
            <span className="text-sm text-[#667085]">Approval</span>
            <Switch
              checked={notificationRules.approval}
              onChange={(e) =>
                setNotificationRules({
                  ...notificationRules,
                  approval: e.currentTarget.checked,
                })
              }
              color="indigo"
              size="md"
            />
          </div>

          {/* Payment */}
          <div className="flex items-center justify-between py-2 pl-4">
            <span className="text-sm text-[#667085]">Payment</span>
            <Switch
              checked={notificationRules.payment}
              onChange={(e) =>
                setNotificationRules({
                  ...notificationRules,
                  payment: e.currentTarget.checked,
                })
              }
              color="indigo"
              size="md"
            />
          </div>

          {/* Report */}
          <div className="flex items-center justify-between py-2 pl-4">
            <span className="text-sm text-[#667085]">Report</span>
            <Switch
              checked={notificationRules.report}
              onChange={(e) =>
                setNotificationRules({
                  ...notificationRules,
                  report: e.currentTarget.checked,
                })
              }
              color="indigo"
              size="md"
            />
          </div>
        </div>
      </div>

      {/* Backup & Data Control */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-[#101828]">
            Backup & Data Control
          </h3>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label className="text-sm font-medium text-[#344054] mb-1.5 block">
              Schedule Auto Backup
            </label>
            <Select
              value={backupFrequency}
              onChange={(value) => setBackupFrequency(value || "Daily")}
              data={["Daily", "Weekly", "Monthly", "Never"]}
              classNames={{
                input: "!h-11 !rounded-lg border-[#D0D5DD]",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
