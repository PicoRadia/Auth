import { DashboardKPIs } from "./_Components/dashboard-kpis";
import { ProcessDurationMetrics } from "./_Components/process-duration-metrics";

export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <DashboardKPIs />
      <ProcessDurationMetrics />
    </div>
  );
}