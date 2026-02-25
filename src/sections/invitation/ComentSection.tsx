"use client"

import { useState } from "react"
import Image from "next/image"
import { coment } from "@/lib/coment"
import { khula } from "@/lib/fonts"

const ComentSection = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 5
  const totalPages = 3

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const currentData = coment.slice(startIndex, endIndex)

  return (
   <section
  data-aos="fade-in"
  data-aos-duration="1000"
  className="relative w-full min-h-screen overflow-hidden"
>
      <Image src="/bg-paper.png" alt="bg" fill className="object-cover object-bottom -z-10" priority/>

      <div className="pointer-events-none absolute top-0 left-0 w-full h-4 bg-linear-to-b from-[#f5f5f5] to-transparent z-0" />

      <img
        src="/OrnamenKananAtas.png"
        alt="Ornamen"
        className="absolute top-0 right-0 w-[120px] md:w-[160px] lg:w-[208px] h-auto z-10"
        data-aos="fade-down"
        data-aos-delay="100"
      />

      <img
        src="/OrnamenKiriBawah.png"
        alt="Ornamen"
        className="absolute bottom-0 left-0 w-[120px] md:w-[160px] lg:w-[208px] h-auto z-10"
        data-aos="fade-up"
        data-aos-delay="100"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 p-6 py-[148px] md:py-[168px] lg:py-[200.34px]">

        <div className="space-y-8 md:space-y-10">
          {currentData.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={150 + index * 100} 
              className="border-b-[0.86px] border-[#000000] pb-[24px] md:pb-[32.96px]"
            >

              <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-0">

                <div className="flex items-start gap-[20px] md:gap-[33px] flex-1">

                  <div
                    className={`${khula.className}
                    font-semibold
                    text-[15px] md:text-[18px]
                    w-[50px] md:w-[80px]
                    shrink-0
                    text-[#000000]`}
                  >
                    {item.nama}
                  </div>

                  <div
                    className={`${khula.className}
                    font-light
                    text-[15px] md:text-[18px]
                    max-w-full md:max-w-3xl
                    text-[#000000]`}
                  >
                    {item.pesan}
                  </div>

                </div>

                <div
                  className={`${khula.className}
                  font-light
                  text-right
                  text-[13px] md:text-[14px]
                  md:ml-auto
                  md:w-[140px]
                  text-left md:text-right
                  text-[#000000]`}
                >
                  {item.waktu}
                </div>

              </div>
            </div>
          ))}
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay={200 + currentData.length * 100}
          className="flex flex-col sm:flex-row sm:justify-end sm:items-center mt-10 md:mt-12 gap-3 sm:gap-4 text-sm text-gray-600"
        >

          <span>
            Page {currentPage} of {totalPages}
          </span>

          <div className="flex gap-2">
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.max(prev - 1, 1))
              }
              disabled={currentPage === 1}
              className={`border px-3 py-1 transition
              ${
                currentPage === 1
                  ? "opacity-40 border-gray-900 text-black"
                  : "hover:text-black hover:border-black"
              }`}
            >
              &lt;
            </button>

            <button
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.min(prev + 1, totalPages)
                )
              }
              disabled={currentPage === totalPages}
              className={`border px-3 py-1 transition
              ${
                currentPage === totalPages
                  ? "opacity-40 border-gray-900 text-black"
                  : "hover:text-black hover:border-black"
              }`}
            >
              &gt;
            </button>
          </div>
        </div>

      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-20 lg:h-50 bg-gradient-to-t from-[#f5f5f5] to-transparent z-0" />
</section>
  )
}

export default ComentSection