"use client";

import { ReceiptText, Box1, UserTick } from "iconsax-reactjs";

type Activity = {
  id: string;
  type: "receipt" | "transfer" | "registration";
  title: string;
  code?: string;
  timeAgo: string;
};

const activitiesData: Activity[] = [
  {
    id: "1",
    type: "receipt",
    title: "New receipt created",
    code: "WH-001",
    timeAgo: "10 minutes ago",
  },
  {
    id: "2",
    type: "transfer",
    title: "Commodity transfer completed",
    timeAgo: "5 minutes ago",
  },
  {
    id: "3",
    type: "registration",
    title: "Client registration approved",
    timeAgo: "3 minutes ago",
  },
];

const getActivityIcon = (type: Activity["type"]) => {
  switch (type) {
    case "receipt":
      return { icon: ReceiptText, color: "#DC2626", bgColor: "#FEE2E2" };
    case "transfer":
      return { icon: Box1, color: "#F59E0B", bgColor: "#FEF3C7" };
    case "registration":
      return { icon: UserTick, color: "#10B981", bgColor: "#D1FAE5" };
    default:
      return { icon: ReceiptText, color: "#667085", bgColor: "#F3F4F6" };
  }
};

export const RecentActivities = () => {
  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] p-4 h-full">
      <h3 className="text-sm font-semibold text-[#101828] mb-4">
        RECENT ACTIVITIES
      </h3>

      <div className="flex flex-col gap-4">
        {activitiesData.map((activity) => {
          const {
            icon: IconComponent,
            color,
            bgColor,
          } = getActivityIcon(activity.type);
          return (
            <div
              key={activity.id}
              className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg"
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: bgColor }}
              >
                <IconComponent size={16} color={color} variant="Bold" />
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="text-sm text-[#101828]">
                  {activity.title}
                  {activity.code && (
                    <span className="text-[#667085]"> - {activity.code}</span>
                  )}
                </p>
                <p className="text-xs text-[#667085]">{activity.timeAgo}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
