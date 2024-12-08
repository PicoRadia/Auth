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
  { date: '2024-01-01', install: 140.30 },
  { date: '2024-02-01', install: 77.00 },
  { date: '2024-03-01', install: 70.83 },
  { date: '2024-04-01', install: 94.58 },
  { date: '2024-05-01', install: 106.58 },
  { date: '2024-06-01', install: 67.37 },
  { date: '2024-07-01', install: 28.11 },
  { date: '2024-08-01', install: 57.76 },
  { date: '2024-09-01', install: 42.35 },
  { date: '2024-10-01', install: 56.43 },
  { date: '2024-11-01', install: 52.67 },
  { date: '2024-12-01', install: 27.00 }
];

const chartConfig = {
  install: {
    label: 'Average SOW to Install (Days)',
    color: 'hsl(157, 71%, 62%)'
  }
} satisfies ChartConfig;

export function BarGraph() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>('install');

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
                  nameKey="install"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'long',
                      year: 'numeric'
                    });
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={chartConfig[activeChart].color} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}