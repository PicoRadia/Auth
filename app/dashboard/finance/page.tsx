'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis } from 'recharts';

const financingData = [
  { name: '⚡ PPA', value: 2276, color: '#98F7B7' },
  { name: '📋 Lease', value: 1018, color: '#37E2A0' },
  { name: '🏦 Loan', value: 605, color: '#3B82F6' },
  { name: '💵 Cash', value: 149, color: '#7DD3FC' }
].map(item => ({
  ...item,
  percentage: ((item.value / (2276 + 1018 + 605 + 149)) * 100).toFixed(1)
}));

interface LenderDataItem {
  name: string;
  value: number;
  color: string;
}

const lenderData: LenderDataItem[] = [
  { name: 'Cash', value: 149, color: '#4F46E5' },
  { name: 'Dividend', value: 205, color: '#38BDF8' },
  { name: 'EverBright', value: 312, color: '#4ADE80' },
  { name: 'GoodLeap', value: 1518, color: '#FCD34D' },
  { name: 'LightReach', value: 1864, color: '#FB923C' }
].sort((a, b) => a.value - b.value);

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, value, payload }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text 
      x={x} 
      y={y} 
      fill="white" 
      textAnchor={x > cx ? 'start' : 'end'} 
      dominantBaseline="central"
      className="text-xs font-medium"
    >
      {`${payload.percentage}%`}
    </text>
  );
};

const CustomLegend = ({ payload }: any) => {
  return (
    <div className="flex justify-center gap-6 mt-4">
      {payload.map((entry: any, index: number) => (
        <div key={`legend-${index}`} className="flex items-center gap-2">
          <div 
            className="w-4 h-0.5" 
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-sm text-gray-400">
            {entry.payload.name} ({entry.payload.percentage}%)
          </span>
        </div>
      ))}
    </div>
  );
};

export default function FinancePage() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Financing Distribution</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={financingData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {financingData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value: any, name: any, props: any) => [
                      `${value} (${props.payload.percentage}%)`,
                      name
                    ]}
                  />
                  <Legend content={<CustomLegend />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Lender Distribution</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={lenderData}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
                >
                  <XAxis type="number" />
                  <YAxis 
                    type="category" 
                    dataKey="name" 
                    tick={{ fill: 'currentColor', opacity: 0.6 }}
                  />
                  <Tooltip
                    cursor={{ fill: 'currentColor', opacity: 0.1 }}
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="rounded-lg border bg-card p-2 shadow-sm">
                            <div className="flex flex-col">
                              <span className="text-sm font-medium">
                                {payload[0].payload.name}
                              </span>
                              <span className="text-sm text-muted-foreground">
                                {payload[0].value}
                              </span>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar 
                    dataKey="value" 
                    radius={[4, 4, 4, 4]}
                    barSize={20}
                  >
                    {lenderData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
