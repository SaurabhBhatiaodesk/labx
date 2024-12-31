import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import MainHeading from "@/components/ManinHeading/MainHeading";
import "./price.css";
import { LuPlus } from "react-icons/lu";
import { GrSubtract } from "react-icons/gr";
import MainTitle from "@/components/MainTitle/MainTitle";

// Define interfaces for your data structure
interface TableColumn {
  header: string;
  key: string;
}

interface TableRow {
  [key: string]: string;
}

interface AccordionData {
  title: string;
  content: {
    table: {
      columns: TableColumn[];
      rows: TableRow[];
    };
  };
}

interface Category {
  id: number;
  category: string;
  accordionData: AccordionData[];
}

interface PriceData {
  id: number;
  title: string;
  description: string;
  mobileCategory: { mobile: string }[];
  categories: {
    [key: string]: Category[];
  };
}

const Pricing: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number | null>(
    0
  );
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  console.log("activeTabIndex", activeTabIndex);

  const [selectedCategory, setSelectedCategory] = useState<string>("iPhone");

  const priceData: PriceData[] = [
    {
      id: 0,
      title: "Screen Refurbishment Pricing - ( Buy Back )",
      description:
        "Explore the pricing details for our professional device repair services.",
      mobileCategory: [
        { mobile: "iPhone" },
        { mobile: "androidPro" },
        { mobile: "androidLite" },
      ],
      categories: {
        iPhone: [
          {
            id: 0,
            category: "iPhone",
            accordionData: [
              {
                title: "iPhone 15 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A ) ",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "iPhone 15 Pro Max",
                        repairCost: "$200",
                        replacementGradeA: "$200",
                        replacementGradeB: "$70",
                      },
                      {
                        deviceModel: "iPhone 15 Pro",
                        repairCost: "$200",
                        replacementGradeA: "$140",
                        replacementGradeB: "$60",
                      },
                      {
                        deviceModel: "iPhone 15 Plus",
                        repairCost: "$120",
                        replacementGradeA: "$60",
                        replacementGradeB: "$25",
                      },
                      {
                        deviceModel: "iPhone 15",
                        repairCost: "$120",
                        replacementGradeA: "$55",
                        replacementGradeB: "$25",
                      },
                    ],
                  },
                },
              },
              {
                title: "iPhone 14 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A ) ",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "iPhone 14 Pro Max",
                        repairCost: "$170",
                        replacementGradeA: "$180",
                        replacementGradeB: "$60",
                      },
                      {
                        deviceModel: "iPhone 14 Pro",
                        repairCost: "$120",
                        replacementGradeA: "$160",
                        replacementGradeB: "$50",
                      },
                      {
                        deviceModel: "iPhone 14 Plus",
                        repairCost: "$90",
                        replacementGradeA: "$60",
                        replacementGradeB: "$35",
                      },
                      {
                        deviceModel: "iPhone 14",
                        repairCost: "$90",
                        replacementGradeA: "$60",
                        replacementGradeB: "$25",
                      },
                    ],
                  },
                },
              },
              {
                title: "iPhone 13 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A ) ",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "iPhone 13 Pro Max",
                        repairCost: "$140",
                        replacementGradeA: "$130",
                        replacementGradeB: "$45",
                      },
                      {
                        deviceModel: "iPhone 13 Pro",
                        repairCost: "$120",
                        replacementGradeA: "$110",
                        replacementGradeB: "$35",
                      },
                      {
                        deviceModel: "iPhone 13",
                        repairCost: "$55",
                        replacementGradeA: "$50",
                        replacementGradeB: "$20",
                      },
                      {
                        deviceModel: "iPhone 13 Mini",
                        repairCost: "$55",
                        replacementGradeA: "$50",
                        replacementGradeB: "$20",
                      },
                    ],
                  },
                },
              },
              {
                title: "iPhone 12 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      { header: "Buy Back ( Grade A ) ", key: "replacementGradeA" },
                      { header: "Buy Back ( Grade B )", key: "replacementGradeB" },
                    ],
                    rows: [
                      {
                        deviceModel: "iPhone 12 Pro Max",
                        repairCost: "$70",
                        replacementGradeA: "$70",
                        replacementGradeB: "$20",
                      },
                      {
                        deviceModel: "iPhone 12 Pro",
                        repairCost: "$50",
                        replacementGradeA: "$35",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: "iPhone 12",
                        repairCost: "$50",
                        replacementGradeA: "$35",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: "iPhone 12 Mini",
                        repairCost: "$50",
                        replacementGradeA: "$45",
                        replacementGradeB: "$20",
                      },
                    ],
                  },
                },
              },
              {
                title: "iPhone 11 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      { header: "Buy Back ( Grade A ) ", key: "replacementGradeA" },
                      { header: "Buy Back ( Grade B )", key: "replacementGradeB" },
                    ],
                    rows: [
                      {
                        deviceModel: "iPhone 11 Pro Max",
                        repairCost: "$50",
                        replacementGradeA: "$35",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: "iPhone 11 Pro",
                        repairCost: "$40",
                        replacementGradeA: "$30",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: "iPhone 11",
                        repairCost: "X",
                        replacementGradeA: "X",
                        replacementGradeB: "X",
                      },
                    ],
                  },
                },
              },
              
           
            ],
          },
        ],
        androidPro: [
          {
            id: 1,
            category: "Android Pro",
            accordionData: [
              {
                title: "Google Pixel Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Repair Cost ($)", key: "repairCost" },
                      {
                        header: "Replacement (Grade A)",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Replacement (Grade B)",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "Pixel 7 Pro",
                        repairCost: "$400",
                        replacementGradeA: "$350",
                        replacementGradeB: "$300",
                      },
                      {
                        deviceModel: "Pixel 7",
                        repairCost: "$350",
                        replacementGradeA: "$300",
                        replacementGradeB: "$250",
                      },
                    ],
                  },
                },
              },
            ],
          },
        ],
        androidLite: [
          {
            id: 2,
            category: "Android Pro",
            accordionData: [
              {
                title: "Google Pixel Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Repair Cost ($)", key: "repairCost" },
                      {
                        header: "Replacement (Grade A)",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Replacement (Grade B)",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "Pixel 7 Pro",
                        repairCost: "$400",
                        replacementGradeA: "$350",
                        replacementGradeB: "$300",
                      },
                      {
                        deviceModel: "Pixel 7",
                        repairCost: "$350",
                        replacementGradeA: "$300",
                        replacementGradeB: "$250",
                      },
                    ],
                  },
                },
              },
            ],
          },
        ],
      },
    },
    {
      id: 1,
      title: "Device Maintenance Price List",
      description:
        "Check our affordable maintenance services for a variety of devices.",
      mobileCategory: [
        { mobile: "android" },
        { mobile: "androidPro" },
        { mobile: "androidLite" },
      ],
      categories: {
        android: [
          {
            id: 0,
            category: "Tablet",
            accordionData: [
              {
                title: "iPad Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Repair Cost ($)", key: "repairCost" },
                      {
                        header: "Screen Replacement",
                        key: "screenReplacement",
                      },
                      {
                        header: "Battery Replacement",
                        key: "batteryReplacement",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "iPad Pro 12.9",
                        repairCost: "$500",
                        screenReplacement: "$450",
                        batteryReplacement: "$400",
                      },
                      {
                        deviceModel: "iPad Air 10.9",
                        repairCost: "$400",
                        screenReplacement: "$350",
                        batteryReplacement: "$300",
                      },
                    ],
                  },
                },
              },
            ],
          },
        ],
        androidPro: [
          {
            id: 1,
            category: "Tablet Pro",
            accordionData: [
              {
                title: "Samsung Tab Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Repair Cost ($)", key: "repairCost" },
                      {
                        header: "Screen Replacement",
                        key: "screenReplacement",
                      },
                      {
                        header: "Battery Replacement",
                        key: "batteryReplacement",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "Galaxy Tab S8 Ultra",
                        repairCost: "$450",
                        screenReplacement: "$400",
                        batteryReplacement: "$350",
                      },
                      {
                        deviceModel: "Galaxy Tab S8",
                        repairCost: "$350",
                        screenReplacement: "$300",
                        batteryReplacement: "$250",
                      },
                    ],
                  },
                },
              },
            ],
          },
        ],
      },
    },
    {
      id: 2,
      title: "Device Maintenance Price List",
      description:
        "Check our affordable maintenance services for a variety of devices.",
      mobileCategory: [
        { mobile: "android" },
        { mobile: "androidPro" },
        { mobile: "androidLite" },
      ],
      categories: {
        android: [
          {
            id: 0,
            category: "Tablet",
            accordionData: [
              {
                title: "iPad Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Repair Cost ($)", key: "repairCost" },
                      {
                        header: "Screen Replacement",
                        key: "screenReplacement",
                      },
                      {
                        header: "Battery Replacement",
                        key: "batteryReplacement",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "iPad Pro 12.9",
                        repairCost: "$500",
                        screenReplacement: "$450",
                        batteryReplacement: "$400",
                      },
                      {
                        deviceModel: "iPad Air 10.9",
                        repairCost: "$400",
                        screenReplacement: "$350",
                        batteryReplacement: "$300",
                      },
                    ],
                  },
                },
              },
            ],
          },
        ],
        androidPro: [
          {
            id: 1,
            category: "Tablet Pro",
            accordionData: [
              {
                title: "Samsung Tab Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Repair Cost ($)", key: "repairCost" },
                      {
                        header: "Screen Replacement",
                        key: "screenReplacement",
                      },
                      {
                        header: "Battery Replacement",
                        key: "batteryReplacement",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "Galaxy Tab S8 Ultra",
                        repairCost: "$450",
                        screenReplacement: "$400",
                        batteryReplacement: "$350",
                      },
                      {
                        deviceModel: "Galaxy Tab S8",
                        repairCost: "$350",
                        screenReplacement: "$300",
                        batteryReplacement: "$250",
                      },
                    ],
                  },
                },
              },
            ],
          },
        ],
      },
    },
    {
        id: 3,
        title: "Device Maintenance Price List",
        description:
          "Check our affordable maintenance services for a variety of devices.",
        mobileCategory: [
          { mobile: "android" },
          { mobile: "androidPro" },
          { mobile: "androidLite" },
        ],
        categories: {
          android: [
            {
              id: 0,
              category: "Tablet",
              accordionData: [
                {
                  title: "iPad Series",
                  content: {
                    table: {
                      columns: [
                        { header: "Device Model", key: "deviceModel" },
                        { header: "Repair Cost ($)", key: "repairCost" },
                        {
                          header: "Screen Replacement",
                          key: "screenReplacement",
                        },
                        {
                          header: "Battery Replacement",
                          key: "batteryReplacement",
                        },
                      ],
                      rows: [
                        {
                          deviceModel: "iPad Pro 12.9",
                          repairCost: "$500",
                          screenReplacement: "$450",
                          batteryReplacement: "$400",
                        },
                        {
                          deviceModel: "iPad Air 10.9",
                          repairCost: "$400",
                          screenReplacement: "$350",
                          batteryReplacement: "$300",
                        },
                      ],
                    },
                  },
                },
              ],
            },
          ],
          androidPro: [
            {
              id: 1,
              category: "Tablet Pro",
              accordionData: [
                {
                  title: "Samsung Tab Series",
                  content: {
                    table: {
                      columns: [
                        { header: "Device Model", key: "deviceModel" },
                        { header: "Repair Cost ($)", key: "repairCost" },
                        {
                          header: "Screen Replacement",
                          key: "screenReplacement",
                        },
                        {
                          header: "Battery Replacement",
                          key: "batteryReplacement",
                        },
                      ],
                      rows: [
                        {
                          deviceModel: "Galaxy Tab S8 Ultra",
                          repairCost: "$450",
                          screenReplacement: "$400",
                          batteryReplacement: "$350",
                        },
                        {
                          deviceModel: "Galaxy Tab S8",
                          repairCost: "$350",
                          screenReplacement: "$300",
                          batteryReplacement: "$250",
                        },
                      ],
                    },
                  },
                },
              ],
            },
          ],
        },
      },
  ];





  const [selectedPriceData, setSelectedPriceData] = useState(priceData[0]);
  const mobileCategory = [
    { mobile: "iPhone" },
    { mobile: "androidPro" },
    { mobile: "androidLite" },
  ];

  const priceCat = useSelector((state: RootState) => state.users.priceCat);

  useEffect(() => {
    const filteredData = priceData.find((item) => item.id === priceCat);
    if (filteredData) {
      setSelectedPriceData(filteredData);
    }
  }, [priceCat]);

  const handleMobileCategory = (mobile: string, index: number) => {
    setSelectedCategory(mobile);
    setActiveTabIndex(index);
  };

  const handleToggle = (index: number) => {
    setActiveCategoryIndex(activeCategoryIndex === index ? null : index);
  };

  return (
    <div>
      <section className="py-5 xl:py-10">
        <div className="max-container">
          <div className="my-4">
            <MainHeading Heading={selectedPriceData?.title || ""} />
            {/* <p className="text-gray-300"></p> */}
            <MainTitle Title={selectedPriceData?.description} />
          </div>

          {/* Tabs for categories */}
          <div className="flex mb-6 flex-wrap gap-3 justify-center">
            {mobileCategory.map((category, index) => (
              <button
                key={index}
                className={`px-2 py-2 text-white text-[18px] md:text-[18px] rounded-lg border border-gray-300 w-full sm:w-1/3 md:w-1/4 lg:w-[24%] ${
                  activeTabIndex === index ? "bg-gray-700" : "bg-transparent"
                }`}
                onClick={() => handleMobileCategory(category.mobile, index)}
              >
                {category.mobile}
              </button>
            ))}
          </div>

          {/* Accordion for category content */}
          <div className="space-y-4">
            {selectedPriceData?.categories[selectedCategory]?.length ? (
              selectedPriceData.categories[selectedCategory].map(
                (category, categoryIndex) =>
                  category.accordionData.map((accordion, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-200 dark:border-gray-700"
                    >
                      <button
                        className="flex w-full items-center justify-between py-3 text-left"
                        onClick={() => handleToggle(index)}
                      >
                        <h3 className="text-white xl:text-[24px] text-[18px] font-[500] xl:leading-[2rem] leading-[24px]">
                          {accordion.title}
                        </h3>
                        {activeCategoryIndex === index ? (
                          <GrSubtract color="white" />
                        ) : (
                          <LuPlus color="white" />
                        )}
                      </button>
                      {activeCategoryIndex === index && (
                        <div className="py-4 pt-0 text-white overflow-auto">
                          <table className="table min-w-full table-auto">
                            <thead>
                              <tr>
                                {accordion.content.table.columns.map(
                                  (column, colIndex) => (
                                    <th
                                      key={colIndex}
                                      className="border-bottom px-4 py-2 text-center"
                                    >
                                      {column.header}
                                    </th>
                                  )
                                )}
                              </tr>
                            </thead>
                            <tbody>
                              {accordion.content.table.rows.map(
                                (row, rowIndex) => (
                                  <tr key={rowIndex}>
                                    {accordion.content.table.columns.map(
                                      (column, colIndex) => (
                                        <td
                                          key={colIndex}
                                          className="border-bottom px-4 py-2 text-center"
                                        >
                                          {row[column.key]}
                                        </td>
                                      )
                                    )}
                                  </tr>
                                )
                              )}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  ))
              )
            ) : (
              <p className="text-gray-300">
                No data available for this category.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
