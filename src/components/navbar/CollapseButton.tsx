import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function CollapseButton() {
  return (
    <Sheet>
      <SheetTrigger asChild aria-describedby="menu">
        <Button variant="outline" className="px-2">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
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

        <ul className="flex flex-col gap-2 mt-5">
          <li>
            <SheetClose asChild className="w-full flex">
              <Link
                href="/auth/register"
                className="w-full px-5 py-1 hover:bg-muted rounded-md"
              >
                Register
              </Link>
            </SheetClose>
          </li>
          <li>
            <SheetClose asChild className="w-full flex">
              <Link
                href="/auth/login"
                className="w-full px-5 py-1 hover:bg-muted rounded-md"
              >
                Login
              </Link>
            </SheetClose>
          </li>
          <li>
            <SheetClose asChild className="w-full flex">
              <Link
                href="/project"
                className="w-full px-5 py-1 hover:bg-muted rounded-md"
              >
                Project
              </Link>
            </SheetClose>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}

export default CollapseButton;
