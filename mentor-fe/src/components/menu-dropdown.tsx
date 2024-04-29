"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import axios from "axios";
import { BASE_URL } from "../../config";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ModeToggle } from "@/components/theme-switch";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  Keyboard,
  Newspaper,
  Users,
  CalendarClock,
  CircleUser,
  LogOut,
  Github,
  MessageCircleQuestion,
  ShieldHalf,
} from "lucide-react";
import Link from "next/link";

export function Dropdown_Menu() {
  const router = useRouter();

  async function handle_logout() {
    const url = `${BASE_URL}/auth/logout`;
    try {
      const response = await axios({
        method: "POST",
        url,
      });
      if (!response.data.error) {
        toast.info("You are logged out!");
        localStorage?.setItem("isLoggedIn", "false");
        localStorage?.removeItem("user_id");
        router.push("/login");
      }
    } catch (error: any) {
      toast.error(`${error.response.data.message}`);
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <HamburgerMenuIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <div>
          <ModeToggle />
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/me">
            <DropdownMenuItem>
              {" "}
              <CircleUser size={16} /> &nbsp; My Profile
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/events">
            <DropdownMenuItem>
              <CalendarClock size={16} /> &nbsp; Events
            </DropdownMenuItem>
          </Link>
          <Link href="/mentors">
            <DropdownMenuItem>
              <Users size={16} /> &nbsp; Mentors
            </DropdownMenuItem>
          </Link>
          <Link href="/playground">
            <DropdownMenuItem>
              <Keyboard size={16} /> &nbsp; Playground
            </DropdownMenuItem>
          </Link>
          <Link href="/resources">
            <DropdownMenuItem>
              <Newspaper size={16} /> &nbsp; Resources
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          {" "}
          <ShieldHalf size={16} /> &nbsp; Team
        </DropdownMenuItem>
        <a target="__blank" href="https://github.com/powrhouseofthecell">
          <DropdownMenuItem>
            <Github size={16} /> &nbsp; GitHub
          </DropdownMenuItem>
        </a>
        <Link href={"/faqs"}>
          <DropdownMenuItem>
            {" "}
            <MessageCircleQuestion size={16} /> &nbsp; FAQs
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handle_logout}>
          {" "}
          <LogOut size={16} /> &nbsp; Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
