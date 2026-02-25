import Image from "next/image"
import { ibm, libre } from "@/lib/fonts"

const WeddingEvent = () => {
  return (
 <section id="event" className="relative w-full min-h-screen py-25 md:py-35 lg:py-44.75 overflow-hidden">
  <Image src="/bg-paper.png" alt="bg" fill className="object-cover object-bottom -z-10" priority />
  <div className="pointer-events-none absolute top-0 left-0 w-full h-20 lg:h-50 bg-linear-to-b from-[#f5f5f5] to-transparent z-0" />

  <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-8 lg:px-4">

    <h2 data-aos="fade-up" className={`${libre.className} font-medium text-[30px] sm:text-[34px] md:text-[36px] lg:text-[40px] text-[#082B21] mb-7.5 md:mb-10 lg:mb-11.25`}>
      Wedding Event
    </h2>

    <h3 data-aos="fade-up" data-aos-delay="100" className={`${ibm.className} font-semibold text-[20px] sm:text-[24px] md:text-[26px] lg:text-[30.75px] text-[#082B21] mb-7.5 md:mb-10 lg:mb-[45.35px] text-center`}>
      Saturday, 30 October 2026
    </h3>

    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-10 items-start w-full">

      <div data-aos="fade-right" className="text-left mb-6">
        <h4 className={`${ibm.className} font-semibold text-[18px] md:text-[20px] lg:text-[22px] text-[#082B21] mb-4 md:mb-15 lg:mb-[107.44px]`}>
          Holi Matrimony
        </h4>

        <p className={`${ibm.className} text-[15px] md:text-[16px] lg:text-[18px] text-[#082B21] max-w-xs mx-auto md:mx-0 text-justify`}>
          Jl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>

      <div data-aos="zoom-in" data-aos-delay="150" className="text-center mb-6">
        <h4 className={`${ibm.className} font-semibold text-[18px] md:text-[20px] lg:text-[22px] text-[#082B21] mb-[9.44px]`}>
          15.00 PM
        </h4>

        <div className="w-px h-15 md:h-17.5 lg:h-19.75 bg-[#082B21] mx-auto mb-4.25" />

        <button className={`${ibm.className} uppercase font-bold text-[#082B21] text-[12px] md:text-[12.95px] py-2 px-5 border border-[#082B21]`}>
          Google maps
        </button>
      </div>

      <div data-aos="fade-left" className="text-right">
        <h4 className={`${ibm.className} font-semibold text-[18px] md:text-[20px] lg:text-[22px] text-[#082B21] mb-4 md:mb-15 lg:mb-[107.44px]`}>
          Wedding Inspiration
        </h4>

        <p className={`${ibm.className} text-[15px] md:text-[16px] lg:text-[18px] text-[#082B21] max-w-xs md:ml-auto mx-auto md:mx-0 mb-12.5 md:mb-20 lg:mb-[116.61px]`}>
          Jl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>

    </div>

    <div>
      <h2 data-aos="fade-up" className={`${libre.className} font-medium text-[30px] md:text-[34px] lg:text-[40px] text-[#082B21]`}>
        Dresscode
      </h2>

      <p data-aos="fade-up" data-aos-delay="100" className={`${ibm.className} text-[15px] md:text-[16px] lg:text-[18px] text-[#082B21] mb-4.75`}>
        We kindly encourage our guests to wear these colors for our special day
      </p>

      <div className="flex flex-wrap md:flex-nowrap items-center gap-3.5 md:gap-[21.04px] md:justify-start sm:mb-0 mb-40">
        <img data-aos="zoom-in" data-aos-delay="0" src="/dc1.png" alt="" className="w-11 md:w-17.5 lg:w-21.25" />
        <img data-aos="zoom-in" data-aos-delay="100" src="/dc2.png" alt="" className="w-11 md:w-17.5 lg:w-21.25" />
        <img data-aos="zoom-in" data-aos-delay="200" src="/dc3.png" alt="" className="w-11 md:w-17.5 lg:w-21.25" />
        <img data-aos="zoom-in" data-aos-delay="300" src="/dc4.png" alt="" className="w-11 md:w-17.5 lg:w-21.25" />
        <img data-aos="zoom-in" data-aos-delay="400" src="/dc5.png" alt="" className="w-11 md:w-17.5 lg:w-21.25" />
      </div>
    </div>

  </div>

  <img data-aos="fade-left" src="/ornamenwe.png" alt="Ornamen" className="absolute bottom-0 right-0 w-40 md:w-62.5 lg:w-86.25" />
</section>
  )
}

export default WeddingEvent