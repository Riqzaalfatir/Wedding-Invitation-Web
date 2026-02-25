import Image from "next/image"
import { ibm, libre } from "@/lib/fonts"

const LoveStorySection = () => {
  return (
    <section id="story" className="relative w-full min-h-screen py-22.5 md:py-35 lg:py-44.75 overflow-hidden">
      <Image src="/bg-paper.png" alt="bg" fill className="object-cover object-bottom -z-10" priority />

      <div className="pointer-events-none absolute top-0 left-0 w-full h-4 lg:h-50 bg-linear-to-b from-[#f5f5f5] to-transparent z-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:px-8 lg:px-4 lg:p-0">

        <h2 data-aos="fade-up" className={`${libre.className} font-medium text-[28px] sm:text-[34px] md:text-[38px] lg:text-[40px] text-[#082B21] mb-7 md:mb-9 lg:mb-[43.16px]`}>
          A Journey in Love
        </h2>

        <p data-aos="fade-up" data-aos-delay="100" className={`${ibm.className} text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-5.75 md:leading-6 lg:leading-6.25 text-[#082B21] text-justify mb-3.75`}>
          They said that “ You must simply marry someone who feels like your dearest friend.” Who knows that these two young and fearless human being who’s not even looking for love was deeply fall in love when they met each other. 5 years go by, and our love grows bigger and wilder than we ever imagined. All struggles, pain, joy, what else? You name it; we dare enough to say “yes, we’ve been through it together, we made mistakes (*well, will still making mistakes because we are all human), we embrace the pain and the joy, we learn the lessons, and yet still hold on tight on each other.”
        </p>

        <p data-aos="fade-up" data-aos-delay="200" className={`${ibm.className} text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-5.75 md:leading-6 lg:leading-6.25 text-[#082B21] text-justify mb-3.75`}>
          Love, somehow someway makes us believe that it conquers all. Even we’re still learning to be a better person and partner for each other, one thing we know for sure is we always have each other hands to hold when we’re about to fall and shoulder to cry on when we’re about to break ourselves down.
        </p>

        <p data-aos="fade-up" data-aos-delay="300" className={`${ibm.className} text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-5.75 md:leading-6 lg:leading-6.25 text-[#082B21] text-justify mb-7.5 md:mb-10`}>
          To you who is now reading this, we want to let you know that you are part of our journey, whether you realize it or not. We would be pleased if you could join the biggest moment of our life, the once in a lifetime moment; our wedding day. Let’s make memories together that we can laugh or even cry about when we are not that young anymore!
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-5">
          <div data-aos="zoom-in" className="relative h-55 md:h-65 lg:h-70.25 w-37.5 md:w-42.5 lg:w-47.5">
            <Image src="/lv1.png" alt="LoveStory" fill className="object-contain" />
          </div>

          <div data-aos="zoom-in" data-aos-delay="150" className="relative h-55 md:h-65 lg:h-70.25 w-70 md:w-85 lg:w-100">
            <Image src="/lv2.png" alt="LoveStory" fill className="object-contain" />
          </div>

          <div data-aos="zoom-in" data-aos-delay="300" className="relative h-55 md:h-65 lg:h-70.25 w-37.5 md:w-42.5 lg:w-47.5">
            <Image src="/lv3.png" alt="LoveStory" fill className="object-contain" />
          </div>
        </div>

      </div>

      <img data-aos="fade-right" src="/OrnamenKiriAtas.png" className="absolute top-0 left-0 w-30 md:w-42.5 lg:w-52 z-10" />
      <img data-aos="fade-left" src="/OrnamenKananAtas.png" className="absolute top-0 right-0 w-30 md:w-42.5 lg:w-52 z-10" />
      <img data-aos="fade-right" src="/OrnamenKiriBawah.png" className="absolute bottom-0 left-0 w-30 md:w-42.5 lg:w-52 z-10" />
      <img data-aos="fade-left" src="/OrnamenKananBawah.png" className="absolute bottom-0 right-0 w-30 md:w-42.5 lg:w-52 z-10" />

      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-20 lg:h-50 bg-linear-to-t from-[#f5f5f5] to-transparent z-0" />
    </section>
  )
}

export default LoveStorySection