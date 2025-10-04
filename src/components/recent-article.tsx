import React from "react";
import { Badge } from "./ui/badge";
import { ArrowRight } from "lucide-react";

export function RecentArticle() {
  return (
    <div className="flex justify-between gap-2 items-center p-1.5 px-2.5 rounded-full mb-4 bg-muted/90 transition-all ease-in-out cursor-pointer hover:pr-4 hover:bg-muted/60 group">
      <Badge className="bg-primary/20 text-primary rounded-full cursor-pointer group-hover:bg-primary/10 text-xs group-hover:text-primary/80">
        new article
      </Badge>
      <p className="flex gap-2 items-center">
        <span className="text-sm">Read Now</span>{" "}
        <ArrowRight className="w-[1.5cap] transition-all group-hover:translate-x-1" />
      </p>
    </div>
  );
}
