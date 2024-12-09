'use client';

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Activity, ClipboardList, Zap, CheckCircle2, DollarSign } from "lucide-react";

// Add type for the sales data
type SalesMetrics = {
  currentMonth: number;
  previousMonth: number;
};

type Metrics = {
  currentMonth: number;
  previousMonth: number;
};

export function DashboardKPIs() {
  const [salesMetrics, setSalesMetrics] = useState<SalesMetrics>({
    currentMonth: 0,
    previousMonth: 0
  });
  const [error, setError] = useState<string | null>(null);
  
  const [surveyMetrics, setSurveyMetrics] = useState<Metrics>({
    currentMonth: 0,
    previousMonth: 0
  });

  const [otherMetrics] = useState({
    totalInstalls: 25,
    installIncrease: 15.1,
    surveysCompleted: 36,
    surveysIncrease: 20,
    inspectionsApproved: 18,
    inspectionIncrease: 12.5,
    grossPPW: 2.85,
    ppwIncrease: 8.2
  });

  useEffect(() => {
    async function fetchSalesData() {
      try {
        console.log('Fetching sales data...');
        const response = await fetch('/api/metrics/sales');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Received sales data:', data);
        setSalesMetrics(data);
      } catch (error) {
        console.error('Failed to fetch sales metrics:', error);
        setError('Failed to fetch sales metrics');
      }
    }

    fetchSalesData();
  }, []);

  useEffect(() => {
    // Fetch survey data
    async function fetchSurveyData() {
      try {
        const response = await fetch('/api/metrics/surveys');
        if (!response.ok) throw new Error('Failed to fetch survey data');
        const data = await response.json();
        setSurveyMetrics(data);
      } catch (error) {
        console.error('Failed to fetch survey metrics:', error);
      }
    }

    fetchSurveyData();
  }, []);

  // Calculate percentage increase
  const salesIncrease = salesMetrics.previousMonth > 0
    ? ((salesMetrics.currentMonth - salesMetrics.previousMonth) / salesMetrics.previousMonth) * 100
    : 0;

  // Calculate percentage increase for surveys
  const surveyIncrease = surveyMetrics.previousMonth > 0
    ? ((surveyMetrics.currentMonth - surveyMetrics.previousMonth) / surveyMetrics.previousMonth) * 100
    : 0;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Sales</CardTitle>
          <ClipboardList className="h-4 w-4 text-[#2ED3A0] dark:text-[#71F3BB]" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-[#2ED3A0] dark:text-[#71F3BB]">
            {salesMetrics.currentMonth}
          </div>
          <p className="text-xs text-muted-foreground">
            {salesIncrease > 0 ? '+' : ''}{salesIncrease.toFixed(1)}% from last month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Survey Completed</CardTitle>
          <Activity className="h-4 w-4 text-[#2ED3A0] dark:text-[#71F3BB]" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-[#2ED3A0] dark:text-[#71F3BB]">
            {surveyMetrics.currentMonth}
          </div>
          <p className="text-xs text-muted-foreground">
            {surveyIncrease > 0 ? '+' : ''}{surveyIncrease.toFixed(1)}% since last month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Inspections Approved</CardTitle>
          <CheckCircle2 className="h-4 w-4 text-[#2ED3A0] dark:text-[#71F3BB]" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-[#2ED3A0] dark:text-[#71F3BB]">{otherMetrics.inspectionsApproved}</div>
          <p className="text-xs text-muted-foreground">
            +{otherMetrics.inspectionIncrease}% since last month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Installs</CardTitle>
          <Zap className="h-4 w-4 text-[#2ED3A0] dark:text-[#71F3BB]" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-[#2ED3A0] dark:text-[#71F3BB]">{otherMetrics.totalInstalls}</div>
          <p className="text-xs text-muted-foreground">
            +{otherMetrics.installIncrease}% since last month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Gross PPW</CardTitle>
          <DollarSign className="h-4 w-4 text-[#2ED3A0] dark:text-[#71F3BB]" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-[#2ED3A0] dark:text-[#71F3BB]">${otherMetrics.grossPPW}</div>
          <p className="text-xs text-muted-foreground">
            +{otherMetrics.ppwIncrease}% since last month
          </p>
        </CardContent>
      </Card>
    </div>
  );
} 