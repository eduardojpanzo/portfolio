import { Text } from "@/components/text";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  reverse?: boolean;
};

export function ProjectCard({ reverse }: Props) {
  return (
    <Card className="bg-transparent border-none transition-all ease-in-out hover:bg-accent/30 cursor-pointer">
      <CardContent
        className={clsx(
          "flex flex-col gap-6 px-4 lg:flex-row lg:items-center lg:gap-8",
          {
            "lg:flex-row-reverse": reverse,
          }
        )}
      >
        <div className="min-h-40 aspect-video bg-gray-500 rounded-md mt-4 sm:min-h-80 "></div>
        <div>
          <div className="flex items-center justify-between">
            <h5 className="font-bold text-2xl leading-7">Passive</h5>

            <Badge className=" rounded-full bg-primary/90 text-white/90 hover:bg-primary/90 dark:bg-primary/40 dark:text-black">
              <span className="text-xs">Current</span>
            </Badge>
          </div>

          <Text>
            Made at
            <Link
              href={""}
              className="transition-all ease-linear hover:text-primary"
            >
              Stone & Co.
            </Link>
          </Text>

          <Text className="text-sm leading-7 mt-4">
            Ton is a payment solution by Stone aimed at micro and small
            entrepreneurs. With a focus on accessibility and convenience, Ton
            offers card machines and a digital platform that enable these
            businesses to receive payments quickly and securely, whether through
            credit cards, debit cards, or Pix. Additionally, Ton provides a
            range of financial features, such as receivables anticipation and
            sales management, all in an intuitive and hassle-free environment.
          </Text>

          <div className="mt-2">
            <Badge className=" rounded-full bg-primary/80 border border-primary text-white/90 hover:bg-primary/80 dark:bg-primary/30 dark:text-black dark:hover:bg-primary/40">
              <span className="text-xs">React</span>
            </Badge>
          </div>

          <div className="flex items-center gap-1 mt-4">
            <Link
              href={""}
              className="flex items-center gap-1.5 transition-all hover:text-primary"
            >
              Read the case <ArrowRight className="w-[1.5cap]" />
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
