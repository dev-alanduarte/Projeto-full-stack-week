import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { resolve } from "path";

export async function GET() {
  const trips = await prisma.trip.findMany();

  return new NextResponse(JSON.stringify(trips), { status: 200 });
}
