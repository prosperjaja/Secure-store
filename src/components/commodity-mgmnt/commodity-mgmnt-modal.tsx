"use clent";
import { IoIosClose } from "react-icons/io";
import { Button } from "../ui/mantine/button";
import { Printer } from "iconsax-reactjs";
import { modals } from "@mantine/modals";

const data1 = [
  {
    title: "Commodity Name",
    value: "Maize",
  },
  {
    title: "Commodity Code",
    value: "MAIZE001",
  },
  {
    title: "Commodity Type",
    value: "Grain Bags",
  },
  {
    title: "Unit of measurement",
    value: "Bags",
  },
  {
    title: "Quality",
    value: "100 Bags",
  },
  {
    title: "Gross Weight",
    value: "10,000kg",
  },
  {
    title: "Net Weight",
    value: "9,800kg",
  },
  {
    title: "Origin",
    value: "Funtua, Katsina State",
  },
  {
    title: "Gross Weight",
    value: "15 Dec 2023",
  },
];

const data2 = [
  {
    title: "Grade",
    value: "Grade A",
  },
  {
    title: "Moisture Content",
    value: "12%",
  },
  {
    title: "Foreign Matter Content",
    value: "1.5%",
  },
  {
    title: "Protein Content",
    value: "10%",
  },
  {
    title: "Aflatoxin Level",
    value: "5ppb",
  },
  {
    title: "Color",
    value: "Yellow",
  },
  {
    title: "Test Weight",
    value: "75kg/hl",
  },
  {
    title: "Damage Level",
    value: "2%",
  },
  {
    title: "Certifications",
    value: "Organic",
  },
];

const data3 = [
  {
    title: "Warehouse",
    value: "Funtua Grain Storage Ltd.",
  },
  {
    title: "Warehouse Code",
    value: "WAREHOUSE-001",
  },
  {
    title: "Date of Deposit",
    value: "10 Jan 2024",
  },
  {
    title: "Date of issue",
    value: "11 Jan 2024",
  },
];
const data4 = [
  {
    title: "Expiry Date",
    value: "10 Jan 2024",
  },
  {
    title: "Storage Fee",
    value: "#500 per bag per month",
  },
  {
    title: "Total Storage Fee Due",
    value: "#50,000",
  },
  {
    title: "Special Instructions",
    value: "Store in a cool, dry place",
  },
];

export const CommodityMgmntModal = () => {
  return (
    <div className="w-[700px] rounded-lg flex flex-col gap-3 bg-white">
      <header className="flex items-center gap-4 justify-between p-3 border-b-[0.5px] border-[#e8e8e8] ">
        <span className="flex flex-col">
          <h3 className="text-base text-[#162964] font-bold">
            Maize - Detailed Information
          </h3>
          <p className="text-[13px] text-[#A2A2A2] font-medium">
            Receipt WR-2024-001
          </p>
        </span>
        <span
          className="flex items-center justify-center w-fit hover:bg-[#fafafa] cursor-pointer rounded p-1"
          onClick={() => modals.closeAll()}
        >
          <IoIosClose size={20} color="#000" />
        </span>
      </header>
      <section className="flex flex-col gap-4 p-3">
        <figure className="flex flex-col gap-2">
          <h3 className="text-sm font-bold text-[#A2A2A2]">
            Quality Parameter
          </h3>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col gap-1 flex-1">
              {data1?.map((item, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-4 justify-between border-b border-dashed p-1
                   border-[#e8e8e8]"
                >
                  <p className="text-sm font-medium text-[#A2A2A2]">
                    {item?.title}
                  </p>
                  <p className="text-sm font-medium text-[#A2A2A2]">
                    {item?.value}
                  </p>
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-1 flex-1">
              {data2?.map((item, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-4 justify-between border-b border-dashed p-1
                   border-[#e8e8e8]"
                >
                  <p className="text-sm font-medium text-[#A2A2A2]">
                    {item?.title}
                  </p>
                  <p className="text-sm font-medium text-[#A2A2A2]">
                    {item?.value}
                  </p>
                </span>
              ))}
            </div>
          </div>
        </figure>
        <figure className="flex flex-col gap-2">
          <h3 className="text-sm font-bold text-[#A2A2A2]">
            Storage Information
          </h3>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col gap-1 flex-1">
              {data3?.map((item, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-4 justify-between border-b border-dashed p-1
                   border-[#e8e8e8]"
                >
                  <p className="text-sm font-medium text-[#A2A2A2]">
                    {item?.title}
                  </p>
                  <p className="text-sm font-medium text-[#A2A2A2]">
                    {item?.value}
                  </p>
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-1 flex-1">
              {data4?.map((item, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-4 justify-between border-b border-dashed p-1
                   border-[#e8e8e8]"
                >
                  <p className="text-sm font-medium text-[#A2A2A2]">
                    {item?.title}
                  </p>
                  <p className="text-sm font-medium text-[#A2A2A2]">
                    {item?.value}
                  </p>
                </span>
              ))}
            </div>
          </div>
        </figure>
        <div className="flex items-end justify-end mt-2">
          <Button
            variant="primary"
            leftSection={<Printer size={16} color="#fff" />}
            classNames={{
              root: "!p-2 !text-white !bg-[#66757F] !rounded-lg",
            }}
          >
            Print Details
          </Button>
        </div>
      </section>
    </div>
  );
};
