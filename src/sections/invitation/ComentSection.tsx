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
    <section className='relative w-full min-h-screen overflow-hidden'>
        <Image src="/bg-paper.png" alt="bg" fill className="object-cover object-bottom -z-10" priority />
        <div className="pointer-events-none absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-[#f5f5f5] to-transparent z-0" />

      <img src="/OrnamenKananAtas.png" alt="Ornamen" className="absolute top-0 right-0 w-[208px] h-[208px] z-10" />
      <img src="/OrnamenKiriBawah.png" alt="Ornamen" className="absolute bottom-0 left-0 w-[208px] h-[208px] z-10" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-[200.34px]">
        <div className="space-y-10">
            {currentData.map((item) => (
                <div key={item.id} className="border-b-[0.86px] border-[#000000] pb-[32.96px]">
                   <div className="flex items-start">
                    <div className="flex items-start gap-[33px]">
                        <div className={`${khula.className} font-semibold text-[18px] w-[80px] shrink-0 text-[#000000]`}>
                            {item.nama}
                        </div>
                        <div className={`${khula.className} font-light text-[18px] max-w-3xl text-[#000000]`}>
                            {item.pesan}
                        </div>
                        </div>
                        <div className={`${khula.className} font-light text-12[px] ml-auto w-[140px] text-right text-[#000000]`}>
                            {item.waktu}
                        </div>
                    </div>
                </div>
             ))}
        </div>

        <div className="flex justify-end items-center mt-12 gap-4 text-sm text-gray-600">
            <span>Page {currentPage} of {totalPages}</span>
            <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1} className={`border px-3 py-1 transition ${currentPage === 1 ? "opacity-40  border-gray-900 text-black" : "hover:text-black hover:border-black"}`}>&lt;</button>
            <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages } className={`border px-3 py-1 transition  ${currentPage === totalPages ? "opacity-40  border-gray-900 text-black" : "hover:text-black hover:border-black"}`}>&gt;</button>
        </div>
      </div>

        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-4 bg-gradient-to-t from-[#f5f5f5] to-transparent z-0" />
    </section>
  )
}

export default ComentSection
