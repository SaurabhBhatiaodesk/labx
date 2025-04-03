import React from 'react';
import Image from 'next/image';
import PS5Sydneyfirst from "../../../public/Images/PS5Sydneyfirst.webp";
import PS5Sydneysecond from "../../../public/Images/PS5Sydneysecond.webp";
import Link from 'next/link';
interface tableps {
  id: any,
  imageItom: any;
  MainheadingItom: string;
  contactusLink?: any;
  contactusName?: string;
  shortHeading: string,
}
const PS5Sydney: React.FC = () => {

  const datatable: tableps[] = [{
    id: 1,
    imageItom: PS5Sydneyfirst,
    MainheadingItom: ` PS5 Sydney`,
    shortHeading: `We pride ourselves on our exceptional customer service and satisfaction. Consoles are our specialty, and we offer a variety of repair options to ensure your gaming experience isn't interrupted for long. Our expert technicians handle all types of repairs, and we offer fast, efficient services.`,
    contactusLink: "/contact-us",
    contactusName: "CONTACT US →"

  },
  {
    id: 2,
    imageItom: PS5Sydneysecond,
    MainheadingItom: ` PS5 Sydney`,
    shortHeading: `We pride ourselves on our exceptional customer service and satisfaction. Consoles are our specialty, and we offer a variety of repair options to ensure your gaming experience isn't interrupted for long. Our expert technicians handle all types of repairs, and we offer fast, efficient services.`,
    contactusLink: "/",
    contactusName: "CONTACT US →"

  },
  ]


  return (
    <section className="md:pt-14 md:pb-10 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-6 items-start">
        {/* Left Content */}

        {datatable.map((itom, index) =>

          <div className="flex flex-col gap-3" key={index}>
            <h2 className="text-3xl font-semibold text-[#EDE574]">{itom.MainheadingItom}</h2>
            <div>
              <Image
                src={itom.imageItom}
                alt="PS5 gaming"
                width={500}
                height={300}
                className="w-full object-cover"
              />
            </div>
            <p className="text-white">
              {`We pride ourselves on our exceptional customer service and satisfaction. Consoles are our
              specialty, and we offer a variety of repair options to ensure your gaming experience isn't
              interrupted for long. Our expert technicians handle all types of repairs, and we offer
              fast, efficient services.`}
            </p>
            <Link href={itom.contactusLink} className=" md:text-md text-[16px] rounded-lg md:px-4 px-2 py-2 border-2 border-gray-100 text-gray-100 hover:bg-gray-900 hover:text-black hover:bg-white duration-300 w-fit">
              {itom.contactusName}
            </Link>
          </div>
        )}

      </div>





    </section>
  );
  
};

export default PS5Sydney;