import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import { prisma } from "../../database/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): Promise<NextResponse> {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse(JSON.stringify({ msg: "Session required" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const userId = session.user.number; // Ensure this exists
    if (!userId) {
      return new NextResponse(JSON.stringify({ error: "User ID missing in session" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const balance = await prisma.balance.findUnique({
      where: { userid: userId },
    });

    if (!balance) {
      return new NextResponse(JSON.stringify({ error: "Balance not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    const response = new NextResponse(JSON.stringify({ msg: "Balance sent in header" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "X-Balance": balance.amount?.toString() || "0",
      },
    });

    return response;
  } catch (error) {
    console.error("Error fetching balance:", error);
    return new NextResponse(JSON.stringify({ error: "Unable to fetch balance" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
