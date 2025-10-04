import { Container } from "@/components/container";
import { Text } from "@/components/text";
import React from "react";
import { ProjectCard } from "./components/project-card";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-4 md:gap-24">
      <Container className="pt-16 md:pt-26 md:px-10">
        <h1 className="max-w-screen-lg text-[2rem] leading-[2.375rem] font-bold mb-4 md:text-[4rem] md:leading-[4.5rem]">
          Creating powerful products that are utilized by millions of people
          every day.
        </h1>

        <div>
          <Text>
            Over the years, I have created amazing and valuable experiences that
            leave a positive impact on people and businesses. Here you can
            navigate to different websites, apps, and libraries I built, which
            are used by millions of people every day. Some projects are still
            active, some have been discontinued, and others are not listed here
            due to contractual reasons.
          </Text>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 mt-8">Featured projects</h2>
          <div className="flex flex-col gap-10">
            <ProjectCard />
            <ProjectCard reverse />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 mt-8">All projects</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">...</div>
        </div>
      </Container>
    </div>
  );
}
