import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET(request: NextRequest) {
  const headersList = headers();
  const userAgent = headersList.get("user-agent") || "";
  const source = request.nextUrl.searchParams.get("source") || "unknown";

  console.log(`Download tracked: source=${source}, ua=${userAgent}`);

  const isIOS = /iPhone|iPad|iPod/.test(userAgent);
  const isAndroid = /Android/.test(userAgent);

  let redirectUrl = "https://fuelrush.app/download";

  if (isIOS) {
    redirectUrl = "https://apps.apple.com/app/fuelrush";
  } else if (isAndroid) {
    redirectUrl = "https://play.google.com/store/apps/details?id=com.fuelrush.app";
  }

  return NextResponse.redirect(redirectUrl);
}
