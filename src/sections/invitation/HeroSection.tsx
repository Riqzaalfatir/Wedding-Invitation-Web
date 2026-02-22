"use client"

import Image from "next/image"
import { ibm, libre } from "@/lib/fonts";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true)
    }, 400)

    return () => clearTimeout(timer)
  }, [])

  return (
   <section className="relative w-full min-h-screen overflow-hidden flex flex-col pb-[60px] sm:pb-[70px] md:pb-[80px]">
  <Image
    src="/bg-frame2.png"
    alt="Background Frame"
    fill
    priority
    className="object-cover object-top"
  />
  <div className="absolute inset-0 bg-[#E8E1BE]/40" />

  {/* ===== TOP CONTENT ===== */}
  <div
    className={`relative z-10 flex flex-col items-center text-center px-4 text-[#082B21]
    pt-[100px] sm:pt-[260px] md:pt-[360px] lg:pt-[493px]
    transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
    ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
  >
    {/* Small Title */}
    <p
      data-aos="fade-up"
      className={`${ibm.className}
      font-semibold
      text-[14px] sm:text-[16px] md:text-[20px] lg:text-[23.95px]
      mb-[10px] sm:mb-[14px] md:mb-[16px] lg:mb-[19px]`}
    >
      The Wedding Of
    </p>

    {/* Names */}
    <h1
      data-aos="fade-up"
      data-aos-delay="150"
      className={`${libre.className}
      text-[#082B21]
      leading-tight
      text-[42px] sm:text-[48px] md:text-[72px] lg:text-[96px]
      mb-[30px] sm:mb-[40px] md:mb-[50px] lg:mb-[91px]`}
    >
      Jonathan <span className="block md:inline">&</span> Sherla
    </h1>

    {/* Quote */}
    <p
      data-aos="fade-up"
      data-aos-delay="300"
      className={`${ibm.className}
      font-medium text-center text-[#082B21]
      text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px]
      max-w-xl sm:max-w-xl md:max-w-2xl lg:max-w-4xl
      px-2 sm:px-4 md:px-0
      mb-[40px] sm:mb-[70px] md:mb-[100px] lg:mb-[134px]`}
    >
      Two are better than one, because they have a good reward for their toil.
      For if they fall, one will lift up his fellow. But woe to him who is alone
      when he falls and has not another to lift him up – ECCLESIASTES 4:9-10
    </p>
  </div>

  {/* ===== BOTTOM INFO ===== */}
  <div className="absolute bottom-0 z-999 left-0 w-full px-6 sm:px-10 md:px-16 lg:px-[44px] mt-0 lg:mt-[120px] pb-[40px] sm:pb-[50px] md:pb-[60px] lg:pb-0 lg:static">
    <div className="flex justify-between items-end text-[#082B21] uppercase tracking-widest">

      <div data-aos="fade-right" data-aos-delay="200" className="text-center">
        <p className={`${ibm.className} font-semibold text-[14px] sm:text-[18px] md:text-[22px] lg:text-[28px]`}>Day</p>
        <p className={`${ibm.className} font-semibold text-[14px] sm:text-[18px] md:text-[22px] lg:text-[28px]`}>Saturday</p>
      </div>

      <div data-aos="fade-up" data-aos-delay="350" className="text-center">
        <p className={`${ibm.className} font-semibold text-[14px] sm:text-[18px] md:text-[22px] lg:text-[28px]`}>Date</p>
        <p className={`${ibm.className} font-semibold text-[14px] sm:text-[18px] md:text-[22px] lg:text-[28px]`}>Thirty</p>
      </div>

      <div data-aos="fade-left" data-aos-delay="500" className="text-right">
        <p className={`${ibm.className} font-semibold text-[14px] sm:text-[18px] md:text-[22px] lg:text-[28px]`}>Year</p>
        <p className={`${ibm.className} font-semibold text-[14px] sm:text-[18px] md:text-[22px] lg:text-[28px]`}>2021</p>
      </div>

    </div>
  </div>
</section>
  )
}

export default HeroSection