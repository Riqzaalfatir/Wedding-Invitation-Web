import { IBM_Plex_Sans, Libre_Bodoni, Lobster, Khula } from "next/font/google";

export const ibm = IBM_Plex_Sans({
  weight: [ "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const libre = Libre_Bodoni({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const lobster = Lobster({
  subsets: ["latin"],
  weight: ["400"],
});

export const khula = Khula({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});