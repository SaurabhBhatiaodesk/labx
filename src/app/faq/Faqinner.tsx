import React, { useState } from "react";
import { LuPlus } from "react-icons/lu";
import { GrSubtract } from "react-icons/gr";
import MainHeading from "@/components/ManinHeading/MainHeading";
import FixLabx from "@/components/HomeCpmponents/FixLabx/FixLabx";

// Accordion and FaqCategory structure
interface AccordionItem {
  title: string;
  content: string;
}

interface FaqCategory {
  category: string;
  accordionData: AccordionItem[];
}

interface FaqinnerProps {
  heading: string;
  categories: FaqCategory[]; // The categories prop is an array of categories
}

const Faqinner: React.FC<FaqinnerProps> = ({ heading, categories }) => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number | null>(null);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  // List of random gradient color options for tab buttons
  const gradientColors = [
 
    "linear-gradient(74deg, #56c1c1, #000000)",
    "linear-gradient(74deg, #f35520c0, #000000)",
    "linear-gradient(74deg, #d5fd33a1, #000000)",
    "linear-gradient(74deg, #A044FF, #000000)",
    "linear-gradient(74deg, #2052e8a5, #000000)",
    "linear-gradient(74deg, #56c1c1, #000000)",
    "linear-gradient(74deg, #c35520c0, #000000)",
    "linear-gradient(74deg, #2055e8a5, #000000)",
  ];

  // Handle switching between tabs
  const handleTabClick = (index: number) => {
    setActiveTabIndex(index); // Change the active tab index
  };

  // Handle toggle of FAQ accordion item
  const handleToggle = (index: number) => {
    setActiveCategoryIndex(activeCategoryIndex === index ? null : index); // Toggle accordion
  };

  // Randomly select a gradient color for each tab button
  const getGradientColor = (index: number) => {
    return activeTabIndex === index
      ? gradientColors[index % gradientColors.length] // Select color for active tab
      : "transparent"; // Default transparent background for inactive tabs
  };

  return (
    <div>
      <section className="py-5 xl:py-10 hidden lg:block">
        <div className="max-container">
          <div className="my-4">
            <MainHeading Heading={heading} />
          </div>

          {/* Tabs for categories */}
          <div className="flex mb-6 flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                style={{
                  background: getGradientColor(index), // Apply gradient color to active tab
                }}
                className="px-2 py-2 text-white text-[18px] md:text-[18px] rounded-lg border border-gray-300 w-full sm:w-1/3 md:w-1/4 lg:w-[24%]"
                onClick={() => handleTabClick(index)} // On click change the tab color
              >
                {category.category}
              </button>
            ))}
          </div>

          {/* Display FAQ content based on active tab */}
          <div className="space-y-4">
            {categories[activeTabIndex]?.accordionData.map((item, index) => (
              <div key={index} className="border-b border-gray-200 dark:border-gray-700">
                <button
                  className="flex w-full items-center justify-between py-3 text-left"
                  onClick={() => handleToggle(index)} // Toggle individual FAQ item
                >
                  <h3 className="text-white xl:text-[24px] text-[18px] font-[500] xl:leading-[2rem] leading-[24px]">
                    {item.title}
                  </h3>
                  {activeCategoryIndex === index ? (
                    <GrSubtract color="white" />
                  ) : (
                    <LuPlus color="white" />
                  )}
                </button>
                {activeCategoryIndex === index && (
                  <div className="py-4 pt-0">
                    <p className="text-white">{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>
  
    </div>
  );
};

export default Faqinner;
