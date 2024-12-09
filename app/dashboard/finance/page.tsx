'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

// Calculate total for percentages
const total = 2276 + 1018 + 605 + 149;

const financingData = [
  { name: '⚡ PPA', value: 2276, color: '#98F7B7' },
  { name: '📋 Lease', value: 1018, color: '#37E2A0' },
  { name: '🏦 Loan', value: 605, color: '#3B82F6' },
  { name: '💵 Cash', value: 149, color: '#7DD3FC' }
].map(item => ({
  ...item,
  percentage: ((item.value / total) * 100).toFixed(1)
}));

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
    </div>
  );
}
