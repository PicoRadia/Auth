'use client';

import * as React from 'react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select"

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
import { processMetricsData } from './data/processMetrics';

export const description = 'An interactive bar chart';

const chartConfig = {
  install: {
    label: 'Average SOW to Install (Days)',
    color: 'hsl(157, 71%, 62%)'
  }
} satisfies ChartConfig;

export function BarGraph() {
  const periods = ['Daily', 'Weekly', 'Monthly', 'Quarterly'] as const;
  const metrics = [
    'Sale -> Site Survey',
    'Site Survey -> Design Complete',
    'Design Complete -> SOW Sent',
    'Change Order -> SOW Sent',
    'SOW Approved -> Engineering Complete',
    'Engineering Complete -> Permit Submission',
    'Permit Submission -> Permit Approved',
    'Permit Approved -> Install Scheduled',
    'Install Scheduled -> Install Complete',
    'Install Complete -> Inspection Scheduled',
    'Inspection Scheduled -> Inspection Approved',
    'Inspection Approved -> PTO Submitted',
    'PTO Submitted -> PTO Received',
    'PTO Received -> System Activated'
  ] as const;

  const [selectedPeriod, setSelectedPeriod] = React.useState<typeof periods[number]>('Monthly');
  const [selectedMetric, setSelectedMetric] = React.useState<typeof metrics[number]>('Sale -> Site Survey');
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>('install');

  return (
    <ChartContainer
      config={chartConfig}
      className="aspect-auto h-[500px] w-full rounded-lg"
    >
      <BarChart
        accessibilityLayer
        data={processMetricsData.filter(
          (item) => item.period === selectedPeriod && item.type === selectedMetric
        )}
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
              className="w-[180px]"
              nameKey="avgDuration"
              labelFormatter={(value) => {
                const data = processMetricsData.find(d => d.date === value);
                return `${new Date(value).toLocaleDateString('en-US', {
                  month: 'long',
                  year: 'numeric'
                })}
                ${data?.type} (${data?.period})`;
              }}
            />
          }
        />
        <Bar dataKey="avgDuration" fill={chartConfig.install.color} />
      </BarChart>
    </ChartContainer>
  );
}