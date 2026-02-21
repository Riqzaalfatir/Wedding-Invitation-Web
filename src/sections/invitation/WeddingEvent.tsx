import Image from "next/image"
import { ibm, libre } from "@/lib/fonts"

const WeddingEvent = () => {
  return (
    <section className="relative w-full min-h-screen py-[179px] overflow-hidden">
        <Image src="/bg-paper.png" alt="bg" fill className="object-cover -z-10" priority />
         <div className="pointer-events-none absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-[#f5f5f5] to-transparent z-0" />

      <div className="max-w-6xl mx-auto px-4">
        <h2 className={`${libre.className} font-medium text-[40px] text text-[#082B21] mb-[45px]`}>Wedding Event</h2>
        <h3 className={`${ibm.className} font-semibold text-[30.75px] text text-[#082B21] mb-[45.35px] text-center`}>Saturday, 30 October 2026</h3>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-10 items-start w-full">
            <div className="text-left">
                <h4 className={`${ibm.className} font-semibold text-[22px] text-[#082B21] mb-[107.44px]`}>Holi Matrimony</h4>
                <p className={`${ibm.className} font-regular text-[18px]  text-[#082B21] max-w-xs`}>Jl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <div className="text-center">
                <h4 className={`${ibm.className} font-semibold text-[22px] text-[#082B21] mb-[9.44px]`}>15.00 PM</h4> 
                <div className="w-px h-[79px] bg-[#082B21] mx-auto mb-[17px]" />
                <button className={`${ibm.className} uppercase font-bold text-[#082B21] text-[12.95px] py-2 px-5 border border-[#082B21]`}>Google maps</button> 
            </div>
            <div className="text-right">
                <h4 className={`${ibm.className} font-semibold text-[22px] text-[#082B21] mb-[107.44px]`}>Wedding Inspiration</h4>
                <p className={`${ibm.className} font-regular text-[18px]  text-[#082B21] max-w-xs ml-auto mb-[116.61px]`}>Jl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
        </div>

        <div className="">
            <h2 className={`${libre.className} font-medium text-[40px] text-[#082B21]`}>Dresscode</h2>
            <p className={`${ibm.className} font-regular text-[18px] text-[#082B21] mb-[19px]`}>We kindly encourage our guests to wear these colors for our special day</p>
            <div className="flex items-center gap-[21.04px]">
                <img src="/dc1.png" alt="" />
                <img src="/dc2.png" alt="" />
                <img src="/dc3.png" alt="" />
                <img src="/dc4.png" alt="" />
                <img src="/dc5.png" alt="" />
            </div>
        </div>
      </div>

    <img src="/ornamenwe.png" alt="Ornamen" className="absolute bottom-0 right-0 w-[345px] h-[345px] z-10" />
    </section>
  )
}

export default WeddingEvent