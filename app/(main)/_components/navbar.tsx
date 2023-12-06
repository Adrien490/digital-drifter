"use client";
import { Logo } from "@/components/logo";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  InfoCircledIcon,
  QuestionMarkCircledIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="w-full px-4 h-[64px] border-b">
      <div className="h-full flex justify-between items-center">
        <Logo />
        <div className="flex gap-4 items-center">
          <Link href="">
            <Button className="border-b" variant="ghost">
              <QuestionMarkCircledIcon />
              <span className="ml-2 text-[11px]">Help center</span>
            </Button>
          </Link>
          <Link href="">
            <Button className="border-b" variant="ghost">
              <InfoCircledIcon />
              <span className="ml-2 text-[11px]">Learning mode</span>
            </Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};
