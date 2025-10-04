import { Container } from "@/components/container";
import { Text } from "@/components/text";
import React from "react";
import { CompanyLogo } from "./components/company-logo";

export default function ArticlesPage() {
  return (
    <div className="flex flex-col gap-4 md:gap-24">
      <Container className="pt-16 md:pt-26 md:px-5 lg:px-8 xl:px-10">
        <h1 className="max-w-screen-lg text-[2rem] leading-[2.375rem] font-bold mb-4 md:text-[4rem] md:leading-[4.5rem]">
          I solve complex problems for industry-leading companies around the
          world.
        </h1>

        <div>
          <Text>
            One of my greatest strengths is collaborating with product teams
            from the industry&apos;s biggest companies to include their features
            and services into the products I create. Here are some examples of
            companies I&apos;ve collaborated with!
          </Text>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4 mt-8 md:text-xl">
            Featured companies
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <CompanyLogo />
            <CompanyLogo />
            <CompanyLogo />
            <CompanyLogo />
            <CompanyLogo />
            <CompanyLogo />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 mt-8">All articles</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">...</div>
        </div>
      </Container>
    </div>
  );
}
