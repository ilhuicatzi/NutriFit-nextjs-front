import type { Metadata } from "next";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import SesionProvider from "@/contexts/SessionProvider";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Project",
  description:
    "Template from Vercel with Next.js, TypeScript, Tailwind CSS, ESLint, Prettier, and NextAuth.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SesionProvider>
            <Navbar />
            {children}
          </SesionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
