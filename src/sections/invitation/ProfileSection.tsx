import Image from "next/image"
import { ibm, khula } from "@/lib/fonts"

const ProfileSection = () => {
  return (
    <section className="relative w-full min-h-screen py-20 overflow-hidden">

      {/* BACKGROUND */}
      <Image
        src="/bg-paper.png"
        alt="bg"
        fill
        className="object-cover -z-10"
        priority
      />

        <div className="pointer-events-none absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-[#f5f5f5] to-transparent z-0" />


      {/* ========================= */}
      {/* MOBILE & TABLET LAYOUT */}
      {/* ========================= */}
      <div className="flex flex-col items-center gap-12 px-6 lg:hidden">

        {/* FOTO */}
        <div className="relative w-[280px] h-[300px] sm:w-[340px] sm:h-[360px]">
          <Image
            src="/couple.png"
            alt="couple"
            fill
            className="object-cover"
          />
        </div>

        {/* GROOM */}
        <div className="text-center">
          <p className={`${ibm.className} font-medium text-[20px] uppercase text-[#082B21]`}>
            THE GROOM
          </p>
          <h2 className={`${ibm.className} font-semibold text-[28px] text-[#082B21]`}>
            Jonathan Liandi
          </h2>
          <p className="text-[16px] mt-2">The Son of</p>
          <p className="text-[16px]">Mr. Petrus Hendra</p>
          <p className="text-[16px]">Mrs. Yulia</p>
        </div>

        {/* BRIDE */}
        <div className="text-center">
          <p className={`${ibm.className} font-medium text-[20px] uppercase text-[#082B21]`}>
            THE BRIDE
          </p>
          <h2 className={`${khula.className} font-semibold text-[28px] text-[#082B21]`}>
            Sherla
          </h2>
          <p className="text-[16px] mt-2">The Daughter of</p>
          <p className="text-[16px]">Mr. Amran</p>
          <p className="text-[16px]">Ms. Suharty</p>
        </div>
      </div>

      {/* ========================= */}
      {/* DESKTOP LAYOUT (FIGMA STYLE) */}
      {/* ========================= */}
      <div className="hidden lg:block">

        {/* FOTO TENGAH */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-[398px] h-[416px]">
            <Image
              src="/couple.png"
              alt="couple"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* TEKS KIRI */}
        <div className="absolute left-[calc(50%-199px-280px)] top-1/2 -translate-y-1/2 text-right w-[260px]">
          <p className={`${ibm.className} font-medium text-[28px] uppercase text-[#082B21] mb-[18px]`}>
            THE GROOM
          </p>
          <h2 className={`${ibm.className} font-semibold text-[40px] text-[#082B21] mb-[62px]`}>
            Jonathan Liandi
          </h2>
          <div className="flex items-center gap-2 justify-end mb-[56.39px]">
            <img src="/Instagram.png" alt="" />
            <p className={`${ibm.className} font-medium text-[12px] text-[#082B21]`}>@ Jonathan</p>
          </div>
          <p className={`${ibm.className} font-medium text-[18px] text-[#082B21] mb-[13.39px]`}>The Son of</p>
          <p className={`${ibm.className} font-regular text-[18px] text-[#082B21]`}>Mr. Petrus Hendra</p>
          <p className={`${ibm.className} font-regular text-[18px] text-[#082B21]`}>Mrs. Yulia</p>
        </div>

        {/* TEKS KANAN */}
        <div className="absolute right-[calc(50%-199px-280px)] top-1/2 -translate-y-1/2 text-left w-[260px]">
          <p className={`${ibm.className} font-medium uppercase text-[28px] text-[#082B21] mb-[26.59px]`}>
            THE BRIDE
          </p>
          <h2 className={`${khula.className} font-semibold text-[40px] text-[#082B21] mb-[101.93px]`}>
            Sherla
          </h2>
          <div className="flex items-center gap-2 justify-left mb-[56.39px]">
            <img src="/Instagram.png" alt="" />
            <p className={`${ibm.className} font-medium text-[12px] text-[#082B21]`}>@ Sherla</p>
          </div>
          <p className={`${ibm.className} font-medium text-[18px] text-[#082B21] mb-[13.39px]`}>The Daughter of</p>
          <p className={`${ibm.className} font-regular text-[18px] text-[#082B21]`}>Mr. Amran</p>
          <p className={`${ibm.className} font-regular text-[18px] text-[#082B21]`}>Ms. Suharty</p>
        </div>

        {/* ORNAMEN DESKTOP */}
        <img
          src="/ornamen-kanan.png"
          className="absolute top-[40px] right-[120px] w-[380px]"
        />
        <img
          src="/ornamen-kiri.png"
          className="absolute bottom-[40px] left-[120px] w-[380px]"
        />
      </div>

      {/* ORNAMEN MOBILE (lebih kecil & subtle) */}
      <img
        src="/ornamen-kanan.png"
        className="absolute top-0 right-0 w-[180px] opacity-70 lg:hidden"
      />
      <img
        src="/ornamen-kiri.png"
        className="absolute bottom-0 left-0 w-[180px] opacity-70 lg:hidden"
      />

        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-4 bg-gradient-to-t from-[#f5f5f5] to-transparent z-0" />


    </section>
  )
}

export default ProfileSection