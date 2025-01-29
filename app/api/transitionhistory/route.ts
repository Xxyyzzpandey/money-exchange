// File: /pages/api/transactions.ts

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../database/db"; 
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";

export  async function Handler(req:NextRequest, res:NextResponse) {
    const sesssion=await getServerSession(authOptions)
    console.log("number is",sesssion)
  try {
    if(!sesssion){
        return NextResponse.json({msg:"all field are requird"},{status:401})
    }

    const transactions = await prisma.transation.findMany({
      where: {
        OR: [
          { senderid: sesssion.user.number },
          { recieverid: sesssion.user.number },
        ],
      },
    });
    console.log(transactions)
    const formattedTransactions = transactions.map((t) => ({
        ...t,
        amount: t.amount.toString(), // Convert BigInt to string
      }));
   return NextResponse.json({transactions:formattedTransactions},{status:200});
  } catch (error) {
     return NextResponse.json({ error: "Failed to fetch transactions" },{status:500});
  }
}
export {Handler as POST}