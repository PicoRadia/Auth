'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { DollarSign, TrendingUp, CreditCard, PiggyBank } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const financingData = [
  { name: 'PPA', value: 2276, color: '#2E7DD1' },
  { name: 'Lease', value: 1018, color: '#71F3BB' },
  { name: 'Loan', value: 605, color: '#9333EA' },
  { name: 'Cash', value: 149, color: '#2563EB' }
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, value }: any) => {
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
      className="text-xs"
    >
      {value}
    </text>
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
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={financingData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {financingData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
              <Legend
                iconType="circle"
                layout="vertical"
                verticalAlign="middle"
                align="right"
              />
              <Tooltip />
              <ResponsiveContainer>
                <Pie
                  data={financingData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#82ca9d"
                  dataKey="value"
                  label={renderCustomizedLabel}
                >
                  {financingData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </ResponsiveContainer>
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
