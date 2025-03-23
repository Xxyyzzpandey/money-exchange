import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/database/db";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  try {
    const { name, email, number, password } = await req.json();

    if (!name || !email || !password || !number) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    if (number.length !== 10) {
      return NextResponse.json({ msg: "Invalid number" }, { status: 400 });
    }

    console.log(name, email, number, password);

    const existEmail = await prisma.user.findUnique({ where: { email } });
    const existNumber = await prisma.user.findUnique({ where: { number } });

    if (existEmail) {
      return NextResponse.json({ message: "Email already exists" }, { status: 409 });
    }

    if (existNumber) {
      return NextResponse.json({ message: "Number already exists" }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        number,
        password: hashedPassword,
      },
    });

    await prisma.balance.create({
      data: {
        userid: number,
        amount: 0,
        totalTransation: 2000, // Ensure spelling matches your DB schema
      },
    });

    return NextResponse.json(
      {
        message: "User created successfully!",
        user: { id: newUser.id, name: newUser.name, email: newUser.email },
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
