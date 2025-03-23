import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import { NextRequest, NextResponse } from "next/server";
import QRCode from "qrcode"; // Ensure correct import

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ msg: "Session required" }, { status: 401 });
  }

  try {
    const pageUrl = "http://localhost:3000/pages/p2p";
    const qrCodeData = await QRCode.toDataURL(pageUrl); // Generate QR Code

    return new NextResponse(JSON.stringify({ qrcode: qrCodeData }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Error generating QR code:", error);
    return new NextResponse(JSON.stringify({ error: "Unable to generate QR code" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
