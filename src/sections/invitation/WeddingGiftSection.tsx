import Image from "next/image"
import { ibm, libre } from "@/lib/fonts"

const WeddingGiftSection = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <Image src="/bg-gift.png" alt="Background Wedding Gift" fill priority className="object-cover object-top" />
      <div className="absolute inset-0 bg-[#E8E1BE]/18" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-[161px]">
        <div className="flex gap-6">
          <div>
            <h2 className={`${libre.className} font-bold text-[40px] text-white italic`}>Love<span className="block">Gift</span></h2>
          </div>
          <div className="pt-20 max-w-md">
            <p className={`${ibm.className} text-[19px] font-light text-white text-justify mb-5`}>For those of you who want to give a token of love to the bride and groom, you can use the account number below:</p>
            <div className="flex justify-between items-end gap-1 mb-[17.84px]">
              <div className={`${ibm.className} font-regular text-white text-[18px]`}>
                <p>BCA</p>
                <p>0860591855</p>
                <p>Sherla</p>
              </div>
              <div className="">
                <button className={`${ibm.className} text-regular text-[12px] text-[#082B21] py-2 px-8 bg-white`}>Copy Number</button>
              </div>
            </div>
            <div className="border-b-[0.81px] border-white w-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WeddingGiftSection