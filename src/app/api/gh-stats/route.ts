// src/app/api/gh-stats/route.ts
export const dynamic = 'force-dynamic';
import { NextResponse } from 'next/server';
import { getGHStats } from '@/lib/get-gh-stats';

export async function GET() {
  try {
    const data = await getGHStats();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    return NextResponse.json({ error: "Failed to fetch GitHub stats" }, { status: 500 });
  }
}
