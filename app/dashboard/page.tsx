import { DashboardKPIs } from "./_Components/dashboard-kpis";
import { ProcessDurationMetrics } from "./_Components/process-duration-metrics";
import { DashboardFilters } from "./_Components/dashboard-filters";

export default function DashboardPage() {
  return (
    <div className="flex space-x-4">
      <DashboardFilters />
      <div className="flex-1 space-y-4">
        <DashboardKPIs />
        <ProcessDurationMetrics />
      </div>
    </div>
  );
}