"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { BriefcaseBusiness } from "lucide-react";
import { getSession } from "@/lib/auth/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import SignOutButton from "./sign-out-btn";
import { useSession } from "@/lib/auth/auth-client";

export default function Navbar() {
  const { data: session } = useSession();
  return (
    <nav className="border-b">
      <div className="container mx-auto flex h-16 items-center px-4 justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-semibold text-primary"
        >
          <BriefcaseBusiness />
          Job Tracker
        </Link>
        <div className="flex items-center gap-4">
          {session?.user ? (
            <>
              <Button
                asChild
                className="cursor-pointer text-black hover:text-primary/90 hover:bg-black border-2 border-transparent hover:border-white transition-all"
              >
                <Link href="/dashboard">Dashboard</Link>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="cursor-pointer relative h-8 w-8 rounded-full"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-cyan-300 text-black">
                        {session.user.name[0].toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-56 bg-black" align="end">
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {session.user.name}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {session.user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>

                  <SignOutButton />
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Button
                asChild
                variant="ghost"
                className="text-zinc-400 hover:text-white transition-all"
              >
                <Link href="/sign-in">Log In</Link>
              </Button>
              <Button
                asChild
                className="text-black hover:text-primary/90 hover:bg-black border-2 border-transparent hover:border-white transition-all"
              >
                <Link href="/sign-up">Start for free</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
