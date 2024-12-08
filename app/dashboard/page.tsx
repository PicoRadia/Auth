import { DashboardKPIs } from "./_Components/dashboard-kpis";
import { ProcessDurationMetrics } from "./_Components/process-duration-metrics";

export default function DashboardPage() {
  return (
    <div className="flex space-x-4">
      <div className="w-1/4 bg-card p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold">Filters</h2>
        <div className="mt-4">
          <label className="block mb-2 text-sm">Select Period:</label>
          <select className="w-full p-2 border rounded">
            <option>Monthly</option>
            <option>Quarterly</option>
            <option>Yearly</option>
          </select>
          <label className="block mt-4 mb-2 text-sm">Select Metric:</label>
          <select className="w-full p-2 border rounded">
            <option>Sales</option>
            <option>Active Users</option>
            <option>Conversion Rate</option>
          </select>
        </div>
      </div>
      <div className="flex-1 space-y-4">
        <DashboardKPIs />
        <ProcessDurationMetrics />
      </div>
    </div>
  );
}