'use client';

import { useState } from 'react';
import { Card, CardContent } from "@/app/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { BarGraph } from "./Bar Chart";

export function ProcessDurationMetrics() {
  const periods = ['Daily', 'Weekly', 'Monthly', 'Quarterly'] as const;
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

  const [selectedPeriod, setSelectedPeriod] = useState<typeof periods[number]>('Monthly');
  const [selectedMetric, setSelectedMetric] = useState<typeof metrics[number]>('🤝 Sale ⟶ Site Survey');

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4 p-4 bg-background border rounded-lg">
        <div className="flex items-center gap-2">
          <div className="dark:text-white text-black">Process Duration Metrics</div>
          <span className="dark:text-gray-300 text-gray-600 ml-2">Average number of days for each process step</span>
        </div>
        <div className="flex gap-2">
          <Select
            value={selectedPeriod}
            onValueChange={(value) => setSelectedPeriod(value as typeof periods[number])}
          >
            <SelectTrigger className="dark:text-white">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent className="dark:text-white">
              {periods.map((period) => (
                <SelectItem key={period} value={period}>
                  {period}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

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
            selectedPeriod={selectedPeriod}
            selectedMetric={selectedMetric}
          />
        </CardContent>
      </Card>
    </div>
  );
} 