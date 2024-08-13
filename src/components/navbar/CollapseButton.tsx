import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Menu, LayoutGrid, LogOut, User } from "lucide-react";
import { Github } from "@/assets/icons/Github";
import { signOut } from "next-auth/react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet";

interface CollapseButtonProps {
  status: string;
  user:
    | {
        id: string;
        email: string;
        firstName: string;
        lastName: string;
      }
    | undefined;
}

function CollapseButton({ status, user }: CollapseButtonProps) {
  const { email, firstName, lastName } = user || {};

  return (
    <Sheet>
      <SheetTrigger asChild aria-describedby="menu">
        <Button variant="outline" className="px-2">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        {status === "authenticated" ? (
          <SheetHeader>
            <div className="flex justify-center items-center flex-col">
              <SheetTitle>
                {firstName} {lastName}{" "}
              </SheetTitle>
              <SheetDescription>
                <span className="text-muted-foreground text-xs ">{email}</span>
              </SheetDescription>
            </div>
          </SheetHeader>
        ) : (
          <SheetHeader>
            <SheetTitle>
              <figure className="grid place-items-center">
                <SheetClose asChild>
                  <Link
                    href="/"
                    className="object-cover p-1.5 rounded-full hover:bg-muted dark:bg-zinc-300 dark:hover:bg-zinc-500 "
                  >
                    <Image
                      src="/img/logo.png"
                      alt="Logo"
                      width="40"
                      height="40"
                      className="cursor-pointer w-9 h-9"
                    />
                  </Link>
                </SheetClose>
              </figure>
            </SheetTitle>
          </SheetHeader>
        )}

        <ul className="flex flex-col gap-2 mt-5">
          {status === "authenticated" ? (
            <>
              <li>
                <SheetClose asChild className="w-full flex">
                  <Link
                    href="/project"
                    className="w-full px-5 py-1 hover:bg-muted rounded-md flex items-center gap-2"
                  >
                    <LayoutGrid className="w-5 h-5" /> Projects
                  </Link>
                </SheetClose>
              </li>
              <li>
                <SheetClose asChild className="w-full flex">
                  <Link
                    href="/project"
                    className="w-full px-5 py-1 hover:bg-muted rounded-md flex items-center gap-2"
                  >
                    <User className="w-5 h-5" /> Profile
                  </Link>
                </SheetClose>
              </li>

              <li>
                <SheetClose asChild className="w-full flex">
                  <Link
                    href="https://github.com/ilhuicatzi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-5 py-1 hover:bg-muted rounded-md flex items-center gap-2"
                  >
                    <Github className="w-5 h-5" /> GitHub
                  </Link>
                </SheetClose>
              </li>
              <li>
                <SheetClose asChild className="w-full flex">
                  <button
                    onClick={() => signOut()}
                    className="w-full px-5 py-1 hover:bg-muted rounded-md flex items-center gap-2 hover:text-destructive"
                  >
                    <LogOut className="w-5 h-5" /> Log out
                  </button>
                </SheetClose>
              </li>
            </>
          ) : (
            <>
              <li>
                <SheetClose asChild className="w-full flex">
                  <Link
                    href="/auth/register"
                    className="w-full px-5 py-1 hover:bg-muted rounded-md flex items-center gap-2"
                  >
                    Register
                  </Link>
                </SheetClose>
              </li>
              <li>
                <SheetClose asChild className="w-full flex">
                  <Link
                    href="/auth/login"
                    className="w-full px-5 py-1 hover:bg-muted rounded-md flex items-center gap-2"
                  >
                    Login
                  </Link>
                </SheetClose>
              </li>
            </>
          )}
        </ul>
      </SheetContent>
    </Sheet>
  );
}

export default CollapseButton;
