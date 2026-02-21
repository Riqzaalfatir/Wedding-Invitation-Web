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

const page = () => {
  return (
    <>
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
    </>
  )
}

export default page