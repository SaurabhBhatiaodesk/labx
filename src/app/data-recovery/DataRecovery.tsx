import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import MainHeading from "@/components/ManinHeading/MainHeading";
import React from "react";
import GoogleReview from "@/components/GoogleReviews/GoogleReviews";
import MainTitle from "@/components/MainTitle/MainTitle";
import Image from "next/image";
import datarecoverytop from "../../../public/Images/Home/datarecoverytop.png";
import pointer from "../../../../public/Images/icons/pointing-right.svg";
import BoxComponents from "@/components/BoxComponents/BoxComponents";
import BoxIconComponents from "@/components/BoxIconComponents/BoxIconComponents";
import PhotosandVideos from "../../../public/Images/icons/PhotosandVideos.svg";
// import datarecoveryImage from "../../../../public/Images/Home/datarecovery221.png";
import datarecoverychip from "../../../public/Images/datarecoverychip.png";
import IconTitleParaImage from "@/components/IconTitleParaImage/IconTitleParaImage";
import DataImportantNote from "@/components/DataImportantNote/DataImportantNote";
import DataStarted from "./DataStarted";
import ContactsandMessages from "../../../public/Images/icons/Contacts and Messages.svg"
import emaildocument from "../../../public/Images/icons/emaildocument.svg"
import PhysicallyDamagedDevices from "../../../public/Images/icons/Data from Physically Damaged Devices.svg"

const DataRecovery = () => {
  const sectionData = [
    {
      image: PhotosandVideos,
      alt: "Repairs",
      title: `Photos and 
Videos`,
      hoverBackground:
        "linear-gradient(74deg, rgb(86, 193, 193), rgb(0, 0, 0))",
    },
    {
      image: ContactsandMessages,
      alt: "Transparency",
      title: "Contacts and Messages",
      hoverBackground:
        "linear-gradient(74deg, rgba(243, 85, 32, 0.753), rgb(0, 0, 0))",
    },
    {
      image: emaildocument,
      alt: "Recovery",
      title: "Document Files",
      hoverBackground:
        "linear-gradient(74deg, rgba(213, 253, 51, 0.63), rgb(0, 0, 0))",
    },
    {
      image: PhysicallyDamagedDevices,
      alt: "B2B Services",
      title: "Data from Physically Damaged Devices",
      hoverBackground:
        "linear-gradient(74deg, rgba(207, 35, 98, 0.655), rgb(0, 0, 0))",
    },
  ];
  const dataRecoveryPoints = [
    {
      title: "Initial Assessment: ",
      description:
        "We evaluate the device to understand the extent of the damage and the likelihood of data recovery.",
    },
    {
      title: "Pre-Approval and Quotation:",
      description:
        " Based on our assessment, we provide a clear, upfront quote for the recovery process.",
    },
    {
      title: "Recovery: ",
      description:
        "Using state-of-the-art equipment, we attempt to extract and restore your data.",
    },
    {
      title: "Verification: ",
      description:
        "Recovered data is verified for accuracy and integrity before being returned to you.",
    },
    {
      title: "Delivery: ",
      description:
      "Data is transferred back to you via your preferred method, whether on a new device or external storage.",
    },
  ];
  return (
    <>
      <div className="strongtx">
        <Breadcrumb
          pageName="Data Recovery Services - LabXRepair"
          pageDescription="At <strong> LabXRepair,</strong> we specialize in professional data recovery services for mobile phones, tablets, MacBooks, laptops, and more. Whether you’ve experienced hardware failure on device, or need to recover vital information from a damaged device, our skilled technicians are here to help."
          backgroundImage="/Images/BannerImages/mailinrepair.png"
          AdminImage="/Images/Data Recovery side.png"
          link="/contact-us"
          buttonname="Request a Quote"
        />
      </div>

      <section style={{ background: "#0B0B0B" }}>
        <div className="container py-4 xl:py-6">
          <div className="text-center">
            <MainHeading Heading="Why Choose LabX for Data Recovery?" />
            <MainTitle Title="The only path to data recovery is getting the phone to work again. We bring phones back from the dead every day. There is no manual, no instruction book, for what we do. We are the motherboard whisperers." />
          </div>
          <BoxComponents />
          <MainHeading Heading="What We Can Recover" />

          <BoxIconComponents data={sectionData} />
          <IconTitleParaImage
            heading="Data Recovery Service"
            title="At LabX, we provide a seamless, transparent data recovery experience designed to keep you informed and stress-free throughout the entire process. Our commitment to communication and quality ensures you receive timely updates and support every step of the way."
            points={dataRecoveryPoints}
            buttonLabel="READ MORE"
            buttonLink="/data-recovery"
            imageSrc={datarecoverychip.src}
          />
        </div>
        <DataImportantNote/>
      </section>
      <DataStarted/>


      {/* <div className="process_section pt-8 pb-8">
        <div className="container">
          <div className="main__cart_section">
        <div className="card_box">
            <b className='one'>1</b>
            <p>Start Repair Request: You will fill out a request here and tell us about the history of your phone and what happened to it. Provide as much detail as you can to help us in our detective work to find the problem and get your data back. We will reply with a formal estimate via email within 1 business day.</p>
          </div>
          <div className="card_box hoverBlue">
          <b className='two'>2</b>
          <p>Mail It In: Follow the mail in instructions provided in your estimate email and send your device to us. We will match your device to your request and let you know that we received your device.</p>
          </div>
          <div className="card_box hoverGreen">
          <b className='three'>3</b>
          <p>Wait For Results: When your phone is recovered you’ll get the “great news!” email from us with details on your recovery. We will send an invoice you can pay online, and then your phone and drive will be shipped home with a tracking number.</p>
          </div>
        </div>
        </div>
      </div> */}
      <GoogleReview />
    </>
  );
};

export default DataRecovery;
