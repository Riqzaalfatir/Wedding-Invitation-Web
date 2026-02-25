import Image from "next/image"
import { ibm, khula } from "@/lib/fonts"

const ProfileSection = () => {
  return (
    <section id="profile" className="relative w-full min-h-screen py-20 overflow-hidden">

      <Image src="/bg-paper.png" alt="bg" fill className="object-cover object-bottom -z-10" priority />


      <div className="flex flex-col items-center p-6.25 sm:p-10 gap-12 px-6 lg:hidden">

        <div data-aos="zoom-in" className="relative w-62.5 h-67.5 sm:w-95 sm:h-100">
          <Image src="/couple.png" alt="couple" fill className="object-cover" />
        </div>

        <div data-aos="fade-up" data-aos-delay="150" className="text-center">
          <p className={`${ibm.className} font-medium mb-1 text-[20px] sm:text-[28px] uppercase text-[#082B21]`}>THE GROOM</p>
          <h2 className={`${ibm.className} font-semibold text-[28px] sm:text-[36px] text-[#082B21]`}>Jonathan Liandi</h2>
          <p className="text-[18px] sm:text-[24px] mt-2 text-[#082B21]">The Son of</p>
          <p className="text-[16px] sm:text-[22px] text-[#082B21]">Mr. Petrus Hendra</p>
          <p className="text-[16px] sm:text-[22px] text-[#082B21]">Mrs. Yulia</p>
        </div>

        <div data-aos="fade-up" data-aos-delay="300" className="text-center">
          <p className={`${ibm.className} font-medium mb-1 text-[20px] sm:text-[28px] uppercase text-[#082B21]`}>THE BRIDE</p>
          <h2 className={`${khula.className} font-semibold text-[28px] sm:text-[36px] text-[#082B21]`}>Sherla</h2>
          <p className="text-[16px] sm:text-[24px] mt-2 text-[#082B21]">The Daughter of</p>
          <p className="text-[16px] sm:text-[22px] text-[#082B21]">Mr. Amran</p>
          <p className="text-[16px] sm:text-[22px] text-[#082B21]">Ms. Suharty</p>
        </div>
      </div>


      <div className="hidden lg:block">

        <div data-aos="zoom-in" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-99.5 h-104">
            <Image src="/couple.png" alt="couple" fill className="object-cover" />
          </div>
        </div>

        <div data-aos="fade-right" className="absolute left-[calc(50%-199px-280px)] top-1/2 -translate-y-1/2 text-right w-65">
          <p className={`${ibm.className} font-medium text-[28px] uppercase text-[#082B21] mb-4.5`}>THE GROOM</p>
          <h2 className={`${ibm.className} font-semibold text-[40px] text-[#082B21] mb-15.5`}>Jonathan Liandi</h2>
          <div className="flex items-center gap-2 justify-end mb-[56.39px]">
            <img src="/Instagram.png" alt="" />
            <p className={`${ibm.className} font-medium text-[12px] text-[#082B21]`}>@ Jonathan</p>
          </div>
          <p className={`${ibm.className} font-medium text-[18px] text-[#082B21] mb-[13.39px]`}>The Son of</p>
          <p className={`${ibm.className} font-regular text-[18px] text-[#082B21]`}>Mr. Petrus Hendra</p>
          <p className={`${ibm.className} font-regular text-[18px] text-[#082B21]`}>Mrs. Yulia</p>
        </div>

        <div data-aos="fade-left" className="absolute right-[calc(50%-199px-280px)] top-1/2 -translate-y-1/2 text-left w-65">
          <p className={`${ibm.className} font-medium uppercase text-[28px] text-[#082B21] mb-[26.59px]`}>THE BRIDE</p>
          <h2 className={`${khula.className} font-semibold text-[40px] text-[#082B21] mb-[101.93px]`}>Sherla</h2>
          <div className="flex items-center gap-2 justify-left mb-[56.39px]">
            <img src="/Instagram.png" alt="" />
            <p className={`${ibm.className} font-medium text-[12px] text-[#082B21]`}>@ Sherla</p>
          </div>
          <p className={`${ibm.className} font-medium text-[18px] text-[#082B21] mb-[13.39px]`}>The Daughter of</p>
          <p className={`${ibm.className} font-regular text-[18px] text-[#082B21]`}>Mr. Amran</p>
          <p className={`${ibm.className} font-regular text-[18px] text-[#082B21]`}>Ms. Suharty</p>
        </div>

        <img data-aos="fade-left" src="/ornamen-kanan.png" className="absolute top-10 right-30 w-95 z-10" />
        <img data-aos="fade-right" src="/ornamen-kiri.png" className="absolute bottom-10 left-30 w-95 z-10" />
      </div>

      <img data-aos="fade-left" src="/ornamen-kanan.png" className="absolute top-0 right-0 w-45 sm:w-85 opacity-70 lg:hidden z-10" />
      <img data-aos="fade-right" src="/ornamen-kiri.png" className="absolute bottom-0 left-0 w-45 sm:w-85 opacity-70 lg:hidden z-10" />

      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-20 lg:h-50 bg-linear-to-t from-[#f5f5f5] to-transparent z-0" />

    </section>
  )
}

export default ProfileSection