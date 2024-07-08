import GithubIcon from "@/components/icon/GithubIcon";
import LinkIcon from "@/components/icon/LinkIcon";
import { ProjectType } from "@/types/projects";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectCardProps extends Partial<ProjectType> {}

export default function ProjectCard({
  title,
  description,
  github,
  link,
  image,
}: ProjectCardProps) {
  return (
    <section className="rounded-md border-1 p-4">
      <div className="flex items-start justify-between gap-1 ">
        <h2 className=" mb-1 w-full text-lg font-semibold">{title}</h2>
        {github ? (
          <Link target="_blank" href={github}>
            <GithubIcon />
          </Link>
        ) : null}
        {link ? (
          <Link target="_blank" href={link}>
            <LinkIcon />
          </Link>
        ) : null}
      </div>
      <p className=" text-sm text-subText">{description}</p>
      <div className="mt-4 flex justify-center">
        <Image
          className=" rounded-md"
          alt="project"
          src={image!!}
          width={150}
          height={150}
        />
      </div>
    </section>
  );
}
