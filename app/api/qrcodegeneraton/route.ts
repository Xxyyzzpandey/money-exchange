

import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import { NextRequest, NextResponse } from "next/server";
import qrcode from "qrcode"

async function handler(req:NextRequest, res:NextResponse) {
  const session = await getServerSession(authOptions); 
  if (!session) {
    return NextResponse.json({ msg: "Session required" }, { status: 401 }); // Return an unauthorized status with a message
  }
  try { 
    const pageurl="http://localhost:3000/pages/p2p"
    const qrcodedata=await qrcode.toDataURL(pageurl)
    return NextResponse.json({qrcode:qrcodedata},{status:200});
      
  } catch (error) {
    console.error("Error fetching balance:", error);
    return NextResponse.json({ error: "Unable to fetch qrcode" },{status:500}); // Send an error status with message
  }
}

export { handler as GET };