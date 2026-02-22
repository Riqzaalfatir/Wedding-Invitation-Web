"use client"

import React, { useState } from "react"
import { ibm, libre, khula } from "@/lib/fonts"

const RsvSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    attendance: "",
    guests: "",
    wishes: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleAttendance = (value: string) => {
    setFormData({ ...formData, attendance: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.attendance) {
      alert("Please fill name and attendance")
      return
    }

    setLoading(true)

    try {
      await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      setSuccess(true)
      setFormData({
        name: "",
        attendance: "",
        guests: "",
        wishes: "",
      })
    } catch (error) {
      alert("Something went wrong")
    }

    setLoading(false)
  }

  return (
  <section
  data-aos="fade-in"
  data-aos-duration="1000"
  className="relative w-full min-h-screen overflow-hidden"
>
      <div
        className="absolute inset-0 bg-cover bg-bottom"
        style={{ backgroundImage: "url('/bg-rsv.png')" }}
      ></div>

      <div className="absolute inset-0 bg-[#E8E1BE]/40"></div>

      <div className="relative z-10 flex items-center min-h-screen">
        <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 md:px-10">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="w-full text-[#082B21] py-[120px] md:py-[172px]"
          >

            {/* TITLE */}
            <h2
              data-aos="fade-up"
              data-aos-delay="200"
              className={`${libre.className}
              text-white
              text-[32px] sm:text-[36px] md:text-[40px]
              font-semibold
              mb-[18px] md:mb-[24.45px]`}
            >
              RSVP
            </h2>

            {/* DESCRIPTION */}
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className={`${ibm.className}
              font-light
              text-white
              text-[15px] sm:text-[16px] md:text-[18px]
              leading-[22px] md:leading-[25px]
              max-w-2xl
              text-justify
              mb-[30px] md:mb-[40.84px]`}
            >
              We kindly request your prompt response to confirm your attendance
              at our upcoming event. Alongside your RSVP, please take a moment
              to extend your warm regards and best wishes.
            </p>

            {/* FORM */}
            <form
              data-aos="fade-up"
              data-aos-delay="400"
              onSubmit={handleSubmit}
              className="w-full max-w-[520px] text-white"
            >
              {/* NAME */}
              <div
                data-aos="fade-up"
                data-aos-delay="500"
                className="mb-[14px] md:mb-[16.16px]"
              >
                <label
                  className={`${khula.className}
                  block
                  text-[16px] md:text-[18px]
                  mb-1`}
                >
                  NAME
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Guest Name"
                  className={`${khula.className}
                  text-[15px] md:text-[16px]
                  w-full
                  bg-transparent
                  border border-white/40
                  px-4 py-2
                  placeholder:text-[#625F5F]
                  focus:outline-none
                  focus:border-white
                  transition`}
                />
              </div>

              {/* ATTENDANCE */}
              <div
                data-aos="fade-up"
                data-aos-delay="600"
                className="mb-[14px] md:mb-[16.16px]"
              >
                <label
                  className={`${khula.className}
                  block
                  text-[16px] md:text-[18px]
                  mb-2`}
                >
                  ATTENDANCE
                </label>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button
                    type="button"
                    onClick={() => handleAttendance("attend")}
                    className={`flex-1 border py-2 text-sm sm:text-base transition
                    ${
                      formData.attendance === "attend"
                        ? "bg-white text-black border-white"
                        : "border-white/40"
                    }`}
                  >
                    EXCITED TO ATTEND
                  </button>

                  <button
                    type="button"
                    onClick={() => handleAttendance("not_attend")}
                    className={`flex-1 border py-2 text-sm sm:text-base transition
                    ${
                      formData.attendance === "not_attend"
                        ? "bg-white text-black border-white"
                        : "border-white/40"
                    }`}
                  >
                    UNABLE TO ATTEND
                  </button>
                </div>
              </div>

              {/* GUEST */}
              <div
                data-aos="fade-up"
                data-aos-delay="700"
                className="mb-[14px] md:mb-[16.16px]"
              >
                <label
                  className={`${khula.className}
                  block
                  text-[16px] md:text-[18px]
                  mb-1`}
                >
                  NO OF GUEST (MAX 2)
                </label>

                <input
                  type="number"
                  name="guests"
                  min="1"
                  max="2"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-white/40 px-4 py-2 text-white focus:outline-none focus:border-white transition"
                />
              </div>

              {/* WISHES */}
              <div
                data-aos="fade-up"
                data-aos-delay="800"
                className="mb-[24px] md:mb-[30px]"
              >
                <label
                  className={`${khula.className}
                  block
                  text-[16px] md:text-[18px]
                  mb-1`}
                >
                  WISHES
                </label>

                <textarea
                  name="wishes"
                  rows={4}
                  value={formData.wishes}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-white/40 px-4 py-2 text-white focus:outline-none focus:border-white transition"
                ></textarea>
              </div>

              {/* BUTTON */}
              <button
                data-aos="zoom-in"
                data-aos-delay="900"
                type="submit"
                disabled={loading}
                className={`${khula.className}
                font-bold
                text-[15px] md:text-[16px]
                bg-[#082B21]/71
                px-10 sm:px-12 md:px-14
                py-2
                text-white
                hover:opacity-80
                transition`}
              >
                {loading ? "SENDING..." : "SEND"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {success && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-6">
          <div
            data-aos="zoom-in"
            className="bg-white p-6 md:p-8 rounded-lg text-center max-w-sm w-full"
          >
            <h3 className="text-xl font-semibold mb-4">Thank You!</h3>
            <p className="mb-6">
              Your RSVP has been successfully sent.
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="bg-[#082B21] text-white px-6 py-2"
            >
              Close
            </button>
          </div>
        </div>
      )}
</section>
  )
}

export default RsvSection