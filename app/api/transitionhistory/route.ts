import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../database/db"; 
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user?.number) {
      return new NextResponse(JSON.stringify({ msg: "Unauthorized: Session required" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    const transactions = await prisma.transation.findMany({
      where: {
        OR: [
          { senderid: session.user.number },
          { recieverid: session.user.number },
        ],
      },
    });

    // Convert BigInt to string
    const formattedTransactions = transactions.map((t) => ({
      ...t,
      amount: t.amount.toString(),
    }));

    return new NextResponse(JSON.stringify({ transactions: formattedTransactions }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Error fetching transactions:", error);
    return new NextResponse(JSON.stringify({ error: "Failed to fetch transactions" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
