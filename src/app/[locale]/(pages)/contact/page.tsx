import { Container } from "@/components/container";
import { Text } from "@/components/text";
import React from "react";
import { ContactForm } from "./components/form";

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-4 md:gap-24">
      <Container className="pt-16 md:pt-26 md:px-10">
        <h1 className="max-w-screen-lg text-[2rem] leading-[2.375rem] font-bold mb-4 md:text-[4rem] md:leading-[4.5rem]">
          Let&apos;s connect!
        </h1>

        <div>
          <Text>
            If you&apos;d like to chat about building product, development,
            consulting or design do get in touch at hi@vinniciusgomes.dev or
            reach out to me on LinkedIn @vinniciusgomes.
          </Text>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 mt-8">Send an email</h2>

          <div className="mt-10 max-w-screen-sm">
            <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
