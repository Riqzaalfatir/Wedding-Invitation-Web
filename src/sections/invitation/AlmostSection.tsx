import Image from "next/image"
import { libre } from "@/lib/fonts"
import Countdown from "@/components/Countdown"

const Rsvp = () => {
  return (
    <section data-aos="fade-in" data-aos-duration="1000" className="relative w-full min-h-screen overflow-hidden">
      <Image src="/bg-rsvp.png" alt="Background RSVP" fill priority sizes="100vw" className="object-cover object-bottom" />

      <div className="absolute inset-0 bg-[#E8E1BE]/40" />

      <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1200" className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 lg:px-4 pt-22.5 sm:pt-27.5 lg:pt-34 text-center">
        <h1 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200" className={`${libre.className} italic font-bold text-[42px] sm:text-[60px] lg:text-[96px] leading-tight text-[#082B21] mb-2.5 sm:mb-3 lg:mb-3.5`}>
          Almost Time
          <span className="block">For Our Celebration</span>
        </h1>

        <div data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1000" className="scale-[0.85] sm:scale-100">
          <Countdown />
        </div>
      </div>
    </section>
  )
}

export default Rsvp