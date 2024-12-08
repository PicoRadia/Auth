'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { ClipboardList, Wrench, Activity, Percent } from "lucide-react";

export function DashboardKPIs() {
  const [dashboardMetrics] = useState({
    totalProjects: 231,
    projectIncrease: 20.1,
    totalInstalls: 25,
    installIncrease: 15.1,
    activeNow: 573,
    activeIncrease: 201,
    conversionRate: 12.3,
    conversionIncrease: 2.1
  });

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
          <ClipboardList className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{dashboardMetrics.totalProjects}</div>
          <p className="text-xs text-muted-foreground">
            +{dashboardMetrics.projectIncrease}% from last month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Installs</CardTitle>
          <Wrench className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{dashboardMetrics.totalInstalls}</div>
          <p className="text-xs text-muted-foreground">
            +{dashboardMetrics.installIncrease}% from last month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Now</CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+{dashboardMetrics.activeNow}</div>
          <p className="text-xs text-muted-foreground">
            +{dashboardMetrics.activeIncrease} since last hour
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
          <Percent className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{dashboardMetrics.conversionRate}%</div>
          <p className="text-xs text-muted-foreground">
            +{dashboardMetrics.conversionIncrease}% from last month
          </p>
        </CardContent>
      </Card>
    </div>
  );
} 