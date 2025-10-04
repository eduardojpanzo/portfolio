import { Container } from "@/components/container";
import { Text } from "@/components/text";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-4 md:gap-24">
      <Container className="pt-16 md:pt-26 md:px-10">
        <h1 className="max-w-screen-lg text-[2rem] leading-[2.375rem] font-bold mb-4 md:text-[4rem] md:leading-[4.5rem]">
          My mission is to push the world forward by creating a bridge between
          people and technology.
        </h1>

        <div>
          <Text>
            My name is Vinnicius Gomes, a software engineer passionate about
            traveling, photography, finances, mountain biker, and reading.
            I&apos;m 26 years old, married, and based in São José dos Campos,
            São Paulo.
          </Text>

          <Text>
            I started in the developing world in 2012, learning to program by
            researching the internet. At only 12 years old, I developed my first
            website, since then, I never stopped. In 2017, I started my
            bachelor&apos;s degree in computer science, and I fell in love even
            more with the area. I&apos;ve been dedicating myself every day to
            contribute to the community by sharing my knowledge through
            articles.
          </Text>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 mt-8">Career</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2">
            {[""].map((item) => (
              <article key={item} className="mb-8">
                <h3 className="font-semibold">Vaawel (Sep 2024 - Current)</h3>
                <Text className="italic">Senior Software Engineer</Text>
                <Link className="flex items-center  gap-1 text-sm" href={"/"}>
                  vaawel.com <ArrowRight className="w-[1.5cap]" />
                </Link>
              </article>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 mt-8">
            What people say about me
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <section className="flex flex-col gap-8">
              {[""].map((item) => (
                <div key={item} className="mb-8">
                  <Text>
                    I worked with Vinnicius in two companies that I founded
                    (Zappts & Coren), and I always appreciated him as both a
                    professional and a great person. Vinnicius is extremely
                    committed to everything he does, driven by the highest
                    ethical standards, excels in teamwork, and understands how
                    to meet the needs of customers, partners, and stakeholders.
                    He possesses great technical knowledge and skills. For these
                    reasons and many more, I highly recommend him!
                  </Text>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-300" />
                    <div className="flex flex-col gap-0">
                      <Link
                        className="flex items-center gap-1 text-sm"
                        href={"https://www.linkedin.com/in/demeck/"}
                      >
                        De Meck
                      </Link>
                      <p className="text-xs italic">CTO at Vaawel</p>
                    </div>
                  </div>
                </div>
              ))}
            </section>

            <section className="flex flex-col gap-8">
              {[""].map((item) => (
                <div key={item} className="mb-8">
                  <Text>
                    I worked with Vinnicius in two companies that I founded
                    (Zappts & Coren), and I always appreciated him as both a
                    professional and a great person. Vinnicius is extremely
                    committed to everything he does, driven by the highest
                    ethical standards, excels in teamwork, and understands how
                    to meet the needs of customers, partners, and stakeholders.
                    He possesses great technical knowledge and skills. For these
                    reasons and many more, I highly recommend him!
                  </Text>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-300" />
                    <div className="flex flex-col gap-0">
                      <Link
                        className="flex items-center gap-1 text-sm"
                        href={"https://www.linkedin.com/in/demeck/"}
                      >
                        De Meck
                      </Link>
                      <p className="text-xs italic">CTO at Vaawel</p>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
