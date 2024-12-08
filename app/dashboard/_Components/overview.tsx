import { auth } from "@/app/auth";
import PageContainer from "@/app/components/page-container";
import { DashboardKPIs } from "./dashboard-kpis";

export default async function OverViewPage() {
  const session = await auth();

  return (
    <PageContainer scrollable>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-medium tracking-tight">
            Hi, {session?.user?.name?.split(" ")[0]} 👋
          </h2>
          <div className="text-sm text-muted-foreground">
            {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
        </div>

        {/* KPIs Section */}
        <DashboardKPIs />

        {/* Process Duration Metrics */}
       
      </div>
    </PageContainer>
  );
}
