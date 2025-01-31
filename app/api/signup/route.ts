import { NextRequest,NextResponse } from "next/server";
import { prisma } from "@/app/database/db";
import bcrypt from "bcrypt";

export  async function Handle(req: NextRequest) {
  const { name, email, number, password } = await req.json();

  if (!name || !email || !password || !number) {
    return NextResponse.json({ message: "All fields are required" },{status:402});
  }
 console.log(name,email,number,password);
  try {
    const existemail = await prisma.user.findUnique({
      where: { email },
    });
    const existnumber = await prisma.user.findUnique({
      where: { number },
    });

    if (existemail) {
      return NextResponse.json({ message: "Email already exists" },{status:401});
    }

    if (existnumber) {
        return NextResponse.json({ message: "Email already exists" },{status:401});
    }
    const hashpassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        number,
        password: hashpassword,
      },
    });
    const balanceuser=await prisma.balance.create({
      data:{
        userid:number,
        amount:0,
        totalTransation:2000
      }
    })
    return NextResponse.json({
      message: "User created successfully!",
      user: { id: newUser.id, name: newUser.name, email: newUser.email },
    },{status:201});
  } catch (error) {
    return NextResponse
      .json({ message: "Something went wrong", error: error },{status:501});
  }
}

export { Handle as POST }