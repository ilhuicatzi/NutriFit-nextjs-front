import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { LayoutGrid, User } from "lucide-react";
import { Github } from "@/assets/icons/Github";
import { signOut } from "next-auth/react";
import Link from "next/link";

interface ButtonProfileProps {
  user:
    | {
        id: string;
        email: string;
        firstName: string;
        lastName: string;
      }
    | undefined;
}

export function ButtonProfile({ user }: ButtonProfileProps) {
  if (!user) return null;

  const { email, firstName, lastName } = user;
  const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="ring-1 ring-transparent hover:ring-foreground cursor-pointer">
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="text-sm">
          {firstName} {lastName}
          <br />
          <span className="text-muted-foreground text-xs font-mono">
            {email}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link
            href="https://github.com/ilhuicatzi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Github className="w-5 h-5" /> <span>GitHub</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
            <Link
                href="/project"
                className="flex items-center gap-2"
            >
                <LayoutGrid className="w-5 h-5" /> <span>Projects</span>
            </Link>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
            <Link href="#" className="flex items-center gap-2">
                <User className="w-5 h-5" /> <span>Profile</span>
            </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="hover:bg-destructive cursor-pointer"
          onClick={() => {
            signOut();
          }}
        >
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
