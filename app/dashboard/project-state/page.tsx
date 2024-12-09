'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Calculate total for percentages
const total = 895; // Highest value

const stageData = [
  { name: 'Completed', value: 895 },
  { name: 'Survey Scheduled', value: 764 },
  { name: 'Survey Complete', value: 578 },
  { name: 'SOW Sent', value: 495 },
  { name: 'Permit Approved', value: 393 },
  { name: 'Permit Submitted', value: 272 },
  { name: 'Not Started', value: 149 },
  { name: 'Engineering Complete', value: 133 },
  { name: 'Install Complete', value: 115 },
  { name: 'Inspection Failed', value: 57 },
  { name: 'PTO Received', value: 45 },
  { name: 'Install Scheduled', value: 42 },
  { name: 'PTO Submitted', value: 41 },
  { name: 'System Activated', value: 33 },
  { name: 'Inspection Approved', value: 31 },
  { name: 'Inspection Scheduled', value: 28 }
].map(item => ({
  ...item,
  percentage: ((item.value / total) * 100).toFixed(1)
}));

export default function ProjectStatePage() {
  return (
    <div className="space-y-6">
      <Card className="dark:bg-[#0F172A] bg-white border">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-semibold dark:text-gray-200 text-gray-900">
            Project Pipeline Overview
          </CardTitle>
          <p className="text-sm dark:text-gray-400 text-gray-500">
            Distribution of projects across different stages
          </p>
        </CardHeader>
        <CardContent className="p-6">
          <div className="h-[600px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={stageData}
                layout="vertical"
                margin={{ top: 5, right: 40, left: 150, bottom: 5 }}
              >
                <XAxis 
                  type="number"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'currentColor', opacity: 0.6, fontSize: 12 }}
                  tickCount={6}
                />
                <YAxis 
                  type="category" 
                  dataKey="name" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'currentColor', opacity: 0.6, fontSize: 12 }}
                  width={140}
                />
                <Tooltip
                  cursor={{ fill: 'currentColor', opacity: 0.1 }}
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="rounded-lg border bg-card p-2 shadow-sm">
                          <div className="grid grid-cols-2 gap-2">
                            <div className="flex flex-col">
                              <span className="text-sm font-medium dark:text-gray-100">
                                {payload[0].payload.name}
                              </span>
                              <span className="text-sm text-muted-foreground">
                                {payload[0].value} ({payload[0].payload.percentage}%)
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar 
                  dataKey="value" 
                  fill="#3B82F6"
                  radius={[4, 4, 4, 4]}
                  barSize={20}
                  label={({ x, y, width, value, payload }) => {
                    if (!payload) return null;
                    return (
                      <text
                        x={x + width + 5}
                        y={y + 10}
                        fill="currentColor"
                        opacity={0.6}
                        fontSize={12}
                        textAnchor="start"
                      >
                        {value} ({payload.percentage}%)
                      </text>
                    );
                  }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 