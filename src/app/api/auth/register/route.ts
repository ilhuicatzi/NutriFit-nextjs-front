import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate required fields
    if (!body.email || !body.firstName || !body.lastName || !body.password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "User with this email already exists" },
        { status: 409 }
      );
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    body.password = await bcrypt.hash(body.password, salt);

    const newUser = await prisma.user.create({
      data: {
        email: body.email,
        firstName: body.firstName,
        lastName: body.lastName,
        password: body.password,
      },
    });

    // Return the user data without the password
    const { password, ...userData } = newUser;

    return NextResponse.json(userData, { status: 201 });
  } catch (error) {
    console.error("Error registering user:", error);

    // Return a generic error message to the client
    return NextResponse.json(
      { message: "Failed to register user. Please try again later." },
      { status: 500 }
    );
  }
}