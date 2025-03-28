import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LayoutGrid } from "lucide-react";

export default function NavGridLinks() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="p-2 rounded-md bg-background md:hidden ">
        <LayoutGrid className="h-6 w-6" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 grid grid-cols-2 gap-2">
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
