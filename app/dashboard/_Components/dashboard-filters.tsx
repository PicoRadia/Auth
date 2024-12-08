'use client';

export function DashboardFilters() {
  return (
    <div className="w-1/4 rounded-xl border bg-card text-card-foreground shadow p-4">
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
  );
} 