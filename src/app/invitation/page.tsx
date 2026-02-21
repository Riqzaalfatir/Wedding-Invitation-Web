import Header from '@/components/Header'
import HeroSection from '@/sections/invitation/HeroSection'
import ProfileSection from '@/sections/invitation/ProfileSection'
import LoveStorySection from '@/sections/invitation/LoveStorySection'
import WeddingEvent from '@/sections/invitation/WeddingEvent'
import AlmostSection from '@/sections/invitation/AlmostSection'
import RsvSection from '@/sections/invitation/RsvSection'

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
    </>
  )
}

export default page