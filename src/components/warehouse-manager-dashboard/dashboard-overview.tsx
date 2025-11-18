"use client";

import { ArrowDown2, Box1, BoxAdd, Maximize, User } from "iconsax-reactjs";
import { Select } from "../ui/mantine/select";

const overviewDetails = [
  {
    title: "Total Client",
    value: 255,
    description: "+13 registered last 2 months",
    icon: User,
    bg: "#22C55E",
    background: "#ECFEF8",
    withUnit: false,
  },
  {
    title: "Total Commodity",
    value: 102,
    description: "+13 registered last 2 months",
    icon: Box1,
    bg: "#818CF8",
    background: "#EFF0FE",
    withUnit: true,
  },
  {
    title: "Under Lien",
    value: 23,
    description: "+5 registered last 2 months",
    icon: BoxAdd,
    bg: "#FABD36",
    background: "#FDF3DC",
    withUnit: false,
  },
  {
    title: "Pending Withdrawal",
    value: 15,
    description: "+12 request last 2 months",
    icon: Maximize,
    bg: "#EF4444",
    background: "#FFF1F1",
    withUnit: false,
  },
];

export const DashboardOverview = () => {
  return <section className=""></section>;
};

export const SummaryCards = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex-1 grid grid-cols-2 gap-2.5">
        {overviewDetails.map((item, idx) => (
          <div
            key={idx}
            className="p-4 flex-col shadow-sm flex items-center gap-3"
            style={{ background: item.background }}
          >
            <figure className="flex items-center gap-2 justify-between">
              <h4 className="text-sm font-medium text-gray-500">
                {item.title}
              </h4>
              <div
                className="p-3 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: item.bg }}
              >
                <item.icon size={24} color="#fff" />
              </div>
            </figure>
            <div className="space-y-0.5">
              <h3 className="text-2xl font-semibold text-gray-900">
                {item.value}{" "}
                {item.withUnit && (
                  <span className="text-base">Metric tons</span>
                )}
              </h3>
              <p className="text-xs text-[#3F3F46CC]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2.5">
        <figure className="flex flex-col gap-1">
          <header className="flex items-center gap-2.5 justify-between">
            <h3>STORAGE DISTRIBUTION</h3>
            <Select
              rightSection={<ArrowDown2 size={12} />}
              placeholder="October"
            />
          </header>
        </figure>
        <figure className="flex flex-col gap-1">
          <header className="flex items-center gap-2.5 justify-between">
            <h3>RECENT ACTIVITIES</h3>
            <p className="text-sm cursor-pointer text-gray-800">See All</p>
          </header>
        </figure>
      </div>
    </div>
  );
};
