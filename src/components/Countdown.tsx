"use client"

import { useEffect, useState } from "react"
import { ibm } from "@/lib/fonts"

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const EVENT_DATE = {
  year: 2026,
  month: 3,
  day: 1,
  hour: 0,
  minute: 0,
}

const targetDate = new Date(
  EVENT_DATE.year,
  EVENT_DATE.month - 1,
  EVENT_DATE.day,
  EVENT_DATE.hour,
  EVENT_DATE.minute
)

const calculateTimeLeft = (): TimeLeft => {
  const difference = +targetDate - +new Date()

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      const time = calculateTimeLeft()
      setTimeLeft(time)

      if (
        time.days === 0 &&
        time.hours === 0 &&
        time.minutes === 0 &&
        time.seconds === 0
      ) {
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const items = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ]

  return (
    <div
      className={`flex justify-center 
      gap-6 sm:gap-10 lg:gap-[88.03px] 
      text-[#082B21] ${ibm.className}`}
    >
      {items.map((item) => (
        <div key={item.label} className="text-center">

          {/* ANGKA */}
          <p
            className="
            text-[41px] sm:text-[55px] lg:text-[72px]
            font-bold
            leading-tight lg:leading-[59.87px]
          "
          >
            {String(item.value).padStart(2, "0")}
          </p>

          {/* LABEL */}
          <p
            className="
            text-[17px] sm:text-[19px] lg:text-[19.42px]
            font-medium
            mt-1 sm:mt-2
          "
          >
            {item.label}
          </p>

        </div>
      ))}
    </div>
  )
}

export default Countdown