import Image from "next/image"
import { ibm, libre } from "@/lib/fonts"

const WeddingEvent = () => {
  return (
    <section className="relative w-full min-h-screen py-[100px] md:py-[140px] lg:py-[179px] overflow-hidden">
      <Image src="/bg-paper.png" alt="bg" fill className="object-cover object-bottom -z-10" priority/>
      <div className="pointer-events-none absolute top-0 left-0 w-full h-20 lg:h-50 bg-gradient-to-b from-[#f5f5f5] to-transparent z-0" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-8 lg:px-4">

        {/* TITLE */}
        <h2 className={`${libre.className} font-medium text-[30px] sm:text-[34px] md:text-[36px] lg:text-[40px] text-[#082B21] mb-[30px] md:mb-[40px] lg:mb-[45px]`}>
          Wedding Event
        </h2>

        <h3 className={`${ibm.className} font-semibold text-[20px] sm:text-[24px] md:text-[26px] lg:text-[30.75px] text-[#082B21] mb-[30px] md:mb-[40px] lg:mb-[45.35px] text-center`}>
          Saturday, 30 October 2026
        </h3>

        {/* EVENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-10 items-start w-full">

          {/* LEFT */}
          <div className="text-left mb-6">
            <h4 className={`${ibm.className} font-semibold text-[18px] md:text-[20px] lg:text-[22px] text-[#082B21] mb-[16px] md:mb-[60px] lg:mb-[107.44px]`}>
              Holi Matrimony
            </h4>

            <p className={`${ibm.className} text-[15px] md:text-[16px] lg:text-[18px] text-[#082B21] max-w-xs mx-auto md:mx-0 text-justify`}>
              Jl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          {/* CENTER */}
          <div className="text-center mb-6">
            <h4 className={`${ibm.className} font-semibold text-[18px] md:text-[20px] lg:text-[22px] text-[#082B21] mb-[9.44px]`}>
              15.00 PM
            </h4>

            <div className="w-px h-[60px] md:h-[70px] lg:h-[79px] bg-[#082B21] mx-auto mb-[17px]" />

            <button className={`${ibm.className} uppercase font-bold text-[#082B21] text-[12px] md:text-[12.95px] py-2 px-5 border border-[#082B21]`}>
              Google maps
            </button>
          </div>

          {/* RIGHT */}
          <div className="text-right">
            <h4 className={`${ibm.className} font-semibold text-[18px] md:text-[20px] lg:text-[22px] text-[#082B21] mb-[16px] md:mb-[60px] lg:mb-[107.44px]`}>
              Wedding Inspiration
            </h4>

            <p className={`${ibm.className} text-[15px] md:text-[16px] lg:text-[18px] text-[#082B21] max-w-xs md:ml-auto mx-auto md:mx-0 mb-[50px] md:mb-[80px] lg:mb-[116.61px]`}>
              Jl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

        </div>

        {/* DRESSCODE */}
        <div>
          <h2 className={`${libre.className} font-medium text-[30px] md:text-[34px] lg:text-[40px] text-[#082B21]`}>
            Dresscode
          </h2>

          <p className={`${ibm.className} text-[15px] md:text-[16px] lg:text-[18px] text-[#082B21] mb-[19px]`}>
            We kindly encourage our guests to wear these colors for our special day
          </p>

          <div className="flex flex-wrap md:flex-nowrap items-center gap-[14px] md:gap-[21.04px]  md:justify-start sm:mb-0 mb-40 ">
            <img src="/dc1.png" alt="" className="w-[44px] md:w-[70px] lg:w-[85px]" />
            <img src="/dc2.png" alt="" className="w-[44px] md:w-[70px]  lg:w-[85px]" />
            <img src="/dc3.png" alt="" className="w-[44px] md:w-[70px]  lg:w-[85px]" />
            <img src="/dc4.png" alt="" className="w-[44px] md:w-[70px]  lg:w-[85px]" />
            <img src="/dc5.png" alt="" className="w-[44px] md:w-[70px]  lg:w-[85px]" />
          </div>
        </div>

      </div>

      {/* ORNAMENT */}
      <img
        src="/ornamenwe.png"
        alt="Ornamen"
        className="absolute bottom-0 right-0 w-[160px] md:w-[250px] lg:w-[345px]"
      />
    </section>
  )
}

export default WeddingEvent