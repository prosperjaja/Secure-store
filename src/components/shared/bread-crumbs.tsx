"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight2 } from "iconsax-reactjs";

export default function Breadcrumbs() {
  const pathname = usePathname();

  // Skip if we're on the homepage
  if (pathname === "/") return null;

  // Split and decode the pathname segments
  const segments = pathname
    .split("/")
    .filter(Boolean)
    .map((segment) => decodeURIComponent(segment));

  // Create the breadcrumb items
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    ...segments.map((segment, index) => {
      const href = `/${segments.slice(0, index + 1).join("/")}`;
      // Convert segment to title case (capitalize first letter of each word)
      const label = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      return { label, href };
    }),
  ];

  return (
    <nav className="flex items-center space-x-1 text-sm">
      {breadcrumbItems.map((item, index) => {
        const isLastItem = index === breadcrumbItems.length - 1;

        return (
          <div key={item.href} className="flex items-center">
            {index === 0 ? (
              <Link
                href={item.href}
                className="flex items-center hover:text-gray-600 transition-colors text-[#172d71] text-[14px] font-medium"
              >
                {/* <Home size={16} className="mr-1" /> */}
                <span>{item.label}</span>
              </Link>
            ) : (
              <div className="flex items-center">
                <ArrowRight2 size={16} className="mx-1 text-gray-400" />
                {isLastItem ? (
                  <span className="text-[#172d71] text-[14px] font-medium">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-gray-600 transition-colors text-[#172d71] text-[14px] font-medium"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
