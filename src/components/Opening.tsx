"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ibm, libre, lobster } from "@/lib/fonts";

export default function Opening() {
  const router = useRouter();
  const [slideUp, setSlideUp] = useState(false);

  const handleClick = () => {
    setSlideUp(true);

    setTimeout(() => {
      router.push("/invitation");
    }, 500);
  };

  return (
    <section
      className={`fixed inset-0 w-full h-screen flex items-center justify-center overflow-hidden px-4 bg-white
      transition-all duration-700 ease-in-out
      ${slideUp ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}`}
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
      <div className="relative z-10 flex flex-col items-center text-center
        w-full
        max-w-[320px]
        sm:max-w-md
        md:max-w-2xl
        lg:max-w-4xl
        px-4 sm:px-6"
      >
        {/* Title small */}
        <p
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

        {/* Names */}
        <h1
          className={`${libre.className}
          text-[32px]
          sm:text-[44px]
          md:text-[64px]
          lg:text-[88px]
          leading-tight
          font-normal text-[#082B21]
          mb-2`}
        >
          Jonathan & Sherla
        </h1>

        {/* Date */}
        <p
          className={`${ibm.className}
          text-[14px]
          sm:text-[16px]
          md:text-[20px]
          font-semibold text-[#082B21]
          mb-5 sm:mb-6`}
        >
          Saturday, 30 October 2021
        </p>

        {/* Guest */}
        <p
          className={`${lobster.className}
          text-[16px]
          sm:text-[18px]
          md:text-[22px]
          leading-relaxed
          text-[#082B21]
          mb-4 sm:mb-5`}
        >
          <span className="block">Dear</span>
          <span className="block">Guest Name</span>
        </p>

        {/* Note */}
        <p
          className={`${ibm.className}
          text-[12px]
          sm:text-[14px]
          md:text-[16px]
          font-medium text-[#082B21]
          mb-6 sm:mb-8`}
        >
          We apologize if there is any misspelling of name or title
        </p>

        {/* Button */}
        <div
          onClick={handleClick}
          aria-label="Open Invitation"
          className="
          relative cursor-pointer
          w-[180px] h-[48px]
          sm:w-[200px] sm:h-[54px]
          md:w-[220px] md:h-[60px]
          lg:w-[240px] lg:h-[66px]
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