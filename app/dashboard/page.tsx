import { DashboardKPIs } from "./_Components/dashboard-kpis";
import { ProcessDurationMetrics } from "./_Components/process-duration-metrics";

export default function DashboardPage() {
  return (
    <div className="flex space-x-4">
      <div className="w-1/4 border border-border rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        <div className="space-y-4">
          <div>
            <label className="block mb-2 text-sm">Select Period:</label>
            <select className="w-full p-2 rounded-md border bg-background">
              <option>Monthly</option>
              <option>Quarterly</option>
              <option>Yearly</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm">Select Metric:</label>
            <select className="w-full p-2 rounded-md border bg-background">
              <option>Sales</option>
              <option>Active Users</option>
              <option>Conversion Rate</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 bg-background">
        <DashboardKPIs />
       
        <ProcessDurationMetrics />
      </div>
    </div>
  );
}