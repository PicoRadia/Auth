import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Get current date info
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);

    // Get previous month info
    const startOfPrevMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const endOfPrevMonth = new Date(now.getFullYear(), now.getMonth(), 0);

    // Get current month sales
    const currentMonthSales = await prisma.leaderboard_project.count({
      where: {
        created: {
          gte: startOfMonth,
          lte: endOfMonth,
        },
        
      },
    });

    // Get previous month sales
    const previousMonthSales = await prisma.leaderboard_project.count({
      where: {
        created: {
          gte: startOfPrevMonth,
          lte: endOfPrevMonth,
        }
      },
    });

    console.log('Sales metrics:', {
      currentMonth: currentMonthSales,
      previousMonth: previousMonthSales,
      dateRanges: {
        current: { startOfMonth, endOfMonth },
        previous: { startOfPrevMonth, endOfPrevMonth }
      }
    });

    return NextResponse.json({
      currentMonth: currentMonthSales,
      previousMonth: previousMonthSales,
    });

  } catch (error) {
    console.error('Failed to fetch sales metrics:', error);
    return NextResponse.json(
      { error: 'Failed to fetch sales metrics' },
      { status: 500 }
    );
  }
} 