"use client"

import Image from "next/image"
import { libre, ibm } from "@/lib/fonts"
import { useState } from "react"

const GallerySection = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      <Image
        src="/bg-paper.png"
        alt="Background"
        fill
        priority
        className="object-cover object-bottom -z-10"
      />

      <div className="pointer-events-none absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-[#f5f5f5] to-transparent z-0" />

      {/* ORNAMEN RESPONSIVE */}
      <img
        src="/OrnamenKiriAtas.png"
        alt="Ornamen"
        className="absolute top-0 left-0 w-[120px] md:w-[160px] lg:w-[208px] h-auto z-10"
      />
      <img
        src="/OrnamenKananAtas.png"
        alt="Ornamen"
        className="absolute top-0 right-0 w-[120px] md:w-[160px] lg:w-[208px] h-auto z-10"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-[140px] md:py-[200px] lg:py-[258px]">

        {/* TITLE */}
        <div className="md:w-1/2 md:ml-auto mb-8">
          <h2 className={`${libre.className} font-medium text-[32px] md:text-[36px] lg:text-[40px] text-[#082B21] m-[7.55px]`}>
            Our Gallery
          </h2>

          <p className={`${ibm.className} font-normal text-[16px] md:text-[17px] lg:text-[18px] text-[#082B21] mb-[8.22px] max-w-lg`}>
            Love is the greatest adventure, and I’m grateful to have you as my partner.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-14 md:gap-16">

          {/* MAIN IMAGE */}
          <div className="relative w-full md:w-[410px] lg:w-[560px] h-[260px] md:h-[320px] lg:h-[420px] overflow-hidden group cursor-pointer">

            <Image
              src="/pictgalery1.png"
              alt="Galery"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#082B21]/70 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                <div className="w-0 h-0 border-l-[12px] md:border-l-[14px] border-l-white border-y-[8px] md:border-y-[10px] border-y-transparent ml-1" />
              </div>
            </div>
          </div>

          {/* THUMBNAILS */}
          <div>

            <div
              className="flex items-end gap-4 md:gap-6 mb-6 md:mb-8"
              onMouseLeave={() => setActiveIndex(0)}
            >

              {[2, 3, 4].map((num, index) => {
                const isActive = activeIndex === index

                return (
                  <div
                    key={num}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`relative overflow-hidden transition-all duration-300 ease-out cursor-pointer
                    ${
                      isActive
                        ? "w-[110px] h-[170px] md:w-[130px] md:h-[200px] lg:w-[150px] lg:h-[230px]"
                        : "w-[90px] h-[130px] md:w-[110px] md:h-[150px] lg:w-[120px] lg:h-[170px]"
                    }`}
                  >
                    <Image
                      src={`/pictgalery${num}.png`}
                      alt="thumb"
                      fill
                      className="object-cover"
                    />
                  </div>
                )
              })}
            </div>

            {/* DOTS */}
            <div className="flex justify-center gap-3">
              {[0, 1, 2].map((index) => (
                <span
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-200 ${
                    activeIndex === index
                      ? "bg-[#2f4f46] scale-110"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default GallerySection