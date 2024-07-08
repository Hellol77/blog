import { StaticImageData } from "next/image";

export interface ProjectType {
  title: string;
  description: string;
  github: string;
  link: string;
  image: StaticImageData;
}
