import { ibm } from "@/lib/fonts";

const Header = () => {
  return (
    <header className="absolute top-10 left-0 w-full z-20">
        <nav className={`${ibm.className} flex justify-center items-center gap-8.75 py-8 uppercase tracking-widest font-medium text-[22px] text-[#082B21]`}>
              <a href="">Home</a>
              <a href="">Profile</a>
              <a href="">Love Story</a>
              <a href="">Wedding Event</a>
              <a href="">Rsvp</a>
              <a href="">Wedding Gift</a>
              <a href="">Gallery</a>
        </nav>
    </header>
  )
}

export default Header