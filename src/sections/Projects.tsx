import Image from "next/image";
import Link from "next/link";
import { FaEye, FaGithub } from "react-icons/fa";
import { SectionContainer } from "../components/SectionContsiner";
import { Title } from "../components/Title";
import { projectItems } from "../mock";

export function Projects() {
  return (
    <SectionContainer>
      <Title name="Projects" />

      <div className="flex items-center justify-center flex-wrap gap-3 mt-8 transition-all">
        {projectItems.map(({ name, cover, desc, url }) => (
          <div
            key={name}
            className="w-72 h-72 bg-slate-800 flex flex-col border border-transparent rounded-3xl my-2 overflow-hidden dark:border-slate-50"
          >
            <div className="max-h-[50%] overflow-hidden">
              <Image
                className="w-full min-w-full"
                src={cover}
                alt="academy"
                width={230}
                height={220}
              />
            </div>
            <div className="flex flex-col justify-between p-4 flex-1 text-slate-50">
              <div className="text-left">
                <h3 className="mb-1">{name}</h3>
                <p className="text-sm leading-4 ">{desc}</p>
              </div>

              <div className="flex gap-2 justify-center">
                <Link
                  className={`py-2 px-3 text-xl rounded-md bg-gray-600 hover:ring-2 hover:ring-gray-300`}
                  href={url}
                >
                  <FaEye />
                </Link>

                <Link
                  className={`py-2 px-3 text-xl rounded-md bg-gray-600 hover:ring-2 hover:ring-gray-300`}
                  href={url}
                >
                  <FaGithub />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
