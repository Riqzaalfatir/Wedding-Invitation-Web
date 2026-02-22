import Image from "next/image"
import { libre } from "@/lib/fonts"
import Countdown from "@/components/Countdown"

const Rsvp = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      
      {/* Background */}
      <Image
        src="/bg-rsvp.png"
        alt="Background RSVP"
        fill
        priority
        sizes="100vw"
        className="object-cover object-bottom"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#E8E1BE]/40" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 lg:px-4 pt-[90px] sm:pt-[110px] lg:pt-[136px] text-center">
        
        <h1
          className={`${libre.className} italic font-bold 
          text-[42px] sm:text-[60px] lg:text-[96px] 
          leading-tight text-[#082B21] 
          mb-[10px] sm:mb-[12px] lg:mb-[14px]`}
        >
          Almost Time
          <span className="block">For Our Celebration</span>
        </h1>

        <div className="scale-[0.85] sm:scale-100">
          <Countdown />
        </div>

      </div>
    </section>
  )
}

export default Rsvp