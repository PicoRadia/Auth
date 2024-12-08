'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";

export function DashboardFilters() {
  return (
    <div className="w-1/4">
      <div className="p-8 border rounded-lg space-y-8">
        <div className="flex items-center gap-2">
          <div className="dark:text-white text-black font-medium text-lg">Filters</div>
          <span className="dark:text-gray-300 text-gray-600 ml-3">Customize your view</span>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <label className="text-sm font-medium">Select Period</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="quarterly">Quarterly</SelectItem>
                <SelectItem value="yearly">Yearly</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-medium">Select Warehouse</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select warehouse" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cerritos">Cerritos, CA</SelectItem>
                <SelectItem value="concord">Concord, CA</SelectItem>
                <SelectItem value="dallas">Dallas, TX</SelectItem>
                <SelectItem value="fresno">Fresno, CA</SelectItem>
                <SelectItem value="ip-program">IP Program</SelectItem>
                <SelectItem value="lakeland">Lakeland, FL</SelectItem>
                <SelectItem value="martinez">Martinez, CA</SelectItem>
                <SelectItem value="menifee">Menifee, CA</SelectItem>
                <SelectItem value="national-sales">National Sales</SelectItem>
                <SelectItem value="needs-review">Needs Review</SelectItem>
                <SelectItem value="out-of-region">Out of Region</SelectItem>
                <SelectItem value="phoenix">Phoenix, AZ</SelectItem>
                <SelectItem value="sacramento">Sacramento, CA</SelectItem>
                <SelectItem value="santa-ana">Santa Ana, CA</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-medium">Select Sales Company</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select company" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="clean-power">Clean Power</SelectItem>
                <SelectItem value="100-mill-solar">100 Mill Solar</SelectItem>
                <SelectItem value="lgcy">LGCY</SelectItem>
                <SelectItem value="better-earth">Better Earth</SelectItem>
                <SelectItem value="benchmark">Benchmark Group Of Com.</SelectItem>
                <SelectItem value="trust-solar">Trust Solar</SelectItem>
                <SelectItem value="kronos-solar">Kronos Solar</SelectItem>
                <SelectItem value="gnr-holdings">GNR Holdings</SelectItem>
                <SelectItem value="sodde-corporation">Sodde Corporation</SelectItem>
                <SelectItem value="zen-power">Zen Power</SelectItem>
                <SelectItem value="be-vis-team">BE VIS Team</SelectItem>
                <SelectItem value="spartan-solar">Spartan Solar LLC</SelectItem>
                <SelectItem value="solarizer">Solarizer</SelectItem>
                <SelectItem value="discover-milestone">Discover Milestone</SelectItem>
                <SelectItem value="honest-power">Honest Power</SelectItem>
                <SelectItem value="reach-solar">REACH Solar</SelectItem>
                <SelectItem value="radix">Radix</SelectItem>
                <SelectItem value="west-sun-solar">West Sun Solar</SelectItem>
                <SelectItem value="solar-educators">Solar Educators</SelectItem>
                <SelectItem value="utah-clean-power">Utah Clean Power</SelectItem>
                <SelectItem value="lvl-nrg">LVL NRG</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
} 