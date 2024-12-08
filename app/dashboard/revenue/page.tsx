import { DashboardKPIs } from "../_components/dashboard-kpis";

export default function RevenueAnalysisPage() {
  return (
    <div className="space-y-4">
      <DashboardKPIs />
      <div className="p-4">
        {/* Revenue analysis content */}
        <h2 className="text-2xl font-bold dark:text-white">Revenue Analysis</h2>
        {/* Add your revenue charts/graphs here */}
      </div>
    </div>
  );
} 