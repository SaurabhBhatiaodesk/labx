import Image from "next/image";
import gamejoy from "../../../public/Images/gamejoy.webp";
import Link from "next/link";

interface ExpertRepairItem {
  title: string;
  dataitom: string;
  contactlink?: string;
  contactname?: string;
}

const PS5ExpertRepair = () => {
  const ExpertRepair: ExpertRepairItem[] = [
    {
      title: "PS5 REPAIRS SYDNEY",
      dataitom:
        "Has your PS5 flatlined? Power loss is so frustrating and usually happens at the worst possible time. No need to give up and start grieving your console, we can get it back to life! We can fix thermal sensors, replace faulty power cords or give a more stable power line to stop your PS5 losing power. Don’t chuck things at your TV in frustration, chuck us an email and get it sorted today.",
      contactlink: "/contact-us",
      contactname: "Contact Us",
    },
    {
      title: "PS5 DISK STUCK",
      dataitom:
        "Has your PS5 flatlined? Power loss is so frustrating and usually happens at the worst possible time. No need to give up and start grieving your console, we can get it back to life! We can fix thermal sensors, replace faulty power cords or give a more stable power line to stop your PS5 losing power. Don’t chuck things at your TV in frustration, chuck us an email and get it sorted today.",
      contactlink: "/contact-us",
      contactname: "Contact Us",
    },
    {
      title: "PS5 DISK STUCK",
      dataitom:
        "Has your PS5 flatlined? Power loss is so frustrating and usually happens at the worst possible time. No need to give up and start grieving your console, we can get it back to life! We can fix thermal sensors, replace faulty power cords or give a more stable power line to stop your PS5 losing power. Don’t chuck things at your TV in frustration, chuck us an email and get it sorted today.",
      contactlink: "/contact-us",
      contactname: "Contact Us",
    },
  ];

  return (
    <section className="bg-black text-white md:pt-20 md:pb-10 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 md:gap-10 gap-3 items-center md:my-12">
        {/* Left Side - Image + Heading */}
        <div className="text-center md:text-left">
          <div className="relative w-full h-56 md:h-96">
            <Image
              src={gamejoy} // replace with your actual image path
              alt="PS5 Console"
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold md:mt-6 mt-2">
            Expert PS5 Repair – Fast, Reliable, And Affordable!
          </h2>
          <p className="mt-4 text-gray-300">
            Get your PS5 repaired quickly and efficiently with our expert
            service. We ensure reliable, affordable, and high-quality repairs
            for seamless gaming!
          </p>
        </div>

        {/* Right Side - Repair Info Cards */}
        <div className="md:space-y-6 space-y-4 md:absolute md:w-[46%] md:right-0 md:h-auto md:bg-white md:flex md:flex-col md:items-center md:justify-center md:p-8 overflow-x-auto">
          {ExpertRepair.map((item, index) => (
            <div key={index}>
              <div className="border border-gray-300 p-6 rounded-lg bg-white text-black shadow-md">
                <h3 className="text-xl font-bold mb-2 text-black">
                  {item.title}
                </h3>
                <p className="text-sm mb-4 text-black">{item.dataitom}</p>
                {item.contactlink && item.contactname && (
                  <Link
                    href={item.contactlink}
                    className="inline-block font-semibold text-black hover:underline"
                  >
                    {item.contactname} →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PS5ExpertRepair;
