import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { DollarSign, TrendingUp, CreditCard, PiggyBank } from "lucide-react";

export default function FinancePage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-[#2ED3A0]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#2ED3A0]">$45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Project Value</CardTitle>
            <TrendingUp className="h-4 w-4 text-[#2ED3A0]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#2ED3A0]">$12,234.00</div>
            <p className="text-xs text-muted-foreground">+15% since last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Recurring</CardTitle>
            <CreditCard className="h-4 w-4 text-[#2ED3A0]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#2ED3A0]">$5,678.32</div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Profit Margin</CardTitle>
            <PiggyBank className="h-4 w-4 text-[#2ED3A0]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#2ED3A0]">24.3%</div>
            <p className="text-xs text-muted-foreground">+2.3% from last month</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 