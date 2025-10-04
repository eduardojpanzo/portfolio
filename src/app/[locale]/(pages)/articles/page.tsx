import { Container } from "@/components/container";
import { Text } from "@/components/text";
import React from "react";
import { BlogCard } from "./components/blog-card";

export default function ArticlesPage() {
  return (
    <div className="flex flex-col gap-4 md:gap-24">
      <Container className="pt-16 md:pt-26 md:px-5 lg:px-8 xl:px-10">
        <h1 className="max-w-screen-lg text-[2rem] leading-[2.375rem] font-bold mb-4 md:text-[4rem] md:leading-[4.5rem]">
          Writing about software development, frontend, and mobile experiences.
        </h1>

        <div>
          <Text>
            Here you can find all the 42 articles I wrote. You can read about
            web development, software engineering, and tech career in
            Portuguese. Do you want to receive a notification every time I make
            a new post? Subscribe here!
          </Text>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4 mt-8 md:text-xl">
            Featured articles
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <BlogCard />
            <BlogCard />
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
