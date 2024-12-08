'use client';

import * as React from 'react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/app/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/app/components/ui/chart';

export const description = 'An interactive bar chart';

const chartData = [
  { date: '2024-01-01', install: 140.30, sales: 120, activeUsers: 200, conversionRate: 15 },
  { date: '2024-02-01', install: 77.00, sales: 90, activeUsers: 180, conversionRate: 12 },
  { date: '2024-03-01', install: 70.83, sales: 80, activeUsers: 170, conversionRate: 10 },
  { date: '2024-04-01', install: 94.58, sales: 100, activeUsers: 190, conversionRate: 13 },
  { date: '2024-05-01', install: 106.58, sales: 110, activeUsers: 210, conversionRate: 14 },
  { date: '2024-06-01', install: 67.37, sales: 70, activeUsers: 160, conversionRate: 9 },
  { date: '2024-07-01', install: 28.11, sales: 50, activeUsers: 150, conversionRate: 7 },
  { date: '2024-08-01', install: 57.76, sales: 60, activeUsers: 140, conversionRate: 8 },
  { date: '2024-09-01', install: 42.35, sales: 40, activeUsers: 130, conversionRate: 6 },
  { date: '2024-10-01', install: 56.43, sales: 50, activeUsers: 120, conversionRate: 7 },
  { date: '2024-11-01', install: 52.67, sales: 45, activeUsers: 110, conversionRate: 6 },
  { date: '2024-12-01', install: 27.00, sales: 30, activeUsers: 100, conversionRate: 5 }
];

const chartConfig = {
  install: {
    label: 'Average SOW to Install (Days)',
    color: 'hsl(157, 71%, 62%)'
  },
  sales: {
    label: 'Sales',
    color: 'hsl(157, 71%, 62%)'
  },
  activeUsers: {
    label: 'Active Users',
    color: 'hsl(157, 71%, 62%)'
  },
  conversionRate: {
    label: 'Conversion Rate',
    color: 'hsl(157, 71%, 62%)'
  }
} satisfies ChartConfig;

type MetricType = keyof typeof chartConfig;

interface BarGraphProps {
  selectedMetric?: MetricType;
}

export function BarGraph({ selectedMetric = 'install' }: BarGraphProps) {
  const metric = chartConfig[selectedMetric as MetricType] ? selectedMetric : 'install';

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Average SOW to Install Time</CardTitle>
          <CardDescription>
            Average number of days from SOW to Installation by month
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[280px] w-full rounded-lg"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 16,
              right: 16,
              top: 16,
              bottom: 16
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString('en-US', {
                  month: 'short'
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey={metric}
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'long',
                      year: 'numeric'
                    });
                  }}
                />
              }
            />
            <Bar dataKey={metric} fill={chartConfig[metric].color} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}