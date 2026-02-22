import Image from "next/image"
import { ibm, libre } from "@/lib/fonts"

const ThankYouSection = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <Image
        src="/bg-thankyou.png"
        alt="Background Thankyou"
        fill
        priority
        className="object-cover object-right lg:object-top"
      />

      <div className="absolute inset-0 bg-[#E8E1BE]/24" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 md:px-10 lg:px-4 text-center
      pt-[180px] sm:pt-[240px] md:pt-[300px] lg:pt-[349px]">

        <h2
          className={`${libre.className}
          text-white
          text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px]`}
        >
          Thank You
        </h2>

        <h4
          className={`${ibm.className}
          font-bold text-white
          text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]
          mb-[15px]`}
        >
          For Your Attendance And Support
        </h4>

        <p
          className={`${ibm.className}
          text-white
          text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px]
          max-w-md mx-auto
          mb-[20px]`}
        >
          It is a pleasure and honor for us, if you are willing to attend and give us your blessing.
        </p>

        <p
          className={`${ibm.className}
          font-bold text-white
          text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]`}
        >
          Jonathan & Sherla
        </p>

      </div>
    </section>
  )
}

export default ThankYouSection