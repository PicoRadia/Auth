'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

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
];

export default function ProjectStatePage() {
  return (
    <div className="space-y-6">
      <Card className="bg-[#0F172A]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-semibold text-gray-200">Project Pipeline Overview</CardTitle>
          <p className="text-sm text-gray-400">Distribution of projects across different stages</p>
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
                  tick={{ fill: '#64748B', fontSize: 12 }}
                  tickCount={6}
                />
                <YAxis 
                  type="category" 
                  dataKey="name" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#64748B', fontSize: 12 }}
                  width={140}
                />
                <Tooltip
                  cursor={{ fill: 'rgba(30, 41, 59, 0.4)' }}
                  contentStyle={{
                    backgroundColor: '#1E293B',
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    color: '#E2E8F0'
                  }}
                />
                <Bar 
                  dataKey="value" 
                  fill="#3B82F6"
                  radius={[4, 4, 4, 4]}
                  barSize={20}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 