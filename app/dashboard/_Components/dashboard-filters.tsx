"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

const states = [
  { value: "CA", label: "California" },
  { value: "FL", label: "Florida" },
  { value: "TX", label: "Texas" },
  { value: "AZ", label: "Arizona" },
  { value: "NJ", label: "New Jersey" },
] as const;

export function DashboardFilters() {
  return (
    <div className="w-1/4">
      <div className="p-8 border rounded-lg space-y-8">
        <div className="flex items-center gap-2">
          <div className="dark:text-white text-black font-medium text-lg">
            Filters
          </div>
          <span className="dark:text-gray-300 text-gray-600 text-xs ml-3">
            Customize your view
          </span>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <label className="text-sm font-medium">Select Period</label>

            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent className="max-h-[200px] overflow-y-auto scrollbar scrollbar-w-1 scrollbar-thumb-rounded-lg scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="quarterly">Quarterly</SelectItem>
                <SelectItem value="yearly">Yearly</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-medium">
              Select Utility Provider
            </label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select utility provider" />
              </SelectTrigger>
              <SelectContent className="max-h-[200px] overflow-y-auto scrollbar scrollbar-w-1 scrollbar-thumb-rounded-lg scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                <SelectItem value="pge">Pacific Gas & Electric</SelectItem>
                <SelectItem value="sce">Southern California Edison</SelectItem>
                <SelectItem value="duke">Duke Energy</SelectItem>
                <SelectItem value="oncor">
                  Oncor Electric Delivery Company
                </SelectItem>
                <SelectItem value="fpl">Florida Power & Light</SelectItem>
                <SelectItem value="sdge">San Diego Gas & Electric</SelectItem>
                <SelectItem value="aps">Arizona Public Service</SelectItem>
                <SelectItem value="tec">Tampa Electric Company</SelectItem>
                <SelectItem value="ladwp">
                  Los Angeles Department of Water & Power
                </SelectItem>
                <SelectItem value="srp">
                  Salt River Project Power & Water
                </SelectItem>
                <SelectItem value="iid">
                  Imperial Irrigation District
                </SelectItem>
                <SelectItem value="mid">Modesto Irrigation District</SelectItem>
                <SelectItem value="tep">Tucson Electric Power</SelectItem>
                <SelectItem value="lcec">
                  Lee County Electric Cooperative
                </SelectItem>
                <SelectItem value="smud">
                  Sacramento Municipal Utility District
                </SelectItem>
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
            <label className="text-sm font-medium">Select State</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select state" />
              </SelectTrigger>
              <SelectContent>
                {states.map((state) => (
                  <SelectItem key={state.value} value={state.value}>
                    {state.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-3">
            <label className="text-sm font-medium">Select Sales Company</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select company" />
              </SelectTrigger>
              <SelectContent className="max-h-[200px] overflow-y-auto">
                <SelectItem value="clean-power">Clean Power</SelectItem>
                <SelectItem value="100-mill-solar">100 Mill Solar</SelectItem>
                <SelectItem value="lgcy">LGCY</SelectItem>
                <SelectItem value="better-earth">Better Earth</SelectItem>
                <SelectItem value="benchmark">
                  Benchmark Group Of Com.
                </SelectItem>
                <SelectItem value="trust-solar">Trust Solar</SelectItem>
                <SelectItem value="kronos-solar">Kronos Solar</SelectItem>
                <SelectItem value="gnr-holdings">GNR Holdings</SelectItem>
                <SelectItem value="sodde-corporation">
                  Sodde Corporation
                </SelectItem>
                <SelectItem value="zen-power">Zen Power</SelectItem>
                <SelectItem value="be-vis-team">BE VIS Team</SelectItem>
                <SelectItem value="spartan-solar">Spartan Solar LLC</SelectItem>
                <SelectItem value="solarizer">Solarizer</SelectItem>
                <SelectItem value="discover-milestone">
                  Discover Milestone
                </SelectItem>
                <SelectItem value="honest-power">Honest Power</SelectItem>
                <SelectItem value="reach-solar">REACH Solar</SelectItem>
                <SelectItem value="radix">Radix</SelectItem>
                <SelectItem value="west-sun-solar">West Sun Solar</SelectItem>
                <SelectItem value="solar-educators">Solar Educators</SelectItem>
                <SelectItem value="utah-clean-power">
                  Utah Clean Power
                </SelectItem>
                <SelectItem value="lvl-nrg">LVL NRG</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}
