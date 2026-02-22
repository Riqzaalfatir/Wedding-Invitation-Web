import Image from "next/image"
import { ibm, libre } from "@/lib/fonts"

const LoveStorySection = () => {
  return (
    <section className="relative w-full min-h-screen py-[90px] md:py-[140px] lg:py-[179px] overflow-hidden">
      <Image src="/bg-paper.png" alt="bg" fill className="object-cover object-bottom -z-10" priority/>

      <div className="pointer-events-none absolute top-0 left-0 w-full h-4 lg:h-50 bg-gradient-to-b from-[#f5f5f5] to-transparent z-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:px-8 lg:px-4 lg:p-0">
        
        {/* TITLE */}
        <h2 className={`${libre.className} 
        font-medium 
        text-[28px] sm:text-[34px] md:text-[38px] lg:text-[40px] 
        text-[#082B21] 
        mb-[28px] md:mb-[36px] lg:mb-[43.16px]`}>
          A Journey in Love
        </h2>

        {/* PARAGRAPH */}
        <p className={`${ibm.className} 
        text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] 
        leading-[23px] md:leading-[24px] lg:leading-[25px] 
        text-[#082B21] text-justify mb-[15px]`}>
          They said that “ You must simply marry someone who feels like your dearest friend.” Who knows that these two young and fearless human being who’s not even looking for love was deeply fall in love when they met each other. 5 years go by, and our love grows bigger and wilder than we ever imagined. All struggles, pain, joy, what else? You name it; we dare enough to say “yes, we’ve been through it together, we made mistakes (*well, will still making mistakes because we are all human), we embrace the pain and the joy, we learn the lessons, and yet still hold on tight on each other.”
        </p>

        <p className={`${ibm.className} 
        text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] 
        leading-[23px] md:leading-[24px] lg:leading-[25px] 
        text-[#082B21] text-justify mb-[15px]`}>
          Love, somehow someway makes us believe that it conquers all. Even we’re still learning to be a better person and partner for each other, one thing we know for sure is we always have each other hands to hold when we’re about to fall and shoulder to cry on when we’re about to break ourselves down.
        </p>

        <p className={`${ibm.className} 
        text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] 
        leading-[23px] md:leading-[24px] lg:leading-[25px] 
        text-[#082B21] text-justify mb-[30px] md:mb-[40px]`}>
          To you who is now reading this, we want to let you know that you are part of our journey, whether you realize it or not. We would be pleased if you could join the biggest moment of our life, the once in a lifetime moment; our wedding day. Let’s make memories together that we can laugh or even cry about when we are not that young anymore!
        </p>

        {/* IMAGES */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-[16px] md:gap-[20px]">

          <div className="relative h-[220px] md:h-[260px] lg:h-[281px] w-[150px] md:w-[170px] lg:w-[190px]">
            <Image src="/lv1.png" alt="LoveStory" fill className="object-contain" />
          </div>

          <div className="relative h-[220px] md:h-[260px] lg:h-[281px] w-[280px] md:w-[340px] lg:w-[400px]">
            <Image src="/lv2.png" alt="LoveStory" fill className="object-contain" />
          </div>

          <div className="relative h-[220px] md:h-[260px] lg:h-[281px] w-[150px] md:w-[170px] lg:w-[190px]">
            <Image src='/lv3.png' alt="LoveStory" fill className="object-contain" />
          </div>

        </div>
      </div>

      {/* ORNAMENT RESPONSIVE */}
      <img src="/OrnamenKiriAtas.png" alt="Ornamen" className="absolute top-0 left-0 w-[120px] md:w-[170px] lg:w-[208px] z-10" />
      <img src="/OrnamenKananAtas.png" alt="Ornamen" className="absolute top-0 right-0 w-[120px] md:w-[170px] lg:w-[208px] z-10" />
      <img src="/OrnamenKiriBawah.png" alt="Ornamen" className="absolute bottom-0 left-0 w-[120px] md:w-[170px] lg:w-[208px] z-10" />
      <img src="/OrnamenKananBawah.png" alt="Ornamen" className="absolute bottom-0 right-0 w-[120px] md:w-[170px] lg:w-[208px] z-10" />

      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-20 lg:h-50 bg-gradient-to-t from-[#f5f5f5] to-transparent z-0" />
    </section>
  )
}

export default LoveStorySection