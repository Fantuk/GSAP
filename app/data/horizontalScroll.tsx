import { StaticImageData } from "next/image";
import Img1 from "@/public/img-1.jpg";
import Img2 from "@/public/img-2.jpg";
import Img3 from "@/public/img-3.jpg";
import Img4 from "@/public/img-4.jpg";
import Img5 from "@/public/img-5.jpg";
import Img6 from "@/public/img-6.jpg";
import Img7 from "@/public/img-7.jpg";
import Img8 from "@/public/img-8.jpg";
import Img9 from "@/public/img-9.jpg";
import Img10 from "@/public/img-10.jpg";

interface IImage {
  image: StaticImageData;
  alt: string;
}

export const images: IImage[] = [
  {
    image: Img1,
    alt: "Image 1",
  },
  {
    image: Img2,
    alt: "Image 2",
  },
  {
    image: Img3,
    alt: "Image 3",
  },
  {
    image: Img4,
    alt: "Image 4",
  },
  {
    image: Img5,
    alt: "Image 5",
  },
  {
    image: Img6,
    alt: "Image 6",
  },
  {
    image: Img7,
    alt: "Image 7",
  },
  {
    image: Img8,
    alt: "Image 8",
  },
  {
    image: Img9,
    alt: "Image 9",
  },
  {
    image: Img10,
    alt: "Image 10",
  },
];
