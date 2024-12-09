import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    const startOfPrevMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const endOfPrevMonth = new Date(now.getFullYear(), now.getMonth(), 0);

    // Get current month surveys
    const currentMonthSurveys = await prisma.leaderboard_project.count({
      where: {
        survey_complete_date: {
          gte: startOfMonth,
          lte: endOfMonth,
        }
      }
    });

    // Get previous month surveys
    const previousMonthSurveys = await prisma.leaderboard_project.count({
      where: {
        survey_complete_date: {
          gte: startOfPrevMonth,
          lte: endOfPrevMonth,
        }
      }
    });

    return NextResponse.json({
      currentMonth: currentMonthSurveys,
      previousMonth: previousMonthSurveys,
    });

  } catch (error) {
    console.error('Failed to fetch survey metrics:', error);
    return NextResponse.json(
      { error: 'Failed to fetch survey metrics' },
      { status: 500 }
    );
  }
} 