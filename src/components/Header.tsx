import { ibm } from "@/lib/fonts";

const Header = () => {
  return (
    <header className="absolute top-6 left-0 w-full z-20 hidden md:block lg:block pt-10">
      <nav
      data-aos="fade-up"
        className={`${ibm.className} 
        flex justify-center items-center px-4 
        gap-10 py-6 uppercase tracking-widest 
        font-bold lg:font-medium text-[22px] md:text-[12px] lg:text-[22px] text-[#082B21]`}
      >
        <a href="#home">Home</a>
        <a href="#profile">Profile</a>
        <a href="#story">Love Story</a>
        <a href="#event">Wedding Event</a>
        <a href="#rsvp">Rsvp</a>
        <a href="#gift">Wedding Gift</a>
        <a href="#gallery">Gallery</a>
      </nav>
    </header>
  );
};

export default Header;