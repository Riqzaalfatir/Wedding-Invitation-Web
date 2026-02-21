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
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-[136px] text-center">
        
        <h1
          className={`${libre.className} italic font-bold text-[96px] leading-tight text-[#082B21] mb-[14px]`}
        >
          Almost Time
          <span className="block">For Our Celebration</span>
        </h1>

        <Countdown />
      </div>
    </section>
  )
}

export default Rsvp