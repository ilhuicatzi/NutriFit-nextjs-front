import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";


export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "a@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials || {};

        // Validar que las credenciales no estén vacías
        if (!email || !password) {
          throw new Error("Email and password are required");
        }

        const userFound = await prisma.user.findUnique({
          where: { email },
        });

        if (!userFound) {
          throw new Error("No user found with this email.");
        }

        const passwordValid = await bcrypt.compare(
          password,
          userFound.password
        );

        if (!passwordValid) {
          throw new Error("Password is not valid");
        }

        return {
          id: String(userFound.id),
          firstName: userFound.firstName,
          lastName: userFound.lastName,
          email: userFound.email,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({token, user}) {
      if (user) {
        token.id = user.id; // Agregar ID del usuario al token
        token.firstName = user.firstName; // Agregar nombre del usuario al token
        token.lastName = user.lastName; // Agregar apellido del usuario al token
        token.email = user.email; // Agregar email del usuario al token
      }
      return token;
    },
    async session({session, token}) {
      session.user.id = token.id; // Agregar ID del usuario a la sesión
      session.user.firstName = token.firstName; // Agregar nombre del usuario a la sesión
      session.user.lastName = token.lastName; // Agregar apellido del usuario a la sesión
      session.user.email = token.email; // Agregar email del usuario a la sesión
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
};