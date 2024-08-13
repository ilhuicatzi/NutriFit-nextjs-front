import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { ButtonDarkMode } from "./ButtonDarkMode";
import CollapseButton from "./CollapseButton";

function Navbar() {
  return (
    <nav className="px-3 md:px-10 py-2 ">
      <section>
        <div className="flex justify-between md:hidden">
          <CollapseButton />

          <ButtonDarkMode />
        </div>
        <div className="hidden md:flex justify-between items-center ">
          <Link href="/" className="object-cover p-2 rounded-full hover:bg-muted">
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
              <li>
                <Link href="/project">
                  <Button variant="ghost">Project</Button>
                </Link>
              </li>
            </ul>

            <ButtonDarkMode />
          </div>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
