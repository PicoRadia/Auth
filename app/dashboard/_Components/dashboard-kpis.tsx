'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { DollarSign, Users, Activity, Percent } from "lucide-react";

export function DashboardKPIs() {
  const [dashboardMetrics] = useState({
    totalRevenue: 45231.89,
    revenueIncrease: 20.1,
    subscriptions: 2350,
    subscriptionIncrease: 180.1,
    activeNow: 573,
    activeIncrease: 201,
    conversionRate: 12.3,
    conversionIncrease: 2.1
  });

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${dashboardMetrics.totalRevenue.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">
            +{dashboardMetrics.revenueIncrease}% from last month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+{dashboardMetrics.subscriptions}</div>
          <p className="text-xs text-muted-foreground">
            +{dashboardMetrics.subscriptionIncrease}% from last month
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