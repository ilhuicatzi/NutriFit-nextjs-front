"use client";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { ButtonDarkMode } from "./ButtonDarkMode";
import CollapseButton from "./CollapseButton";
import { useSession } from "next-auth/react";
import { ButtonProfile } from "./ButtonProfile";

function Navbar() {
  const { status, data } = useSession();
  const user = data?.user;
  
  return (
    <nav className="px-3 md:px-10 py-2 ">
      <section>
        <div className="flex justify-between md:hidden">
          <CollapseButton status={status} user={user}  />

          <ButtonDarkMode />
        </div>
        <div className="hidden md:flex justify-between items-center ">
          <Link
            href={status === "authenticated" ? "/project" : "/"}
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
          <div className="flex items-center gap-3">
            <ul className="flex items-center gap-2">
              {status === "authenticated" ? (
                <>
                  <li>
                    <ButtonProfile user={user} />
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link href="/auth/register">
                      <Button variant="ghost">Register</Button>
                    </Link>
                  </li>
                  <li>
                    <Link href="/auth/login">
                      <Button variant="ghost">Login</Button>
                    </Link>
                  </li>
                </>
              )}
            </ul>

            <ButtonDarkMode />
          </div>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
