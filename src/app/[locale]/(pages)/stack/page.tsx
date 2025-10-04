import { Container } from "@/components/container";
import { Text } from "@/components/text";
import React from "react";
import { StackLogo } from "./components/stack-logo";

export default function StacksPage() {
  return (
    <div className="flex flex-col gap-4 md:gap-24">
      <Container className="pt-16 md:pt-26 md:px-10">
        <h1 className="max-w-screen-lg text-[2rem] leading-[2.375rem] font-bold mb-4 md:text-[4rem] md:leading-[4.5rem]">
          Stack
        </h1>

        <div>
          <Text>
            I often receive many messages asking about the software, tools,
            languages and services I use in my daily life. So I decided to list
            everything in one place.
          </Text>
        </div>

        <div className="grid grid-cols-1 gap-4 mt-20 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-8 lg:grid-cols-4 lg:gap-10">
          <StackLogo />
          <StackLogo />
          <StackLogo />
          <StackLogo />
          <StackLogo />
          <StackLogo />
        </div>
      </Container>
    </div>
  );
}
