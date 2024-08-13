import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { string } from "zod";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
          
          name: 'Credentials',

          credentials: {
            email: { label: "Email", type: "email", placeholder: "a@example.com" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials: any, req) {
          
            const { email, password } = credentials;
            const userFound = await prisma.user.findUnique({
              where: { email },
            });
            if (!userFound) throw new Error("No user found");

            const passwordValid = await bcrypt.compare(password, userFound.password);

            if (!passwordValid) throw new Error("Password is not valid");

            return { 
              id: String(userFound.id),
              firstName: userFound.firstName,
              lastName: userFound.lastName,
              email: userFound.email 
            }
          }
        })
      ],
      pages: {
        signIn: '/auth/login',
      },
})

export { handler as GET, handler as POST }