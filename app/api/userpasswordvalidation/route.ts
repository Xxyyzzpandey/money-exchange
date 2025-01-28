import { NextRequest,NextResponse } from "next/server";
import { prisma } from "@/app/database/db";
import bcrypt from "bcrypt";

export  async function Handle(req: NextRequest,res:NextResponse) {
  const { email, password } = await req.json();
    console.log(email,password)
  if (!email || !password ) {
    return NextResponse.json({ message: "All fields are required" },{status:402});
  }
 console.log(email,password);
  try {
    const user=await prisma.user.findUnique({
        where:{
            email:email
        }
    })
    const isPasswordValid = await bcrypt.compare(password,user.password);
      if (!isPasswordValid) {
        return NextResponse.json({ message: "Invalid password." },{status:401});
      }

    return NextResponse.json({
      message: "user verified!",
    },{status:201});
  } catch (error) {
    return NextResponse
      .json({ message: "Something went wrong", error: error },{status:501});
  }
}

export { Handle as POST }