"use client";
import React from 'react'
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Image from 'next/image';
import Time from '../../../public/Images/time.svg';
import Phone from '../../../public/Images/mobile.svg';
import Quality from '../../../public/Images/quality.svg';
import Glass from '../../../public/Images/glass.png';
import Machine from '../../../public/Images/machine.svg';
import Icon from '../../../public/Images/liststyle.svg';
import Screen from '../../../public/Images/screen.svg';
import Small from '../../../public/Images/small.svg';
import Saprate from '../../../public/Images/saprate.svg';
import OCA from '../../../public/Images/oca.svg';
import Test from '../../../public/Images/test.svg';
import Laminate from '../../../public/Images/laminate.svg';
import Align from '../../../public/Images/align.svg';
import Round_icon from '../../../public/Images/round_icon.svg';
import Arrow_icon from '../../../public/Images/errow_icon.svg';
import YouTubeHome from '@/components/HomeCpmponents/YouTubeHome/YouTubeHome';
import GoogleReview from '@/components/GoogleReviews/GoogleReviews'; 
import Line from "../../../public/Images/about/leap.svg"
 
import "./screen.css";

const Page = () => {
    return (
        <>

            <div>

                <Breadcrumb
                    pageName="Screen Refurbishment"
                    pageDescription="This course is designed and based on the highest industry standards and over 14 years of industry experience. It includes everything that anyone needs to be one of the best technicians or a successful business owner."
                    backgroundImage="/Images/BannerImages/price.png"
                    AdminImage="/Images/screen_banner.png"
                    link="/price"
                />
                <div className="bg__shade relative pb-8">
                    <div className='max-container text-center'>
                        <h2 className='pt-8'>Benefits of Replacing Only the Front Glass</h2>
                        <Image  height="300" width="900"src={Line.src} alt="" className="pb-3 m-auto" />

                        <p>When your phone is damaged, sometimes only the front glass needs to be replaced as long as the screen and touch function working properly.</p>
                        <div className="main__box_section">
                            <div className='front__box'>
                                <Image src={Time} alt='' />
                                <h3>Money and Time Savings</h3>
                                <p>It costs less and takes less time than replacing the entire screen.</p>
                            </div>
                            <div className='front__box'>
                                <Image src={Phone} alt='' />
                                <h3>Original Display Performance</h3>
                                <p>The display performs as before due to reserving the original LCD / OLED panel.</p>
                            </div>
                            <div className='front__box'>
                                <Image src={Quality} alt='' />
                                <h3>Durable Exterior Quality</h3>
                                <p>The brightness and hardness of the front glass are comparable to the original.</p>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="container pt-8 mt-5">
                    <div className="grid xl:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8 lg:py-5 py-3 items-center">
                        <div>
                            <Image src={Glass} alt='' />
                        </div>
                        <div className='glass__description'>
                            <h2>What Conditions Can Replace Just the Front Glass Touch Screen?</h2>
                        <Image  height="500" width="500"src={Line.src} alt="" className="pb-3" />

                            <p>In most cases, we can only replace the glass / touch screen digitizer after phone damage.</p>
                            <div className='list__glass'>
                                <p className='flex items-center gap-2'><span><Image src={Icon} alt='' /></span>No color issues / lines / dead spots, and the touchscreen fully functions.</p>
                                <p className='flex items-center gap-2'><span><Image src={Icon} alt='' /></span>The crack is surface-level only, no underlying LCD / OLED damage.</p>
                                <p className='flex items-center gap-2'><span><Image src={Icon} alt='' /></span>No distortion damage, and touch is responsive normally.</p>
                                <p className='flex items-center gap-2'><span><Image src={Icon} alt='' /></span>No water ingress or moisture damage to the LCD / OLED.</p>
                                <p className='flex items-center gap-2'><span><Image src={Icon} alt='' /></span>No severe physical damage to the outer shell or body of the device.</p>
                                <p className='flex items-center gap-2'><span><Image src={Icon} alt='' /></span>All buttons and sensors work properly.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="pt-8 pb-8 relative bg__shade ">
                    <div className="container">
                        <h2 className='text-center'>Screen Refurbishing Process</h2>
                        <Image  height="500" width="500"src={Line.src} alt="" className="pb-3 m-auto" />

                        <div className="grid__processs_section pt-8 mt-5 relative">
                            <div className='process__box box_1'>
                                <Image src={Screen} alt='' />
                                <p>Preheat the Screen</p>
                            </div>
                            <div className='process__box box_2'>
                                <Image src={Small} alt='' />
                                <p>Detach Small Parts</p>
                            </div>
                            <div className='process__box box_3'>
                                <Image src={Saprate} alt='' />
                                <p>Separate the Screen</p>
                            </div>
                            <div className='process__box box_4'>
                                <Image src={OCA} alt='' />
                                <p>Remove the OCA</p>
                            </div>
                        </div>
                        <div className="grid__processs_section process__section pt-8 mt-5 relative">
                            <div className='process__box box_1'>
                                <Image src={Test} alt='' />
                                <p>Reinstall and Test</p>
                            </div>
                            <div className='process__box box_2'>
                                <Image src={Laminate} alt='' />
                                <p>Laminate and Debubble</p>
                            </div>
                            <div className='process__box box_3'>
                                <Image src={Align} alt='' />
                                <p>Align the New Glass/ Touch <br /> Screen/ Bezel</p>
                            </div>
                            <div className='process__box box_3' style={{ opacity: '0' }}>
                                <Image src={Align} alt='' />
                                <p>Align the New </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='bg__shade relative pt-8 bg-black'>
                    <div className="container">
                        <div className="grid xl:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8 lg:py-5 py-3 items-center">
                            <div className='glass__description'>
                                <h2>Machines for Screen Refurbishment</h2>
                          <Image  height="500" width="500"src={Line.src} alt="" className="pb-3" />

                                <p>REFOX FM40 Desktop Lamination Machine </p>
                                <p>We provide diverse solutions for all your circuit board microsoldering requirements, extending beyond iPhones and MacBooks to encompass Samsung and other Android mobile devices. </p>
                                <p>Our services also include HDMI replacement for various game consoles, such as Sony Playstation 5 and Microsoft Xbox.Our approach is to perform open-ended troubleshooting and microsoldering to identify and correct faults on the logic board to bring the dead phone back to life enough to provide a path to your data. </p>
                                <button className='btn'>Request a Quote</button>
                            </div>
                            <div className='text-center m-auto'>
                                <Image src={Machine} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <YouTubeHome />
            <GoogleReview />
        </>
    )
}

export default Page