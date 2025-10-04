import { Text } from "@/components/text";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";
import React from "react";

export function BlogCard() {
  return (
    <Card className="max-w-3xl border-none bg-transparent transition-all ease-in-out hover:bg-accent/30 cursor-pointer">
      <CardContent className="flex flex-col gap-6 px-4">
        <div className="min-h-40 aspect-video bg-gray-500 rounded-md mt-4 sm:min-h-80 "></div>
        <div>
          <h5 className="font-bold text-2xl leading-7">
            Passive View: Simplificando a separação entre lógica e interface no
            desenvolvimento de interfaces
          </h5>
          <div className="mt-2">
            <Badge className=" rounded-full bg-primary/90 text-white/90 hover:bg-primary/90 dark:bg-primary/40 dark:text-black">
              <span className="text-xs">New article</span>
            </Badge>
          </div>
          <Text className="text-sm leading-7 mt-4">
            No desenvolvimento de software, uma das maiores dificuldades é
            manter a interface do usuário (UI) desacoplada da lógica de
            negócios. Quando esses dois aspectos estão misturados, o código pode
            se....
          </Text>

          <div className="flex items-center gap-1 mt-4 text-gray-500">
            <Clock /> <span className="text-pretty text-sm">4 min read</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
