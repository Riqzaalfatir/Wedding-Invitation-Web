"use client"

import Image from "next/image";
import Link from "next/link";
import { IBM_Plex_Sans, Libre_Bodoni, Lobster } from "next/font/google";

const ibm = IBM_Plex_Sans({
  weight: ["500", "600"],
  subsets: ["latin"],
})

const libre = Libre_Bodoni({
  subsets: ["latin"],
  weight: "400",
})

const lobster = Lobster({
  subsets: ["latin"],
  weight: "400",
});

export default function Opening() {
  return(
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-0">
      <Image src="/bg-frame1.png" alt="bg" fill priority className="object-cover object-top h-auto"/>
      <div className="absolute inset-0 bg-[#E8E1BE]/40" />

      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl">
        <p className={`${ibm.className}text-[18px] sm:text-[20px] md:text-[23.95px] font-semibold text-[#082B21] mb-3 sm:mb-4.75`}>
          The Wedding Of
        </p>
        <h1 className={`${libre.className}  text-[42px] sm:text-[56px] md:text-[72px] lg:text-8xl font-normal text-[#082B21] mb-2 sm:mb-2.25`}>
          Jonathan & Sherla
        </h1>
        <p className={`${ibm.className}text-[16px] sm:text-[18px] md:text-[22px] font-semibold text-[#082B21] mb-6 sm:mb-8.25`}>
          Saturday, 30 October 2021
        </p> 
        <p className={`${lobster.className} text-[18px] sm:text-[20px] md:text-[22px] leading-7 sm:leading-8.75 text-[#082B21] mb-5 sm:mb-6.5`}>
          <span className="block">Dear</span>
          <span className="block">Guest Name</span>
        </p> 
         <p className={`${ibm.className}text-[14px] sm:text-[16px] md:text-[18px] font-medium text-[#082B21] mb-5 sm:mb-[28.81px]`}>
          We apologize if there is any misspelling of name or title
        </p>
        <Link href="/invitation" aria-label="Open Invitation">
          <div className="  relative w-45 h-12 sm:w-50 sm:h-13 md:w-55 md:h-14 cursor-pointerr">
            <Image src="/lets-open-button.png" alt="Let's Open Invitation" fill className="object-contain" priority/>
          </div>
        </Link>
      </div>
    </section>
  )
}
