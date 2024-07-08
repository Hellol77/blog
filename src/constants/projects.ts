import WaggleImage from "../../public/projects/waggle.png";
import RotorageImage from "../../public/projects/rotorage.png";
import TataroImage from "../../public/projects/tataro.png";
import { ProjectType } from "@/types/projects";

const PROJECTS: Partial<ProjectType>[] = [
  {
    title: "Waggle(개발중)",
    description: "반려견에 대한 모든 것을 공유하고 소통하는 공간 🐾",
    github: "https://github.com/teamWaggle/Waggle-front",
    link: "https://waggle-pet.com/",
    image: WaggleImage,
  },
  {
    title: "Rotorage",
    description: "한로로 팬페이지",
    github: "https://github.com/Hellol77/rotorage",
    link: "https://www.rotorage.site/",
    image: RotorageImage,
  },
  {
    title: "타로보는 타타로",
    description: "ChatGPT 기반 타로점 서비스",
    link: "https://tataro.net/",
    image: TataroImage,
  },
];

export default PROJECTS;
