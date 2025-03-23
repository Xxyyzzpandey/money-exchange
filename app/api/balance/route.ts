import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import { prisma } from "../../database/db";
import { NextRequest, NextResponse } from "next/server";

export default async function GET(req:NextRequest, res:NextResponse) {
  const session = await getServerSession(authOptions); 
  console.log("session " ,session)
  if (!session) {
    return NextResponse.json({ msg: "Session required" }, { status: 401 }); // Return an unauthorized status with a message
  }
  try {
    const balance = await prisma.balance.findUnique({
      where: { userid: session.user.number }, // Assuming `user.number` is correct
    });

    const headers = new Headers();
    headers.set("X-Balance", balance?.amount?.toString() || "0");
     return NextResponse.json(
      { msg: "Balance sent in header" },
      { status: 200, headers }
    );
    
  } catch (error) {
    console.error("Error fetching balance:", error);
    return NextResponse.json({ error: "Unable to fetch balance" },{status:500}); // Send an error status with message
  }
}


