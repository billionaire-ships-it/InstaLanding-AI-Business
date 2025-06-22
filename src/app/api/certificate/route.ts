// src/app/api/certificate/route.ts
import { NextRequest, NextResponse } from "next/server";
import PDFDocument from "pdfkit";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";

export async function GET(req: NextRequest): Promise<Response> {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userName = session.user.name || "User";
  const url = new URL(req.url);
  const launchDate = url.searchParams.get("date") || new Date().toLocaleDateString();
  const landingPageName = url.searchParams.get("pageName") || "Your Landing Page";

  // Create PDF document
  const doc = new PDFDocument({ size: "A4", margin: 50 });

  // Collect PDF chunks
  const chunks: Uint8Array[] = [];
  doc.on("data", (chunk) => chunks.push(chunk));

  return await new Promise<Response>((resolve) => {
    doc.on("end", () => {
      const pdfBuffer = Buffer.concat(chunks);
      resolve(
        new Response(pdfBuffer, {
          status: 200,
          headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": `attachment; filename=certificate-${landingPageName}.pdf`,
          },
        })
      );
    });

    // PDF content
    doc
      .fontSize(26)
      .fillColor("#4F46E5")
      .text("Certificate of Launch", { align: "center" })
      .moveDown(1);

    doc
      .fontSize(16)
      .fillColor("black")
      .text(`This certificate is proudly presented to`, { align: "center" })
      .moveDown(0.5);

    doc
      .fontSize(22)
      .fillColor("#111827")
      .text(userName, { align: "center", underline: true })
      .moveDown(1);

    doc
      .fontSize(16)
      .fillColor("black")
      .text(`For successfully launching`, { align: "center" })
      .moveDown(0.5);

    doc
      .fontSize(20)
      .fillColor("#111827")
      .text(landingPageName, { align: "center", underline: true })
      .moveDown(1);

    doc
      .fontSize(14)
      .text(`Launch Date: ${launchDate}`, { align: "center" })
      .moveDown(2);

    doc
      .fontSize(12)
      .fillColor("#6B7280")
      .text("Powered by InstaLanding AI", { align: "center" });

    doc.end();
  });
}
