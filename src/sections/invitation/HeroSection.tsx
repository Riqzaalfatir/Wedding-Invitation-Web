import Image from "next/image"
import { ibm, libre } from "@/lib/fonts";


const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden pb-[80px]">
        <Image src="/bg-frame2.png" alt="Background Frame" fill priority className="object-cover object-top" />
        <div className="absolute inset-0 bg-[#E8E1BE]/40" />

        <div className="relative z-10 flex flex-col items-center text-center px-4 text-[#082B21] pt-[493px]">
            <p className={`${ibm.className} font-semibold text-[23.95px] mb-[19px]`}>
                The Wedding Of
            </p>
            <h1 className={`${libre.className} text-[96px] mb-[91px]  text-[#082B21]`}>
                Jonathan & Sherla
            </h1>
            <p className={`${ibm.className} font-medium  text-center text-[22px] max-w-4xl  text-[#082B21] mb-[134px]`}>
                Two are better than one, because they have a good reward for their toil. For if they fall, one will lift up his fellow. But woe to him who is alone when he falls and has not another to lift him up – ECCLESIASTES 4:9-10
            </p>
        </div>

        <div className="relative w-full px-[44px] mt-[120px]">
            <div className="flex justify-between items-end text-[#082B21] uppercase tracking-widest">
    
            <div className="text-center">
                <p className={`${ibm.className} font-semibold text-[28px]`}>Day</p>
                <p className={`${ibm.className} font-semibold text-[28px]`}>Saturday</p>
            </div>
            <div className="text-center">
                <p className={`${ibm.className} font-semibold text-[28px]`}>Date</p>
                <p className={`${ibm.className} font-semibold text-[28px]`}>Thirty</p>
            </div>
            <div className="text-right">
                <p className={`${ibm.className} font-semibold text-[28px]`}>Year</p>
                <p className={`${ibm.className} font-semibold text-[28px]`}>2021</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection