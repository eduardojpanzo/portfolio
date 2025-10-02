import { Container } from "@/components/container";
import { Networking } from "@/components/networking";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RecentArticle } from "@/components/recent-article";
import Image from "next/image";
import { Text } from "@/components/text";

interface Props {
  params: { locale: string };
  searchParams: { tab: string };
}

export default function Home(props: Props) {
  console.log(props);

  return (
    <main>
      <Container className="grid grid-cols-1 md:grid-cols-[minmax(288px,320px)_minmax(0,1fr)]">
        <aside className="flex flex-col items-center gap-4 pt-10 pb-20">
          <div className="w-40 h-40 mx-auto rounded-full shadow-lg overflow-hidden">
            <Image width={200} height={200} src={"/profil.png"} alt="" />
          </div>

          <RecentArticle />
          <Networking />
          <div className="flex flex-col items-center gap-5 mt-4">
            <Button className="">Read more about me</Button>

            <Link href={"/articles"}>Read some articles</Link>
          </div>
        </aside>

        <section className="pb-20 px-4 flex flex-col gap-6 md:pt-28">
          <div>
            <h1 className="text-[2rem] leading-[2.375rem] font-bold mb-4 md:text-[4rem] md:leading-[4.5rem]">
              {" "}
              I&apos;m Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
          </div>

          <div>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
              itaque labore sequi fugiat quibusdam reprehenderit magni aliquid
              maxime sapiente pariatur.
            </Text>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
              itaque labore sequi fugiat quibusdam reprehenderit magni aliquid
              maxime sapiente pariatur.
            </Text>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
              itaque labore sequi fugiat quibusdam reprehenderit magni aliquid
              maxime sapiente pariatur.
            </Text>
          </div>
        </section>
      </Container>
    </main>
  );
}
