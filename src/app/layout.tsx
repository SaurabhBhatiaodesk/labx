
"use client"
import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import "../Styles/globals.css";
// import Header from "@/components/Header/Header";
// import Footer from "@/components/Footer/Footer";
import { Space_Grotesk, Poppins } from "next/font/google";
import ConditionalWrapper from "@/components/ConditionalWrapper"; // New client-side wrapper component
import { Providers } from "./redux/providers";
import Script from "next/script";
import Canonical from "./Canonical";
import Image from "next/image";


const space_Grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--Font-SpaceGrotesk",
  weight: ["300", "400", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--Font-Poppins",
  weight: ["300", "400", "600", "700"],
});
const MySwal = withReactContent(Swal);
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
     useEffect(() => {
    // Trigger the SweetAlert popup when the component is mounted
    MySwal.fire({
      title: <h2 className='text-black text-lg'>Our website has shifted to a new domain!</h2>,
      html: '<a href="https://www.prcrepair.com.au/" target="_blank" class="text-blue-600">Click here to visit us: prcrepair.com.au</a>',
      showCloseButton: true,
      confirmButtonText: "Visit our New Website",
      confirmButtonColor: '#e6b800',
      icon: 'info',
    }).then(() => {
      // Redirect after 3 seconds
      setTimeout(() => {
        window.location.href = "https://www.prcrepair.com.au/"; 
      }, 3000); 
    });
  }, []);
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <meta
          name="google-site-verification"
          content="daUSUNFfgNz6HBE7DkYP6jsrgiCz3DDWT0mP696YPBA"
        />
        {/* code_221 */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Canonical />
      </head>
      <body
        className={`${space_Grotesk.variable} ${poppins.variable} font-gordita`}
      >
        {/* <Providers>
          
          <ConditionalWrapper>{children}</ConditionalWrapper>
        </Providers> */}

        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-6GPFSRTXQE"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            gtag('config', 'G-6GPFSRTXQE');
            `,
          }}
        />
        {/* Google Tag Manager (GTM) */}
        <Script
          id="your-unique-id"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TGGL6B3L');`,
          }}
        />

        {/* Meta Pixel Code */}
        <Script
          id="Meta_Pixel_Code"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s) {
                if(f.fbq)return;n=f.fbq=function(){
                  n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)
                };
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; n.queue=[];
                t=b.createElement(e);t.async=!0; t.src=v;
                s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)
              }(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1179806136863221');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <Image
            alt="facebook"
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1179806136863221&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}

        {/* Clarity Script */}
        <Script
          id="Clarity_Script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "qpj0tgz5sa");
            `,
          }}
        />
        <Script id="snap-pixel" strategy="afterInteractive">
          {`
          (function(e,t,n){
            if(e.snaptr) return;
            var a=e.snaptr=function(){
              a.handleRequest ? a.handleRequest.apply(a,arguments) : a.queue.push(arguments)
            };
            a.queue=[];
            var s='script';
            var r=t.createElement(s);
            r.async=!0;
            r.src=n;
            var u=t.getElementsByTagName(s)[0];
            u.parentNode.insertBefore(r,u);
          })(window,document,'https://sc-static.net/scevent.min.js');

          snaptr('init', 'cb889d03-2e36-47e3-93ef-d7b3ece4f952', {});
          snaptr('track', 'PAGE_VIEW');
        `}
        </Script>
        <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-16874061920"
          />
          <Script id="conversion-api">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag("js", new Date());
            `}
          </Script>
      </body>
    </html>
  );
}
