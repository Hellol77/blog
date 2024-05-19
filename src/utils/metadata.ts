import { webUrl, siteName } from "@/constants/metadata";
import { Metadata } from "next";

interface MetadataProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  label1?: {
    name: string;
    data: string | number;
  };
  label2?: {
    name: string;
    data: string | number;
  };
}

const defaultImage = `/mainImage.png`;

export default function metadata(props: MetadataProps): Metadata {
  const { title, description: desc, path, image, label1, label2 } = props;
  const description = desc + " | 헬롤의 블로그";

  const images = webUrl + (image ?? defaultImage);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: webUrl + path,
      siteName,
      images,
      locale: "ko_KR",
    },
  };
}
