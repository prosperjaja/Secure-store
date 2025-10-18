"use client";

import { usePathname } from "next/navigation";
import {
  Wallet,
  Category2,
  Receipt1,
  Buildings2,
  WalletRemove,
  MoneyTime,
  Setting2,
} from "iconsax-reactjs";
import { WhiteLogo } from "./icons";
import Link from "next/link";
import clsx from "clsx";

export const Sidebar = () => {
  const pathname = usePathname();

  const clientSidebarItems = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: Category2,
    },
    {
      label: "Receipt Manangement",
      href: "/receipt-management",
      icon: Receipt1,
    },
    {
      label: "Commodity Management",
      href: "/commodity-management",
      icon: Buildings2,
    },
    {
      label: "Take a Loan",
      href: "/loan",
      icon: Wallet,
    },
    {
      label: "Request Withdrawal",
      href: "/request-withdrawal",
      icon: WalletRemove,
    },
    {
      label: "Reports",
      href: null,
      children: [
        // {
        //   label: "Storage Reports",
        //   href: "/storage-reports",
        //   icon: Chart2,
        // },
        {
          label: "Transaction Reports",
          href: "/transaction-reports",
          icon: MoneyTime,
        },
      ],
    },
    {
      label: "Account",
      href: null,
      children: [
        // {
        //   label: "Profile",
        //   href: "/profile",
        //   icon: User,
        // },
        {
          label: "Settings",
          href: "/settings",
          icon: Setting2,
        },
      ],
    },
  ];

  return (
    <aside className="min-w-[220px] h-full p-4 flex flex-col overflow-auto gap-4 bg-[#182E67]">
      <header className="flex items-end gap-0.5">
        <WhiteLogo width="100" height="50" />
      </header>
      <nav className="flex flex-col gap-2">
        {clientSidebarItems.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-1">
            {item.href && (
              <Link
                href={item.href ? item.href : ""}
                key={idx}
                className={clsx(
                  "w-full p-2 flex items-center gap-2  rounded-lg",
                  pathname?.includes(item.href as string) &&
                    "bg-[#fff] shadow-md",
                  item.href && "cursor-pointer",
                  pathname?.includes(item.href as string)
                    ? "hover:bg-white"
                    : "hover:bg-blue-900"
                )}
              >
                {item.icon && (
                  <item.icon
                    color={
                      pathname?.includes(item.href as string)
                        ? "#182E67"
                        : "#fff"
                    }
                    size={18}
                    variant={
                      pathname?.includes(item.href as string)
                        ? "Bold"
                        : "Outline"
                    }
                  />
                )}

                <span
                  className={clsx(
                    "text-[14px] font-medium",
                    pathname?.includes(item.href as string)
                      ? "text-[#182E67]"
                      : "text-[#fff]"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            )}
            {item.children && (
              <div className="flex flex-col gap-1 mt-3">
                <h4 className="text-[#b9bcc8] text-[14px] font-medium pl-2">
                  {item.label?.toUpperCase()}
                </h4>
                {item.children.map((child, idx) => (
                  <Link
                    href={child.href as string}
                    key={idx}
                    className={clsx(
                      "w-full p-2 flex items-center gap-2  rounded-lg",
                      pathname?.includes(child.href as string) &&
                        "bg-[#fff] shadow-md",
                      child.href && "cursor-pointer",
                      pathname?.includes(child.href as string)
                        ? "hover:bg-[#fff]"
                        : "hover:bg-blue-900"
                    )}
                  >
                    {child.icon && (
                      <child.icon
                        color={
                          pathname?.includes(child.href as string)
                            ? "#182E67"
                            : "#fff"
                        }
                        size={18}
                        variant={
                          pathname?.includes(child.href as string)
                            ? "Bold"
                            : "Outline"
                        }
                      />
                    )}
                    <span
                      className={clsx(
                        "text-[14px] font-medium",
                        pathname?.includes(child.href as string)
                          ? "text-[#182E67]"
                          : "text-[#fff]"
                      )}
                    >
                      {child.label}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};
