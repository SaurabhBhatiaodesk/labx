import MainTitle from "@/components/MainTitle/MainTitle";
import MainHeading from "@/components/ManinHeading/MainHeading";
import React from "react";
import Image from "next/image";
import pointer from "../../../../public/Images/icons/pointing-right.svg";
import MainButton from "@/components/MainButton/MainButton";
import cloud from "../../../../public/Images/Home/3dillustrationcloud.png";

const DataRecovery = () => {
  return (
    // <div>DataRecovery</div>

    <>
      <div className="container lg:py-5 py-4">
        <MainHeading Heading="Data Recovery" />
        <MainTitle Title="At LabX, we specialize in recovering data from a wide range of mobile devices, including phones, tablets, and other gadgets that may have suffered significant damage. However, data recovery comes with certain limitations that customers need to be aware of before submitting a device." />

        <div className="grid xl:grid-cols-[3fr_2fr] lg:grid-cols-[3fr_2fr] grid-cols-1 gap-4 lg:py-5 py-3">
          <div>
            <div className="flex-col gap-2  flex">
              <div className="flex items-start gap-3">
                <Image src={pointer} alt="pointer" />
                <p>
                  Data from Dead or No-Power Devices: We can recover data from
                  devices that won’t turn on due to hardware damage, shock, or
                  water exposure.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Image src={pointer} alt="pointer" />
                <p>
                  Physically Damaged Devices: Whether your phone has been
                  dropped, crushed, or exposed to liquids, we can often retrieve
                  your valuable files.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Image src={pointer} alt="pointer" />
                <p>
                  Corrupt Operating Systems: We handle cases of OS corruption,
                  which often makes a device unbootable, and recover data like
                  contacts, texts, photos, and videos.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Image src={pointer} alt="pointer" />
                <p>
                  Damaged Storage Chips: We can recover data from partially
                  damaged eMMC or UFS chips, the key storage components in
                  mobile devices.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Image src={pointer} alt="pointer" />
                <p>
                  Failed or Broken Logic Boards: Our team specializes in
                  recovering data from devices with broken or failed logic
                  boards, using advanced techniques.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <MainButton MainButton="LEARN MORE" />
              </div>
            </div>
          </div>

          <div>
            <div>
              <Image src={cloud} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataRecovery;
