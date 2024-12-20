'use client';

import { useState } from 'react';
import { Card, CardContent } from "@/app/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { BarGraph } from "./Bar Chart";

export function ProcessDurationMetrics() {
  const metrics = [
    '🤝 Sale ⟶ Site Survey',
    '📏 Site Survey ⟶ Design Complete',
    '✍️ Design Complete ⟶ SOW Sent',
    '📝 Change Order ⟶ SOW Sent',
    '✅ SOW Approved ⟶ Engineering Complete',
    '👷 Engineering Complete ⟶ Permit Submission',
    '📋 Permit Submission ⟶ Permit Approved',
    '📅 Permit Approved ⟶ Install Scheduled',
    '🏗️ Install Scheduled ⟶ Install Complete',
    '📞 Install Complete ⟶ Inspection Scheduled',
    '✔️ Inspection Scheduled ⟶ Inspection Approved',
    '📤 Inspection Approved ⟶ PTO Submitted',
    '📨 PTO Submitted ⟶ PTO Received',
    '⚡ PTO Received ⟶ System Activated'
  ] as const;

  const [selectedMetric, setSelectedMetric] = useState<typeof metrics[number]>('🤝 Sale ⟶ Site Survey');

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4 p-4  border rounded-lg">
        <div className="flex items-center gap-2">
          <div className="dark:text-white text-black">Choose the Step of the project to View</div>
          <span className="dark:text-gray-300 text-gray-600 ml-3">Average number of days for each process</span>
        </div>
        <div className="flex gap-2">
        
          <Select
            value={selectedMetric}
            onValueChange={(value) => setSelectedMetric(value as typeof metrics[number])}
          >
            <SelectTrigger className="dark:text-white">
              <SelectValue placeholder="Select metric" />
            </SelectTrigger>
            <SelectContent className="dark:text-white">
              {metrics.map((metric) => (
                <SelectItem key={metric} value={metric}>
                  {metric}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <Card>
        <CardContent className="p-6">
          <BarGraph 
          
            selectedMetric={selectedMetric}
          />
        </CardContent>
      </Card>
    </div>
  );
} 