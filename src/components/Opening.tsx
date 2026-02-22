"use client";

import { useState } from "react";
import Image from "next/image";
import { ibm, libre, lobster } from "@/lib/fonts";

export default function Opening({ onOpen }: { onOpen: () => void }) {
  const [slideUp, setSlideUp] = useState(false);

 const handleClick = () => {
  onOpen(); // tampilkan konten langsung
  setSlideUp(true);
};

  return (
   <section
  className={`fixed inset-0 z-[9999] w-full h-screen flex items-center justify-center overflow-hidden px-4
  transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
  ${slideUp ? "-translate-y-full scale-95" : "translate-y-0 scale-100"} transform-gpu`}
>
  {/* Background */}
  <Image
    src="/bg-frame1.png"
    alt="bg"
    fill
    priority
    className="object-cover object-top"
  />
  <div className="absolute inset-0 bg-[#E8E1BE]/40" />

  {/* Content */}
  <div
    className="relative z-10 flex flex-col items-center text-center
    w-full
    max-w-[320px]
    sm:max-w-md
    md:max-w-2xl
    lg:max-w-4xl
    px-4 sm:px-6"
  >
    <p
      data-aos="fade-up"
      data-aos-delay="0"
      className={`${ibm.className} 
      text-[14px]
      sm:text-[16px]
      md:text-[20px]
      lg:text-[24px]
      font-semibold text-[#082B21]
      mb-2 sm:mb-3`}
    >
      The Wedding Of
    </p>

    <h1
      data-aos="fade-up"
      data-aos-delay="150"
      className={`${libre.className}
      text-[40px]
      sm:text-[44px]
      md:text-[68px]
      lg:text-[96px]
      leading-tight
      font-normal text-[#082B21]
      mb-2`}
    >
      Jonathan <span className="block md:inline">&</span> Sherla
    </h1>

    <p
      data-aos="fade-up"
      data-aos-delay="300"
      className={`${ibm.className}
      text-[13px]
      sm:text-[16px]
      md:text-[20px]
      lg:text-[22px]
      font-semibold text-[#082B21]
      mb-5 sm:mb-6 lg:mb-[33px]`}
    >
      Saturday, 30 October 2021
    </p>

    <p
      data-aos="fade-up"
      data-aos-delay="450"
      className={`${lobster.className}
      text-[16px]
      sm:text-[18px]
      md:text-[22px]
      leading-relaxed
      text-[#082B21]
      mb-4 sm:mb-5 lg:mb-[26px]`}
    >
      <span className="block">Dear</span>
      <span className="block">Guest Name</span>
    </p>

    <p
      data-aos="fade-up"
      data-aos-delay="600"
      className={`${ibm.className}
      text-[14px]
      sm:text-[14px]
      md:text-[16px]
      lg:text-[18px]
      font-medium text-[#082B21]
      mb-6 sm:mb-8`}
    >
      We apologize if there is any misspelling of name or title
    </p>

    <div
      data-aos="zoom-in"
      data-aos-delay="750"
      onClick={handleClick}
      aria-label="Open Invitation"
      className="
      relative cursor-pointer
      w-[180px] h-[48px]
      sm:w-[200px] sm:h-[54px]
      md:w-[200px] md:h-[60px]
      lg:w-[220px] lg:h-[66px]
      transition-transform duration-300 hover:scale-105"
    >
      <Image
        src="/lets-open-button.png"
        alt="Let's Open Invitation"
        fill
        className="object-contain"
        priority
      />
    </div>
  </div>
</section>
  );
}