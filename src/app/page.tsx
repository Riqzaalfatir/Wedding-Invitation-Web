"use client"

import { useEffect, useState } from "react"
import Opening from "@/components/Opening"

import Header from '@/components/Header'
import HeroSection from '@/sections/invitation/HeroSection'
import ProfileSection from '@/sections/invitation/ProfileSection'
import LoveStorySection from '@/sections/invitation/LoveStorySection'
import WeddingEvent from '@/sections/invitation/WeddingEvent'
import AlmostSection from '@/sections/invitation/AlmostSection'
import RsvSection from '@/sections/invitation/RsvSection'
import ComentSection from '@/sections/invitation/ComentSection'
import GallerySection from '@/sections/invitation/GallerySection'
import WeddingGiftSection from '@/sections/invitation/WeddingGiftSection'
import ThankYouSection from '@/sections/invitation/ThankYouSection'

export default function Page() {
  const [mounted, setMounted] = useState(false)
  const [opened, setOpened] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="relative overflow-x-hidden">

      {/* Content */}
      <div
        className={`
          transition-opacity duration-700
          ${opened ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      >
        <Header />
        <HeroSection />
        <ProfileSection />
        <LoveStorySection />
        <WeddingEvent />
        <AlmostSection />
        <RsvSection />
        <ComentSection />
        <GallerySection />
        <WeddingGiftSection />
        <ThankYouSection />
      </div>

      {/* Opening Overlay */}
      <Opening opened={opened} onOpen={() => setOpened(true)} />

    </main>
  )
}