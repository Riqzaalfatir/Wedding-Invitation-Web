"use client"

import Image from "next/image"
import { ibm, libre } from "@/lib/fonts"
import { useEffect, useState } from "react"

const HeroSection = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true)
    }, 400)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden flex flex-col pb-15 sm:pb-17.5 md:pb-20">
      <Image src="/bg-frame2.png" alt="Background Frame" fill priority className="object-cover object-top" />
      <div className="absolute inset-0 bg-[#E8E1BE]/40" />

      <div
        className={`relative z-10 flex flex-col items-center text-center px-4 text-[#082B21] pt-25 sm:pt-65 md:pt-90 lg:pt-123.25 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >

        <p data-aos="fade-up" className={`${ibm.className} font-semibold text-[14px] sm:text-[16px] md:text-[20px] lg:text-[23.95px] mb-2.5 sm:mb-3.5 md:mb-4 lg:mb-4.75`}>
          The Wedding Of
        </p>

        <h1 data-aos="fade-up" data-aos-delay="150" className={`${libre.className} text-[#082B21] leading-tight text-[42px] sm:text-[48px] md:text-[72px] lg:text-[96px] mb-7.5 sm:mb-10 md:mb-12.5 lg:mb-22.75`}>
          Jonathan <span className="block md:inline">&</span> Sherla
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className={`${ibm.className} font-medium text-center text-[#082B21] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] max-w-xl sm:max-w-xl md:max-w-2xl lg:max-w-4xl px-2 sm:px-4 md:px-0 mb-10 sm:mb-17.5 md:mb-25 lg:mb-33.5`}
        >
          Two are better than one, because they have a good reward for their toil.
          For if they fall, one will lift up his fellow. But woe to him who is alone
          when he falls and has not another to lift him up – ECCLESIASTES 4:9-10
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-full px-6 sm:px-10 md:px-16 lg:px-11 pb-10 sm:pb-12.5 md:pb-15 lg:pb-0 lg:static z-999">
        <div className="flex justify-between items-end text-[#082B21] uppercase tracking-widest">

          <div data-aos="fade-right" data-aos-delay="100" className="text-center">
            <p className={`${ibm.className} font-semibold text-[14px] sm:text-[18px] md:text-[22px] lg:text-[28px]`}>Day</p>
            <p className={`${ibm.className} font-semibold text-[14px] sm:text-[18px] md:text-[22px] lg:text-[28px]`}>Saturday</p>
          </div>

          <div data-aos="fade-up" data-aos-delay="250" className="text-center">
            <p className={`${ibm.className} font-semibold text-[14px] sm:text-[18px] md:text-[22px] lg:text-[28px]`}>Date</p>
            <p className={`${ibm.className} font-semibold text-[14px] sm:text-[18px] md:text-[22px] lg:text-[28px]`}>Thirty</p>
          </div>

          <div data-aos="fade-left" data-aos-delay="400" className="text-right">
            <p className={`${ibm.className} font-semibold text-[14px] sm:text-[18px] md:text-[22px] lg:text-[28px]`}>Year</p>
            <p className={`${ibm.className} font-semibold text-[14px] sm:text-[18px] md:text-[22px] lg:text-[28px]`}>2021</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection