import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    const startOfPrevMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const endOfPrevMonth = new Date(now.getFullYear(), now.getMonth(), 0);

    // Get current month inspections
    const currentMonthInspections = await prisma.leaderboard_project.count({
      where: {
        inspection_approved_date: {
          gte: startOfMonth,
          lte: endOfMonth,
        }
      }
    });

    // Get previous month inspections
    const previousMonthInspections = await prisma.leaderboard_project.count({
      where: {
        inspection_approved_date: {
          gte: startOfPrevMonth,
          lte: endOfPrevMonth,
        }
      }
    });

    return NextResponse.json({
      currentMonth: currentMonthInspections,
      previousMonth: previousMonthInspections,
    });

  } catch (error) {
    console.error('Failed to fetch inspection metrics:', error);
    return NextResponse.json(
      { error: 'Failed to fetch inspection metrics' },
      { status: 500 }
    );
  }
} 