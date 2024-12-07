'use client';

import { useState, useEffect } from 'react';

import PageContainer from "@/app/components/page-container";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

import { BarGraph } from "@/app/dashboard/_Components/Bar Chart";
import { DollarSign, Users, Activity, Percent } from "lucide-react";


export default function OverViewPage() {
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
  const [session, setSession] = useState(null);
  const [dashboardMetrics, setDashboardMetrics] = useState({
    totalRevenue: 30000,
    revenueIncrease: 20.1,
    subscriptions: 2350,
    subscriptionIncrease: 180.1,
    activeNow: 573,
    activeIncrease: 201,
    conversionRate: 12.3,
    conversionIncrease: 2.1
  });

  useEffect(() => {
    const getSession = async () => {
      const response = await fetch('/api/auth/session');
      const sessionData = await response.json();
      setSession(sessionData);
    };
    getSession();
  }, []);

  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-medium tracking-tight">
            Hi, {session?.user?.name?.split(" ")[0] || 'there'} 👋
          </h2>
          <div className="text-sm text-muted-foreground">
            {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium dark:text-white">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold dark:text-white">${dashboardMetrics.totalRevenue.toLocaleString()}</div>
              <p className="text-xs dark:text-gray-300 text-gray-600">
                +{dashboardMetrics.revenueIncrease}% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium dark:text-white">Subscriptions</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold dark:text-white">+{dashboardMetrics.subscriptions}</div>
              <p className="text-xs dark:text-gray-300 text-gray-600">
                +{dashboardMetrics.subscriptionIncrease}% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium dark:text-white">Active Now</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold dark:text-white">+{dashboardMetrics.activeNow}</div>
              <p className="text-xs dark:text-gray-300 text-gray-600">
                +{dashboardMetrics.activeIncrease} since last hour
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium dark:text-white">Conversion Rate</CardTitle>
              <Percent className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold dark:text-white">{dashboardMetrics.conversionRate}%</div>
              <p className="text-xs dark:text-gray-300 text-gray-600">
                +{dashboardMetrics.conversionIncrease}% since last week
              </p>
            </CardContent>
          </Card>
        </div>

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

        <Card className="col-span-1">
          <CardContent className="p-6">
            <BarGraph 
              selectedPeriod={selectedPeriod}
              selectedMetric={selectedMetric}
            />
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
