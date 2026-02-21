"use client"

import React, { useState } from "react"
import { ibm, libre, khula } from "@/lib/fonts"

const RsvSection = () => {
    const [ formData, setFormData ] = useState({
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
            setFormData({...formData, [e.target.name]: e.target.value })
    }
        const handleAttendance = (value: string) => {
            setFormData({...formData, attendance: value})
        }

        const handleSubmit = async (e:React.FormEvent) => {
            e.preventDefault()

            if (!formData.name || !formData.attendance){
                alert("Please fill name and attendance")
                return
            }

            setLoading(true)

            try {
                await fetch("/api/rsvp", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
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
    <section className="relative w-full min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-bottom" style={{ backgroundImage: "url('/bg-rsv.png')"}}></div>
        <div className="absolute inset-0 bg  bg-[#E8E1BE]/40"></div>

        <div className="relative z-10 flex items-center min-h-screen">
            <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
                <div className="w-full text-[#082B21] py-[172px]">
                    <h2 className={`${libre.className} text-white text-[40px] font-semibold  mb-[24.45px]`}>RSVP</h2>
                    <p className={`${ibm.className} font-light text-white text-[18px] leading-[25px] max-w-2xl text-justify mb-[40.84px]`}>We kindly request your prompt response to confirm your attendance at our upcoming event. Alongside your RSVP, please take a moment to extend your warm regards and best wishes.</p>

                    <form onSubmit={handleSubmit} className="w-full max-w-[520px] text-white">
                        <div className="mb-[16.16px]">
                            <label className={`${khula.className} block text-sm mb-1 text-[18px] text-white font-normal`}>NAME</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange}  placeholder="Guest Name" className={`${khula.className}  text-[16px] font-normal w-full bg-transparent border border-white/40 px-4 py-2 placeholder:text-[#625F5F] focus:outline-none focus:border-white transition`} />
                        </div>
                        <div className="mb-[16.16px]">
                            <label className={`${khula.className} block text-sm mb-1 text-[18px] text-white font-normal`}>ATTENDANCE</label>
                            <div className="flex gap-4">
                                <button type="button" onClick={() => handleAttendance("attend")} className={`flex-1 border py-2 transition ${formData.attendance === "attend" ? "bg-white text-black border-white" : "border-white/40" }`}>EXCITED TO ATTEND</button>
                                <button type="button" onClick={() => handleAttendance("not_attend")} className={`flex-1 border py-2 transition ${formData.attendance === "not_attend" ? "bg-white text-black border-white " : "border-white/40" }`}>UNABLE TO ATTEND</button>
                            </div>
                        </div>
                        <div className="mb-[16.16px]">
                            <label className={`${khula.className} block text-sm mb-1 text-[18px] text-white font-normal`}>NO OF GUEST (MAX 2)</label>
                            <input type="number" name="guests" min="1" max="2" value={formData.guests} onChange={handleChange} className="w-full bg-transparent border border-white/40 px-4 py-2 text-white focus:outline-none focus:border-white transition" />
                        </div>
                        <div className="mb-[30px]">
                            <label className={`${khula.className} block text-sm mb-1 text-[18px] text-white font-normal`}>WISHES</label>
                            <textarea name="wishes" rows={4} value={formData.wishes} onChange={handleChange} className="w-full bg-transparent border border-white/40 px-4 py-2 text-white focus:outline-none focus:border-white transition"></textarea>
                        </div>
                        <button type="submit" disabled={loading} className={`${khula.className} font-bold text-[16px] bg-[#082B21]/71 px-14 py-2 text-white hover:opacity-80 transition`}>{loading ? "SENDING..." : "SEND"}</button>
                    </form>
                </div>
            </div>
        </div>

        {success && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                <div className="bg-white p-8 rounded-lg text-center max-w-sm">
                    <h3 className="text-xl font-semibold mb-4">Thank You!</h3>
                    <p className="mb-6">Your RSVP has been successfully sent.</p>
                    <button onClick={() => setSuccess(false)} className="bg-[#082B21] text-white px-6 py-2">Close</button>
                </div> 
            </div>
        )}
    </section>
  )
}

export default RsvSection