"use client"

import { useState } from "react"
import Image from "next/image"
import { ibm, libre } from "@/lib/fonts"

const WeddingGiftSection = () => {

  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
  const text = "0860591855"

  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(text)
    } else {
      const textarea = document.createElement("textarea")
      textarea.value = text
      textarea.style.position = "fixed"
      textarea.style.opacity = "0"
      document.body.appendChild(textarea)
      textarea.focus()
      textarea.select()
      document.execCommand("copy")
      document.body.removeChild(textarea)
    }

    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)

  } catch (err) {
    console.log("Copy gagal:", err)
  }
}
  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      <Image
        src="/bg-gift.png"
        alt="Background Wedding Gift"
        fill
        priority
        className="object-cover object-top"
      />

      <div className="pointer-events-none absolute inset-0 bg-[#E8E1BE]/18" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 md:px-10 lg:px-4 pt-[120px] sm:pt-[140px] md:pt-[150px] lg:pt-[161px]">

        {/* FLEX */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-6">

          {/* TITLE */}
          <div>
            <h2
              className={`${libre.className} font-bold italic text-white
              text-[32px] sm:text-[36px] md:text-[38px] lg:text-[40px]`}
            >
              Love
              <span className="block">Gift</span>
            </h2>
          </div>

          {/* CONTENT */}
          <div className="md:pt-20 max-w-md">

            <p
              className={`${ibm.className}
              text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px]
              font-light text-white text-justify mb-5`}
            >
              For those of you who want to give a token of love to the bride
              and groom, you can use the account number below:
            </p>

            {/* BANK */}
            <div className="flex justify-between items-end gap-3 mb-[17.84px]">

              <div className={`${ibm.className} text-white text-[16px] sm:text-[17px] md:text-[18px]`}>
                <p>BCA</p>
                <p>0860591855</p>
                <p>Sherla</p>
              </div>

              <div>
               <button
  onClick={handleCopy}
  className={`${ibm.className}
  text-[11px] sm:text-[12px]
  text-[#082B21]
  py-2 px-6 sm:px-8
  bg-white`}
>
  {copied ? "Copied ✓" : "Copy Number"}
</button>
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